import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";

function EditButton() {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState("undefined");

  const handleButtonClick = () => {
    setEditing(!editing);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleInputBlur = () => {
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <input type="text" value={text} onChange={handleInputChange} onBlur={handleInputBlur} />
      ) : (
        <span>{text}</span>
      )}
      <Button variant="" className="p-0 float-end" onClick={handleButtonClick}> <FiEdit /> </Button>
    </div>
    
  );
}

export default EditButton;