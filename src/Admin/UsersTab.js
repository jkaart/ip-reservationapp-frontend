import { useEffect, useState } from "react";
import { getUsers } from "./API";
import { Button, Col, Row, Form } from "react-bootstrap";

const User = (props) => {
    const {id, rowData} = props;
    
    return <>
        <Row id={id} className="border rounded p-2" >
            <Col sm='2' title={rowData.email} className="p-1">
                <span className="align-middle">
                    {rowData.name}
                </span>
            </Col>
            <Col sm='5' md='3' lg='2'>
                <Form.Select defaultValue={rowData.role} className={rowData.role === 'admin' ? 'text-primary' : rowData.role === 'null' && 'text-warning'}>
                    <option value='admin' className="text-primary">Admin</option>
                    <option value='user' className="text-body">User</option>
                    <option value='null' className="text-warning">No access</option>
                </Form.Select>
                {/* <Button variant="primary">Admin</Button>
                <Button variant="success">User</Button>
                <Button variant="warning">No access</Button>
                {rowData.role} */}
            </Col>
            <Col>
                buttons
            </Col>
        </Row>
    </>
}

const UserTable = (props) => {
    const {users} = props;

    console.log(users);

    return users.map((rowData, index) => {
        return <User
            key={rowData.id}
            id={rowData.id}
            rowData={rowData}>
        </User>
    })
}

const UsersTab = (props) => {
    const { user } = props;
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const usersPromise = getUsers(user.token);
        usersPromise.then((response) => {
            setUsers(response.data);
        }).catch((error) => {

        });
    }, [user.token])

    return (
        <>
            <Row className="p-2">
                <Col>
                    <UserTable users={users} ></UserTable>
                </Col>
            </Row>
        </>
    )
}

export default UsersTab;