import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

function IPReservedTable(data) {
    return (
        <Row className="mt-4">
            <Col>
                {data === null ? (
                    <p>You have no active reservations.</p>
                ) : (
                    <>
                        <Row>
                            <Col className="d-md-block d-sm-none" md='1'>
                                #
                            </Col>
                            <Col className="d-md-block d-sm-none" md='2'>
                                IP
                            </Col>
                            <Col className="d-md-block d-sm-none" md='3'>
                                Reservation ends
                            </Col>
                            <Col className="d-md-block d-sm-none" md='4'>
                                Description
                            </Col>
                            <Col className="d-md-block d-sm-none" md='2'>
                                Modify Reservation
                            </Col>
                        </Row>
                        <Row>
                            <Col sm md='1'>
                                1
                            </Col>
                            <Col sm md='2'>
                                10.36.64.20
                            </Col>
                            <Col sm md='3'>
                                28.02.2023 - 7 days
                            </Col>
                            <Col sm md='4'>
                                Server
                            </Col>
                            <Col sm md='2'>
                            <Button variant="success">Renew</Button>{' '}
                                    <Button variant="danger">Cancel</Button>
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