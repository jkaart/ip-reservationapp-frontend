import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import UserProfile from './UserInfo';
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
        <>
            <UserProfile userData={data} />
            <IPReservedTable ipData={data} />
        </>
    );
}


export default Reserve;