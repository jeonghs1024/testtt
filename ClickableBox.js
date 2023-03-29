import React, { useState } from "react";
import Box from "./Box";

function ClickableBox({ content, timeNotes, setTimeNotes }) {
  const [isOpen, setIsOpen] = useState(false);

  const filteredTimeNotes = timeNotes.filter((note) => note.day === content);

  return (
    <div className="clickable-box" onClick={() => setIsOpen(!isOpen)}>
      {content}
      {isOpen && (
        <Box
          onClose={() => setIsOpen(false)}
          timeNotes={filteredTimeNotes}
          setTimeNotes={setTimeNotes}
          day={content}
        />
      )}
    </div>
  );
}

export default ClickableBox;
