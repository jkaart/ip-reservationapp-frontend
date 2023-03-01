import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { IPTableHeader } from "./IPTableHeader";

function IPReservedTable(data) {
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
                                10.36.64.20
                            </Col>
                            <Col sm md='3'>
                                28.02.2023 - 7 days
                            </Col>
                            <Col sm md='4'>
                                Server
                            </Col>
                            <Col sm md='3'>
                                <Button variant="success" className="border-dark p-2">Renew</Button>{' '}
                                <Button variant="danger" className="border-dark p-2">Cancel</Button>
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