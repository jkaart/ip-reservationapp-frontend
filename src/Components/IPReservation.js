import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

function IPReservation(data) {
    const reserveIP = () => {
    
    };
    return (
        <Row className='mt-4'>
            <Col>
                <Button onClick={reserveIP}>New IP-address</Button>
            </Col>
        </Row>
    );
};

export default IPReservation;