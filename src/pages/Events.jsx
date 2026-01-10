import { Link } from "react-router-dom";
import { events } from "../data/events";
import "./Events.css";

export default function Events() {
  return (
    <div className="events-container">
      <h1>Upcoming Events</h1>

      <div className="events-row">
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>

            <Link to={`/event/${event.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
