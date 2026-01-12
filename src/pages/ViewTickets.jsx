import "./ViewTickets.css";

export default function ViewTickets() {
  const currentUser = localStorage.getItem("currentUser");
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  const userTickets = bookings.filter(
    b => b.userEmail === currentUser
  );

  if (!userTickets.length) {
    return <h2 className="no-ticket">No ticket found</h2>;
  }

  const ticket = userTickets[userTickets.length - 1];

  const fee = 18.88;
  const total = ticket.price * ticket.tickets + fee;

  return (
    <div className="ticket-wrapper">
      <div className="bms-ticket">
        <div className="ticket-img">
          <img src={ticket.image} alt={ticket.title} />
        </div>

        <div className="ticket-info">
          <h2>{ticket.title}</h2>
          <p>{ticket.date} | {ticket.time}</p>
          <p>{ticket.venue}</p>
          <p>Qty: {ticket.tickets}</p>

          <div>Amount Paid: ₹{total}</div>
        </div>
      </div>
    </div>
  );
}
  