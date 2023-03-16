import React from 'react';
import { Container } from "react-bootstrap";
import UserResetPassword from './UserResetPassword';
import UserRequestRemoval from './UserRequestRemoval';


function User(props) {
    const {} = props;
    let data = "";

    return (
        <Container>
            <UserResetPassword userData={data}/>
            <UserRequestRemoval userData={data}/>
        </Container>
    );
}

export default User;