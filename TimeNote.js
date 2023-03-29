import React, { useState, useEffect } from "react";

function TimeNote({ timeNotes, setTimeNotes }) {
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddTimeNote = () => {
    if (!time || !note) {
      return;
    }
    const newTimeNote = { time, note };
    setTimeNotes([...timeNotes, newTimeNote]);
    setTime("");
    setNote("");
    localStorage.setItem(
      "timeNotes",
      JSON.stringify([...timeNotes, newTimeNote])
    );
  };
  useEffect(() => {
    const storedTimeNotes = localStorage.getItem("timeNotes");
    if (storedTimeNotes) {
      setTimeNotes(JSON.parse(storedTimeNotes));
    }
  }, []);

  return (
    <div className="time-note">
      <div className="time-input">
        <label htmlFor="time-input"></label>
        <input
          type="time"
          id="appt"
          name="appt"
          min="09:00"
          max="18:00"
          required
          value={time}
          onChange={handleTimeChange}
        />
      </div>
      <div className="time-memo">
        <label htmlFor="note-input"></label>
        <textarea
          id="note-input"
          value={note}
          onChange={handleNoteChange}
          placeholder="Enter a note"
        />
      </div>
      <button onClick={handleAddTimeNote}>Add</button>
      {timeNotes.length > 0 && (
        <div className="time-note-list">
          <h3>Your notes:</h3>
          <ul>
            {timeNotes.map((note, index) => (
              <li key={index}>
                <strong>{note.time}: </strong>
                {note.note}
              </li>
            ))}
          </ul>
          {note && time && (
            <div>
              <strong>{time}: </strong>
              {note}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TimeNote;
