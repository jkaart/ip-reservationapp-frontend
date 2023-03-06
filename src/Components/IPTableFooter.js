import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

export const IPTableFooter = () => {
    return (
        <Button className="mt-4 float-end" variant="danger">Remove</Button>
    );
}