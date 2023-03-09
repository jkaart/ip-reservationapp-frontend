import { Row, Col, Card } from "react-bootstrap";

function UserInfo(props) {
    const {name, email, group} = props;
    return (
        <Row className="mt-4">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{"Hello, " + name + "!"}</Card.Title>
                        <Card.Text>
                            <b>Email:</b> {email}
                            <br/>
                            <b>Group:</b> {group}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default UserInfo;