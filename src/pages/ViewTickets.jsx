import "./ViewTickets.css";

export default function ViewTickets() {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const ticket = bookings.length ? bookings[bookings.length - 1] : null;

  if (!ticket) return <h2 className="no-ticket">No ticket found</h2>;

  const price = Number(ticket.price || 200);   // fallback price
  const qty = Number(ticket.tickets || 1);
  const fee = 18.88;
  const total = price * qty + fee;

  return (
    <div className="ticket-wrapper">
      <div className="bms-ticket">

        {/* IMAGE */}
        <div className="ticket-img">
          <img
  src={ticket.image || "/images/default-event.jpg"}
  alt={ticket.title}
/>

        </div>

        {/* INFO */}
        <div className="ticket-info">
          <h2>{ticket.title}</h2>
          <span className="format">2D</span>

          <p className="datetime">{ticket.date} | {ticket.time}</p>
          <p className="venue">{ticket.venue || "Phoenix Marketcity Arena"}</p>
          <p className="qty">Quantity: {qty}</p>

          <div className="price-row">
            <span>Ticket price</span>
            <span>₹{price}</span>
          </div>

          <div className="price-row small">
            <span>Convenience fees</span>
            <span>₹{fee}</span>
          </div>

          <hr />

          <div className="total">
            <span>Amount Paid</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        {/* STATUS */}
        <div className="ticket-status">
          <span className="pickup">Pick Up</span>
          <div className="stamp">CONFIRMED</div>
        </div>

      </div>
    </div>
  );
}
