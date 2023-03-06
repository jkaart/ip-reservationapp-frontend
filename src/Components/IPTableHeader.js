import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

export const IPTableHeader = () => {
    return (
        <Row className="bg-light fw-bold m-0 p-2 border rounded d-md-flex d-sm-none d-none">
            <Col className="d-md-block d-sm-none d-none" md='2'>
                IP
            </Col>
            <Col className="d-md-block d-sm-none d-none" md='3'>
                Reservation ends
            </Col>
            <Col className="d-md-block d-sm-none d-none" md='6'>
                Description
            </Col>
            <Col className="d-md-block d-sm-none d-none text-end" md='1'>
                Select
            </Col>
        </Row>
    );
}