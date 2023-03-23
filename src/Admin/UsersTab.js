import { useEffect, useState } from "react";
import { getUsers } from "./API";
import { Col, Row } from "react-bootstrap";

const User = (props) => {
    const {id, rowData} = props;
    
    return <>
        <Row id={id} className="border rounded p-2" >
            <Col>
                {rowData.email}
            </Col>
            <Col>
                {rowData.role}
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