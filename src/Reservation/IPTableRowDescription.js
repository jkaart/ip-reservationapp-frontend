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

    const handleInputBlur = () => {
        setEditing(false);
        // Reset the current text to match the old text
        setText(oldText);
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
                <FormControl type="text" value={text} placeholder="Description of usage" onChange={handleInputChange} onBlur={handleInputBlur} disabled={editing} />
                &nbsp;&nbsp;
                <Button variant="light" className={editing?"p-1":"d-none"} onClick={handleEditClick} style={{borderColor: "rgb(206, 212, 218)"}}> <FiEdit /> </Button>
                <Button variant="success" className={editing?"d-none":"p-1"} onClick={handleConfirmClick}> <FiCheck /> </Button>
                <Button variant="danger" className={editing?"d-none":"p-1"} onClick={handleCancelClick}> <FiX /> </Button>
            </div>
        </>
    );
}

export default Description;