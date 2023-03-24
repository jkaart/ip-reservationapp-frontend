import { useEffect, useState } from "react";
import { getUsers, setUserRole } from "./API";
import { Button, Col, Row, Form } from "react-bootstrap";

const User = (props) => {
    const {user, id, rowData} = props;
    const [role, setRole] = useState(rowData.role)
    if(user.email === rowData.email) return '';
    
    const handleUpdateRoleClick = () => {
        setUserRole(user.token, id, role);
    };
    const handleRoleChange = (event) => {
        console.log(event.target.value);
        setRole(event.target.value);
    }

    return <>
        <Row id={id} className="border rounded p-2" >
            <Col sm='2' title={rowData.email} className="p-1">
                <span className="align-middle">
                    {rowData.name}
                </span>
            </Col>
            <Col sm='5' md='3' lg='2'>
                <Form.Select defaultValue={role} className={role === 'admin' ? 'text-primary' : role === 'null' && 'text-warning'} onChange={handleRoleChange}>
                    <option value='admin' className="text-primary">Admin</option>
                    <option value='user' className="text-body">User</option>
                    <option value='null' className="text-warning">No access</option>
                </Form.Select>
            </Col>
            <Col>
                <Button variant="light" className="border" onClick={handleUpdateRoleClick}>Update role</Button>
                &nbsp;
                {/* <Button variant='warning' disabled={(rowData.role === 'admin')}>Show actions</Button>
                <span>
                    &nbsp;
                    <Button className="">
                        Free user IPs
                    </Button>
                    <Button variant='danger' className="float-end">
                        Delete user
                    </Button>
                </span> */}
            </Col>
        </Row>
    </>
}

const UserTable = (props) => {
    const {users, user} = props;

    console.log(users);

    return users.map((rowData, index) => {
        return <User
            key={rowData.id}
            id={rowData.id}
            rowData={rowData}
            user={user}>
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
                    <UserTable users={users} user={user}></UserTable>
                </Col>
            </Row>
        </>
    )
}

export default UsersTab;