import { useEffect, useState } from "react";
import { getUsers, updateUserRole } from "./API";
import { Button, Col, Row, Form } from "react-bootstrap";
import show from "../utils/AlertManager";

const User = (props) => {
    const { user, id, rowData } = props;
    const [role, setRole] = useState(rowData.role)
    const [actionsHidden, setActionsHidden] = useState('d-none');
    if (user.email === rowData.email) return '';

    const handleUpdateRoleClick = () => {
        try{
            updateUserRole(user.token, id, role);
            show.success("User role updated.", "update");
        } catch (error){
            show.error("Could not update user role!");
        }
    };
    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };
    const handleShowActionsClick = () => {
        actionsHidden ? setActionsHidden('') : setActionsHidden('d-none');
    };

    return <>
        <Row id={id} className="border rounded p-2" >
            <Col xs='12' md='3' title={rowData.email} className="p-1">
                <span className="align-middle">
                    {rowData.email}
                    <br/>Group:&nbsp;
                    {rowData.group}
                </span>
            </Col>
            <Col xs='4' sm='3' md='2'>
                <Form.Select defaultValue={role} className={role === 'admin' ? 'text-primary' : role === 'null' && 'text-warning'} onChange={handleRoleChange}>
                    <option value='admin' className="text-primary">Admin</option>
                    <option value='user' className="text-body">User</option>
                    <option value='null' className="text-warning">No access</option>
                </Form.Select>
            </Col>
            <Col xs='8' sm='5' md='3'>
                <Button variant="light" className="border" onClick={handleUpdateRoleClick}>Update role</Button>
            </Col>
            <Col xs='12' md='4'>
                &nbsp;
                <span className="float-end">
                    <span className={actionsHidden}>
                        <Button className="">
                            Free IPs
                        </Button>
                        &nbsp;
                        <Button variant='danger' className="">
                            Delete
                        </Button>
                        &nbsp;
                    </span>
                    <Button variant='warning ms-3' disabled={(role === 'admin')} onClick={handleShowActionsClick}>{actionsHidden ? 'Actions' : 'Hide'}</Button>
                </span>
            </Col>
        </Row>
    </>
}

const UserTable = (props) => {
    const { users, user } = props;

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