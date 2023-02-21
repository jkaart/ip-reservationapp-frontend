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
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>IP</th>
                                <th>Reservation ends</th>
                                <th>Modify reservation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>10.36.64.20</td>
                                <td>28.02.2023 - 10:00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>10.36.64.21</td>
                                <td>28.02.2023 - 10:00</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>10.36.64.22</td>
                                <td>28.02.2023 - 10:00</td>
                                <td><Button variant="success">Renew</Button>{' '}
                                <Button variant="danger">Cancel</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                )}
            </Col>
        </Row>
    );
};

export default IPReservedTable;