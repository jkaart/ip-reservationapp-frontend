import React from 'react';
import { Row, Col, Card, Container, Form, Button } from "react-bootstrap";
import UserProfile from './UserInfo';
import UserResetPassword from './UserResetPassword';


function User(data) {
    //const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    //const [group, setGroup] = useState("");
    data = "";

    return (
        <Container>
            <UserProfile userData={data} />
            <UserResetPassword userData={data}/>
        </Container>
    );
}

export default User;