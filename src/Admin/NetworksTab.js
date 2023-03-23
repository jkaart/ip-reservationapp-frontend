import { useEffect, useState } from "react";
import { getNetworks } from "./API";
import { Col, Row } from "react-bootstrap";

const Network = (props) => {
    const {id, rowData} = props;
    
    return <>
        <Row id={id} className="border rounded p-2" >
            <Col>
                {rowData.networkName}
            </Col>
            <Col>
                {rowData.hostMin}
            </Col>
            <Col>
                {rowData.hostMax}
            </Col>
            <Col>
                buttons
            </Col>
        </Row>
    </>
}

const NetworkTable = (props) => {
    const {networks} = props;

    console.log(networks);

    return networks.map((rowData, index) => {
        return <Network
            key={rowData.id}
            id={rowData.id}
            rowData={rowData}>
        </Network>
    })
}

const NetworksTab = (props) => {
    const { user } = props;
    const [networks, setNetworks] = useState([]);
    
    useEffect(() => {
        const networksPromise = getNetworks(user.token);
        networksPromise.then((response) => {
            setNetworks(response.data);
        }).catch((error) => {

        });
    }, [user.token])

    return (
        <>
            <Row className="p-2">
                <Col>
                    <NetworkTable networks={networks} ></NetworkTable>
                </Col>
            </Row>
        </>
    )
}

export default NetworksTab;