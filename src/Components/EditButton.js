import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { FiCheck, FiEdit, FiX } from "react-icons/fi";

function EditButton(props) {
    const {description} = props;
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(description);

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
        <>
            {editing ? (
                <div className="d-flex">
                    <FormControl className="" type="text" value={text} placeholder="Description of usage" onChange={handleInputChange} onBlur={handleInputBlur} />
                    &nbsp;&nbsp;
                    <Button variant="" className="p-0" onClick={handleButtonClick}> <FiCheck /> </Button>
                    <Button variant="" className="p-0" onClick={handleButtonClick}> <FiX /> </Button>
                </div>
            ) : (
                <span className="align-middle">{text} <Button variant="" className="p-0 float-end" onClick={handleButtonClick}> <FiEdit /> </Button></span>
            )}

        </>
    );
}

export default EditButton;