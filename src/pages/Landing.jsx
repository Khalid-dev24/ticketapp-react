import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="landing">
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to TicketApp</h2>
          <p>
            Manage your tickets efficiently across teams and projects — all in one place.
          </p>
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
          </div>
        </div>

        <div className="wave"></div>
      </section>

      <section className="features">
        <div className="feature-box">
          <h3>Track Issues</h3>
          <p>Monitor ticket progress easily with color-coded status tags.</p>
        </div>
        <div className="feature-box">
          <h3>Collaborate</h3>
          <p>Work together with your team in real-time and stay updated.</p>
        </div>
        <div className="feature-box">
          <h3>Stay Organized</h3>
          <p>Keep your workflow structured and efficient from start to finish.</p>
        </div>
      </section>
    </main>
  );
}
