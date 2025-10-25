import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Toast from "../../components/Toast";
import { createSession } from "../../utils/auth";
import "../../styles/global.css";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setToast({ message: "All fields are required.", type: "error" });
      return;
    }

    localStorage.setItem("ticketapp_user", JSON.stringify(form));
    createSession(form);
    setToast({ message: "Signup successful!", type: "success" });
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Create Account</h2>
        <input type="text" id="name" placeholder="Full Name" onChange={handleChange} />
        <input type="email" id="email" placeholder="Email" onChange={handleChange} />
        <input type="password" id="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </div>
  );
};

export default Signup;
