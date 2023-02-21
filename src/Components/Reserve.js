import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import UserProfile from './UserInfo';
import IPReservation from './IPReservation';
import IPReservedTable from './IPReservedTable';

const Reserve = () => {
    const [data, setData] = useState(null);

    const fetchData = () => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container>
            <UserProfile userData={data} />
            <IPReservation/>
            <IPReservedTable ipData={data} />
        </Container>
    );
}


export default Reserve;