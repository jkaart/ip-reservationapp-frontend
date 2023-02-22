import React from 'react';
import { Row, Col, Card, Container, Form, Button, FormLabel } from "react-bootstrap";
import UserProfile from './UserInfo';
import PasswordField from './PasswordField';

function passCheck(props) {
    const { value } = props;
    console.log(value);
}

function UserResetPassword(data) {
    //const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    //const [group, setGroup] = useState("");
    data = "";

    return (
        <Row>
            <Col md="4" className='mt-4'>
                <Form>
                    <h3>Reset password</h3>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <FormLabel>Current Password</FormLabel>
                        <PasswordField />
                        <Form.Label className="mt-3">New Password</Form.Label>
                        <PasswordField className="mb-1" id="1" onChange={true}/>
                        <PasswordField className="" id="2" />
                        <Form.Text className="text-muted">
                            Entered passwords must differ.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Reset password
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}

export default UserResetPassword;