import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { events } from "../data/events";
import "./EventDetails.css";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find(e => e.id === Number(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(1);
  const [success, setSuccess] = useState(false);

  if (!event) return <h2>No Event Found</h2>;

  const handleBooking = () => {
    if (!name || !email) {
      alert("Fill all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push({
      id: Date.now(),
      eventId: event.id,
      title: event.title,
      date: event.date,
      time: event.time,
      venue: event.venue,
      location: event.location,
      price: event.price,
      image: event.image,   
      tickets: Number(tickets),
      name,
      email
    });

    localStorage.setItem("bookings", JSON.stringify(bookings));

    setSuccess(true);

  
    setTimeout(() => navigate("/view-tickets"), 1000);
  };

  return (
    <div className="event-details-page">

   
      <div className="event-banner">
        <img src={event.image} alt={event.title} />
        <div className="banner-text">
          <h1>{event.title}</h1>
          <p>{event.description}</p>
        </div>
      </div>

   
      <div className="event-booking">
        <div className="booking-box">
          <h3>Event Details</h3>

          <p><strong>Date:</strong> {new Date(event.date).toDateString()}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Venue:</strong> {event.venue}</p>

          <hr />

          {success ? (
            <p className="success">✅ Ticket Booked Successfully</p>
          ) : (
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

              <button onClick={handleBooking}>Book Now</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
