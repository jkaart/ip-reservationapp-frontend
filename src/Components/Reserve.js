import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import UserInfo from './UserInfo';
import IPReservedTable from './IPReservedTable';

const Reserve = (props) => {
    const {login, name, email, group} = props;
    console.log('reserve:', name, email, group);

    const fetchIPReservations = () => {

    };

    return (
        <>
            <UserInfo props={{name, email, group}} />
            <IPReservedTable ipData />
        </>
    );
}


export default Reserve;