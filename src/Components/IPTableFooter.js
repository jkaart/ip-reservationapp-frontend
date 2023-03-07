import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

export const IPTableFooter = (props) => {
    return (
        <Row>
            <Col>
                <Button className="mt-4" variant="primary" >New IP-address</Button>
                <Button className="mt-4 float-end" variant="danger">Remove</Button>
            </Col>
        </Row>
    );
}