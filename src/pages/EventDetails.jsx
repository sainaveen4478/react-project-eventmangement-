import { useState } from "react";
import { useParams } from "react-router-dom";
import { events } from "../data/events";
import "./EventDetails.css";

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(1);
  const [success, setSuccess] = useState(false);

  if (!event) return <h2>No Event Found</h2>;

  return (
    <div className="event-full">
      
      <div className="event-left">
        <img src={event.image} alt={event.title} />

        <div className="event-text">
          <h1>{event.title}</h1>

          <p className="meta">
            📅 {event.date} &nbsp; | &nbsp; 📍 {event.location}
          </p>

          <p className="desc">
            {event.description}
          </p>
        </div>
      </div>

      <div className="event-right">
        <h2>Book Tickets</h2>

        {!success ? (
          <>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <input
              type="number"
              min="1"
              value={tickets}
              onChange={e => setTickets(e.target.value)}
            />

            <button onClick={() => setSuccess(true)}>
              Confirm Booking
            </button>
          </>
        ) : (
          <div className="success">✅ Booking Confirmed</div>
        )}
      </div>
    </div>
  );
}
