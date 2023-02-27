import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Stack } from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse';

function UserRequestRemoval(data) {
    //const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    //const [group, setGroup] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <Row>
            <Col md="4" className="mt-4">
                <br />
                <Card>
                    <Card.Body>
                        <Card.Title 
                            onClick={() => setOpen(!open)}
                            aria-controls="removal-button"
                            aria-expanded={open}
                        >
                            Request account removal
                        </Card.Title>
                        <Collapse in={open} dimension="width">
                            <Card.Text id="removal-button">
                                <Stack direction="horizontal" gap={3}>
                                    <Button className="" variant="danger" type="submit">
                                        Confirm request
                                    </Button>
                                    {/*<div className="vr" />*/}
                                    <Button className="" variant="primary" type="submit">
                                        Cancel
                                    </Button>
                                </Stack>
                            </Card.Text>
                        </Collapse>
                    </Card.Body>
                </Card>

            </Col>
        </Row>
    );
}

export default UserRequestRemoval;