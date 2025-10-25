import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

export default function Tickets() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "open",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [message, setMessage] = useState("");

  // Redirect unauthorized users
  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    if (!session) {
      navigate("/login");
    } else {
      const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
      setTickets(storedTickets);
    }
  }, [navigate]);

  // Save tickets to localStorage
  const saveTickets = (newTickets) => {
    setTickets(newTickets);
    localStorage.setItem("tickets", JSON.stringify(newTickets));
  };

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create or Update a ticket
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      setMessage("Title is required!");
      return;
    }

    if (!["open", "in_progress", "closed"].includes(form.status)) {
      setMessage("Invalid status selected.");
      return;
    }

    const newTickets = [...tickets];

    if (editingIndex !== null) {
      newTickets[editingIndex] = form;
      setMessage("✅ Ticket updated successfully!");
    } else {
      newTickets.push(form);
      setMessage("🎟️ Ticket created successfully!");
    }

    saveTickets(newTickets);
    setForm({ title: "", description: "", status: "open" });
    setEditingIndex(null);

    setTimeout(() => setMessage(""), 2500);
  };

  // Edit a ticket
  const handleEdit = (index) => {
    setForm(tickets[index]);
    setEditingIndex(index);
  };

  // Delete a ticket
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      const updatedTickets = tickets.filter((_, i) => i !== index);
      saveTickets(updatedTickets);
      setMessage("🗑️ Ticket deleted!");
      setTimeout(() => setMessage(""), 2500);
    }
  };

  return (
    <div className="tickets-container">
      <header>
        <h1>🎫 Ticket Management</h1>
      </header>

      {message && <p className="toast">{message}</p>}

      <form className="ticket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Ticket title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          required
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>

        <button type="submit" className="submit-btn">
          {editingIndex !== null ? "Update Ticket" : "Add Ticket"}
        </button>
      </form>

      <section className="ticket-list">
        {tickets.length === 0 ? (
          <p>No tickets yet. Create one above!</p>
        ) : (
          tickets.map((ticket, index) => (
            <div key={index} className={`ticket-card ${ticket.status}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.description}</p>
              <span className={`status ${ticket.status}`}>{ticket.status}</span>
              <div className="ticket-actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
