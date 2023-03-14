import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { FiCheck, FiEdit, FiX } from "react-icons/fi";

function EditButton(props) {
    const {description, updateRowDescription} = props;
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState({text: description, oldText: description});

    const handleConfirmClick = () => {
        updateRowDescription(text.text);
        setText({oldText:text.text, text:text.text});
        setEditing(false);
    };
    const handleCancelClick = () => {
        setText({text: text.oldText, oldText: text.oldText});
        setEditing(false);
    };
    const handleEditClick = () => {
        setEditing(true);
    };

    const handleInputChange = (event) => {
        setText({text:event.target.value, oldText:text.oldText});
        /*setText((prevState) => ({
            ...prevState,
            text: event.target.value,
          })); */
    };

    const handleInputBlur = () => {
        setEditing(false);
        setText({text: text.oldText, oldText: text.oldText});
        /*setText((prevState) => ({
            ...prevState,
            text: prevState.oldText,
          })); */
    };

    return (
        <>
            {editing ? (
                <div className="d-flex">
                    <FormControl className="" type="text" value={text.text} placeholder="Description of usage" onChange={handleInputChange} onBlur={handleInputBlur} />
                    &nbsp;&nbsp;
                    <Button variant="success" className="p-1" onClick={handleConfirmClick}> <FiCheck /> </Button>
                    <Button variant="danger" className="p-1" onClick={handleCancelClick}> <FiX /> </Button>
                </div>
            ) : (
                <span className="align-middle pt-2">{text.text} <Button variant="" className="p-1 float-end" onClick={handleEditClick}> <FiEdit /> </Button></span>
            )}

        </>
    );
}

export default EditButton;