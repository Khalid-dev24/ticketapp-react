import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Toast from "../../components/Toast";
import { createSession } from "../../utils/auth";
import "../../styles/global.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("ticketapp_user"));
    if (!storedUser) {
      setToast({ message: "No account found. Please sign up first.", type: "error" });
      return;
    }

    if (
      form.email === storedUser.email &&
      form.password === storedUser.password
    ) {
      createSession(storedUser);
      setToast({ message: "Login successful!", type: "success" });
      setTimeout(() => navigate("/dashboard"), 1500);
    } else {
      setToast({ message: "Invalid email or password.", type: "error" });
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Login</h2>
        <input type="email" id="email" placeholder="Email" onChange={handleChange} />
        <input type="password" id="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </div>
  );
};

export default Login;
