import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

export const IPTableFooter = (props) => {
    const { addTableRow, removeButton } = props;

    return (
        <Row>
            <Col>
                <Button
                    id='newIPButton'
                    variant="primary"
                    className="mt-4"
                    title="Fetch a new IP-address to be confirmed for reservation."
                    onClick={() => {addTableRow()}}>
                    New IP-address
                </Button>
                <Button
                    id='removeIPButton'
                    variant="danger"
                    className="mt-4 float-end"
                    disabled={removeButton}
                    title="Select an IP address to remove"
                    aria-label="Select an IP address to remove" >
                    Remove selected
                </Button>
            </Col>
        </Row>
    );
}