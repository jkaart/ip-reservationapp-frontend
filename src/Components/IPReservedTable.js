import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { IPTableHeader } from "./IPTableHeader";
import { FiEdit, FiPlusSquare, FiSquare, FiCheckSquare } from "react-icons/fi";

function IPReservedTable(data) {
    const [check, checked] = useState(false);
    const handleToggleCheckbox = () => {
        checked(!check);
    };
    return (
        <Row className="mt-4">
            <Col>
                {data === null ? (
                    <p>You have no active reservations.</p>
                ) : (
                    <>
                        <IPTableHeader></IPTableHeader>
                        <Row className="border rounded m-0 p-2">
                            <Col sm md='2'>
                                <span className="align-middle">10.36.64.20</span>
                            </Col>
                            <Col sm md='3'>
                                <span className="align-middle">28.02.2023 - 7 days</span>
                                <Button variant="" className="p-0 float-end"> <FiPlusSquare size={30} /> </Button>
                            </Col>
                            <Col sm md='6'>
                                <span className="align-middle">Server</span>
                                <Button variant="" className="p-0 float-end"> <FiEdit size={30} /> </Button>
                            </Col>
                            <Col sm md='1' className=''>
                                <Button variant="" className="p-0 float-end" onClick={handleToggleCheckbox}> {check ? <FiCheckSquare size={30} /> : <FiSquare size={30} />}  </Button>
                            </Col>
                        </Row>


                        {/*<tbody>
                                {tableData.map((rowData, index) => (
                                <tr key={index}>
                                    {rowData.map((cellData, cellIndex) => (
                                    <td key={cellIndex}>{cellData}</td>
                                    ))}
                                </tr>
                                ))}
                            </tbody>*/}
                    </>
                )}
            </Col>
        </Row>
    );
};

export default IPReservedTable;