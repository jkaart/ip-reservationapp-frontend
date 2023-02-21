import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

function UserProfile(data) {
    //const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    //const [group, setGroup] = useState("");

    return (
        <Row className="mt-4">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{data.name + "/ test User, logged in"}</Card.Title>
                        <Card.Text>
                            <b>Email:</b> {data.email + "/ test email" + " "}
                            <br/>
                            <b>Group:</b> {data.group + "/ test school group"}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default UserProfile;