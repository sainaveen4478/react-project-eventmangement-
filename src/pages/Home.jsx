import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const isLoggedIn = localStorage.getItem("loggedIn");

  return (
    <div className="home-page">
      <div className="overlay">
        <div className="content">
          <h1>
            Eventtify <span></span>
          </h1>

          <p>
           Our Event Management Platform makes it easy to explore upcoming events, book tickets securely, and manage your bookings all in one place. From tech conferences and workshops to music nights and festivals, experience seamless event planning with a modern and intuitive interface.
            track bookings, and stay organized — all designed to deliver a smooth and engaging user experience.
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
