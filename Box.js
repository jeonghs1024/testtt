import React, { useState } from "react";
import TimeNote from "./TimeNote";
import { IoClose } from "react-icons/io5";
function Box({ onClose, timeNotes, setTimeNotes, day }) {
  const [showBox, setShowBox] = useState(true);

  const handleOnClick = () => {
    setShowBox(false);
  };

  const handleBoxClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      {showBox && (
        <div className="box" onClick={handleBoxClick}>
          <button className="close-button" onClick={onClose}>
            <IoClose />
          </button>
          <div>
            <TimeNote
              setTimeNotes={setTimeNotes}
              timeNotes={timeNotes}
              day={day}
            />
            <TimeNote
              setTimeNotes={setTimeNotes}
              timeNotes={timeNotes}
              day={day}
            />
            <TimeNote
              setTimeNotes={setTimeNotes}
              timeNotes={timeNotes}
              day={day}
            />

            {/* Add as many TimeNotePairs as you need */}
          </div>
        </div>
      )}
    </>
  );
}
export default Box;
