import { Row, Col, Card } from "react-bootstrap";
import { DEBUG } from "../config";

function UserInfo(props) {
    const {name, email, group} = props;
    return (
        <Row className="mt-4 mb-5">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{"Hello, " + (DEBUG ? "Debugger" : name) + "!"}</Card.Title>
                        <Card.Text>
                            <b>Email:</b> {DEBUG ? "debug@group.com" : email}
                            <br/>
                            <b>Group:</b> {DEBUG ? "Debug Group" : group}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default UserInfo;