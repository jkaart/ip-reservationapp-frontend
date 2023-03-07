import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FiEdit, FiPlusSquare, FiSquare, FiCheckSquare } from "react-icons/fi";
import { IconContext } from "react-icons";
import EditButton from "./EditButton";

export const IPTableRow = (props) => {
    const [check, checked] = useState(false);
    const handleToggleCheckbox = () => {
        checked(!check);
    };
    return (
        <IconContext.Provider value={{ size: "30px" }}>
            <Row className="border rounded m-0 p-2">
                <Col sm md='2'>
                    <span className="align-middle">10.36.64.20</span>
                </Col>
                <Col sm md='3'>
                    <span className="align-middle">28.02.2023 - 7 days</span>
                    <Button variant="" className="p-0 float-end"> <FiPlusSquare /> </Button>
                </Col>
                <Col sm md='6'>
                    <EditButton />
                </Col>
                <Col sm md='1' className=''>
                    <Button variant="" className="p-0 float-end" onClick={handleToggleCheckbox}> {check ? <FiCheckSquare /> : <FiSquare />}  </Button>
                </Col>
            </Row>
        </IconContext.Provider>
    );
}