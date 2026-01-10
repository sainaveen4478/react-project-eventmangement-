import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
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

          <div className="actions">
            <Link to="/events" className="btn primary">View Events</Link>
            <Link to="/create" className="btn secondary">Create Event</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
