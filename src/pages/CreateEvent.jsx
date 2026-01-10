import { useState } from "react";
import "./CreateEvent.css";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event Created (UI only)");
  };

  return (
    <div className="create-page">
      <form className="create-form" onSubmit={handleSubmit}>
        <h1>Create Event</h1>

        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={e => setImage(e.target.value)}
        />

        <textarea
          placeholder="Short Description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}
