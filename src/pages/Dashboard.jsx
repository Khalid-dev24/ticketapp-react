import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/global.css"

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    resolved: 0,
  });

  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    if (!session) {
      navigate("/login");
    }

    // Simulated stats (later this will come from ticket data)
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const open = tickets.filter((t) => t.status === "open").length;
    const resolved = tickets.filter((t) => t.status === "closed").length;

    setStats({
      total: tickets.length,
      open,
      resolved,
    });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🎟️ Ticket Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </header>

      <section className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Tickets</h3>
          <p>{stats.total}</p>
        </div>
        <div className="stat-card open">
          <h3>Open Tickets</h3>
          <p>{stats.open}</p>
        </div>
        <div className="stat-card resolved">
          <h3>Resolved Tickets</h3>
          <p>{stats.resolved}</p>
        </div>
      </section>

      <section className="dashboard-actions">
        <Link to="/tickets" className="manage-btn">
          Manage Tickets
        </Link>
      </section>
    </div>
  );
}
