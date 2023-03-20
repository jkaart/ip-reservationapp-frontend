import React, { useEffect, useState } from "react";
import { Button, Col, Container, FormControl, ListGroup, Row, Tab, Tabs } from "react-bootstrap";
import { getIPTable, getNetworks } from "./API";

const Admin = (props) => {
    const { user } = props;
    const [tableData, setTableData] = useState([]);
    const [networks, setNetworks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const IPTablePromise = getIPTable(user.token);
        const networksPromise = getNetworks(user.token);

        IPTablePromise.then((data) => {
            const formattedData = data.map(item => ({
                IP: item.ip,
                endDate: item.expirationDate,
                description: item.desc,
                id: item.id,
                createDate: item.createdAt,
                createdBy: item.user
            }));
            setTableData(formattedData);
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
        });
        networksPromise.then((data) => {
            /*const formattedData = data.map(item => ({
                IP: item.ip,
                endDate: item.expirationDate,
                description: item.desc,
                id: item.id,
                createDate: item.createdAt,
                createdBy: item.user
            }));*/
            setNetworks(data);
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
        });

    }, [user.token]);

    return (
        <Row>
            <Col>
                <Tabs
                    defaultActiveKey="ip"
                    id="justify-tab-example"
                    className=""
                    justify
                >
                    <Tab eventKey="ip" title="IP Table">
                        <Container className="border border-top-0 rounded-bottom p-3">
                            <Row>
                                <Col md="3">
                                    <FormControl></FormControl>
                                    <Button>Add New IP</Button>
                                </Col>
                                <Col md="9">
                                    <ListGroup defaultActiveKey="#link1">
                                        <ListGroup.Item>
                                            Header
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="#link2">
                                            Link 2
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={""}>
                                            This one is a button
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="users" title="Users">
                    <Container className="border border-top-0 rounded-bottom p-3">
                            <Row>
                                <Col md="3">
                                    1
                                </Col>
                                <Col md="9">
                                    2
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="network" title="Network">
                    <Container className="border border-top-0 rounded-bottom p-3">
                            <Row>
                                <Col md="3">
                                    1
                                </Col>
                                <Col md="9">
                                    2
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    );

};


export default Admin;