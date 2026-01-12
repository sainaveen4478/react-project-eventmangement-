import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
    window.location.reload();

    localStorage.removeItem("loggedIn");
localStorage.removeItem("currentUser");

  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

  
        <div className="logo" onClick={() => navigate("/events")}>
          Eventify
        </div>

      
        <div className="nav-links">
          <NavLink to="/events">Events</NavLink>
    
          <NavLink to="/view-tickets">Tickets</NavLink>

          
        </div>


        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>
    </nav>
  );
}
