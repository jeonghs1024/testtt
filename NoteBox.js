import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
function NoteBox({ title, notes, addNote, editNote, deleteNote }) {
  const [editedNote, setEditedNote] = useState("");
  const [noteIndex, setNoteIndex] = useState(null);
  const [newNote, setNewNote] = useState("");

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(newNote);
    setNewNote("");
  };

  const handleEditNote = (index) => {
    setNoteIndex(index);
    setEditedNote(notes[index].text);
  };

  const handleNoteEditChange = (e) => {
    setEditedNote(e.target.value);
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    editNote(notes[noteIndex].id, editedNote);
    setNoteIndex(null);
    setEditedNote("");
  };

  const handleDeleteNote = (index) => {
    deleteNote(notes[index].id);
  };

  return (
    <div className="note-box">
      <h2>{title}</h2>
      <ul className="note-box-ul">
        {notes.map((note, index) => (
          <li key={index}>
            {noteIndex === index ? (
              <form className="note-edit-form" onSubmit={handleSaveNote}>
                <input
                  className="note-edit"
                  type="text"
                  value={editedNote}
                  onChange={handleNoteEditChange}
                />
                <button className="note-edit-btn" type="submit">
                  <AiOutlineCheck />
                </button>
              </form>
            ) : (
              <div onClick={() => handleEditNote(index)}>{note.text}</div>
            )}
            <button className="close" onClick={() => handleDeleteNote(index)}>
              <IoClose />
            </button>
          </li>
        ))}
      </ul>
      <div className="space"></div>
      <form onSubmit={handleSubmit} className="note-input">
        <div className="notesubmit">
          <input
            type="text"
            className="noteinput"
            value={newNote}
            onChange={handleNoteChange}
            placeholder="      Add a note..."
          />
          <button type="submit" className="notebutton">
            <AiOutlineRight />
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteBox;
