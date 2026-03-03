<div className="event-details-page">

  <div className="event-banner">
    <img src={event.image} alt={event.title} />

    <div className="banner-text">
      <h1>{event.title}</h1>
      <p>{event.date} | {event.time}</p>
      <p>{event.location}</p>
    </div>
  </div>

  <div className="event-booking">
    <div className="booking-box">
      <h3>{event.title}</h3>

      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p><strong>Price:</strong> ₹{event.price}</p>
      <hr />

      {success ? (
        <p className="success">✅ Ticket Booked Successfully</p>
      ) : (
        <>
          <input
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="number"
            min="1"
            value={tickets}
            onChange={e => setTickets(Number(e.target.value))}
          />
          <button onClick={handleBooking}>Book Now</button>
        </>
      )}
    </div>
  </div>
</div>