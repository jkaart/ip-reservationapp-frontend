import React, { useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { FiCheck, FiEdit, FiX } from "react-icons/fi";

function Description(props) {
    const {description, updateTableData, index} = props;
    const [editing, setEditing] = useState(true);
    // Use two separate state variables for current and old text
    const [text, setText] = useState(description);
    const [oldText, setOldText] = useState(description);
    const [confirmClicked, setConfirmClicked] = useState(false);

    const handleConfirmClick = () => {
        // Update the old text to match the current text
        setConfirmClicked(true);

        setText(text);
        setOldText(text);
        setEditing(true);
    };
    const handleCancelClick = () => {
        // Reset the current text to match the old text
        setText(oldText);
        setEditing(true);
    };
    const handleEditClick = () => {
        setEditing(false);
    };

    const handleInputChange = (event) => {
        // Update only the current text
        setText(event.target.value);
    };

    const handleKeyUp = (e) => {
        // Reset the current text to match the old text on Escape
        if (e.code === "Escape")
        {
            setEditing(true);
            setText(oldText);
        }
    };

    useEffect(() => {
        if(confirmClicked)
        {
            updateTableData(index, 'description', text);
            setConfirmClicked(false);
        }
    }, [confirmClicked]);
    

    return (
        <>
            <div className="d-flex">
                <FormControl type="text" className={editing?"form-control-plaintext":""} value={text} placeholder="Description of usage" onChange={handleInputChange} onKeyUp={handleKeyUp} readOnly={editing}  />
                &nbsp;&nbsp;
                <Button variant="none" className={editing?"p-1":"d-none"} onClick={handleEditClick}> <FiEdit /> </Button>
                <Button variant="success" className={editing?"d-none":"p-1"} onClick={handleConfirmClick}> <FiCheck /> </Button>
                <Button variant="danger" className={editing?"d-none":"p-1"} onClick={handleCancelClick}> <FiX /> </Button>
            </div>
        </>
    );
}

export default Description;