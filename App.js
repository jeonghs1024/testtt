import "./App.css";
import NoteBox from "./components/NoteBox";
import ClickableBox from "./components/ClickableBox";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [timeNotes, setTimeNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, { id: Date.now(), text: newNote }]);
  };

  const editNote = (id, newText) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, text: newText };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <div className="todo-app">
        <h1 className="weeklyplaner">WEEKLY PLANNER</h1>
        <div className="note-container">
          <ClickableBox
            content="MONDAY"
            timeNotes={timeNotes}
            setTimeNotes={setTimeNotes}
          />
          <ClickableBox
            content="TUESDAY"
            timeNotes={timeNotes}
            setTimeNotes={setTimeNotes}
          />
          <ClickableBox
            content="WEDNESDAY"
            timeNotes={timeNotes}
            setTimeNotes={setTimeNotes}
          />
          <ClickableBox
            content="THURSDAY"
            timeNotes={timeNotes}
            setTimeNotes={setTimeNotes}
          />
          <ClickableBox
            content="FRIDAY"
            timeNotes={timeNotes}
            setTimeNotes={setTimeNotes}
          />
          <ClickableBox
            content="SATURDAY"
            timeNotes={timeNotes}
            setTimeNotes={setTimeNotes}
          />
          <ClickableBox
            content="SUNDAY"
            timeNotes={timeNotes}
            setTimeNotes={setTimeNotes}
          />
        </div>
        <NoteBox
          title="MEMO"
          notes={notes}
          editNote={editNote}
          deleteNote={deleteNote}
          setNotes={setNotes}
          addNote={addNote}
        />
      </div>
      <div className="chatbox">
        <div className="chat-input-holder">
          <input
            className="chat-input-textarea"
            placeholder="Ask your questions here..."
            id="inputCHAT"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default App;
