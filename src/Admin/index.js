import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import UsersTab from "./UsersTab";
import NetworksTab from "./NetworksTab";

const Admin = (props) => {
    const { user } = props;

    useEffect(() => {

    }, [user.token]);

    return (
        <Row>
            <Col>
                <Tabs
                    defaultActiveKey="users"
                    id="justify-tab-example"
                    className=""
                    justify
                >
                    <Tab eventKey="users" title="Users">
                        <Container className="border border-top-0 rounded-bottom p-3">
                            <UsersTab user={user}/>
                        </Container>
                    </Tab>
                    <Tab eventKey="network" title="Networks">
                        <Container className="border border-top-0 rounded-bottom p-3">
                            <NetworksTab user={user}/>
                        </Container>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    );

};


export default Admin;