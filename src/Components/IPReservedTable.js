import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { IPTableHeader } from "./IPTableHeader";
import { IPTableRow } from "./IPTableRow.js";
import { IPTableFooter } from "./IPTableFooter";

const IPTableRows = (props) => {
    const {} = props;

    return (
        <IPTableRow></IPTableRow>
    );
};

const IPReservedTable = (props) => {
    const {} = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Row className="mt-4">
            <Col>
                <IPTableHeader></IPTableHeader>
                <IPTableRows></IPTableRows>
                <IPTableFooter></IPTableFooter>
            </Col>
        </Row>
    );
};

export default IPReservedTable;