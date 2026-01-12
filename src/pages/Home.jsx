import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const isLoggedIn = localStorage.getItem("loggedIn");

  return (
    <div className="home-page">
      <div className="overlay">
        <div className="content">
          <h1>
            Event Management <span>Platform</span>
          </h1>

          <p>
            A modern web application to create, manage and book events
            seamlessly with a professional user experience.
          </p>

          {!isLoggedIn ? (
            <div className="home-buttons">
              <Link to="/login" className="btn">Login</Link>
              <Link to="/register" className="btn secondary">Register</Link>
            </div>
          ) : (
            <Link to="/events" className="btn">View Events</Link>
          )}
        </div>
      </div>
    </div>
  );
}
