import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { IPTableHeader } from "./IPTableHeader";
import { IPTableRow } from "./IPTableRow.js";
import { IPTableFooter } from "./IPTableFooter";


function IPReservedTable(data) {
    return (
        <Row className="mt-4">
            <Col>
                <IPTableHeader></IPTableHeader>
                <IPTableRow></IPTableRow>
                <IPTableFooter></IPTableFooter>
            </Col>
        </Row>
    );
};

export default IPReservedTable;