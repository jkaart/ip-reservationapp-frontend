import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Row, Col, Button, Form, Popover, OverlayTrigger } from "react-bootstrap";
import { FiTrash2 } from "react-icons/fi";
import show from "../utils/AlertManager";
import { getActiveNetworkRange } from "./API";

const CommandPanel = (props) => {
    const { tableData, addTableRow, buttonsDisabled, removeTableRow, renewTableRow, user } = props;
    const [ipAmount, setIpAmount] = useState(1);
    const [ipDescription, setIpDescription] = useState("");
    const [validity, setValidity] = useState(true);
    const [newIPButtonDisabled, setNewIPButtonDisabled] = useState(false);
    const [specificIP, setSpecificIP] = useState("");
    const [networkMin, setNetworkMin] = useState();
    const [networkMax, setNetworkMax] = useState();

    useEffect(() => {
        getActiveNetworkRange(user.token).then((response) => {
            setNetworkMin(response.data.find(network => network.networkActive).hostMin);
            setNetworkMax(response.data.find(network => network.networkActive).hostMax);
        })
    },[user.token]);

    const role = jwtDecode(user.token).role;
    const handleIPDescriptionChange = (e) => {
        setIpDescription(e.target.value);
        if (newIPButtonDisabled) setNewIPButtonDisabled(false);
    }
    const handleIPSelectAmount = (e) => {
        setIpAmount(parseInt(e.target.value))
        if (newIPButtonDisabled) setNewIPButtonDisabled(false);
    }
    const handleNewIPButton = (e) => {
        if (ipDescription.length > 4) {
            setNewIPButtonDisabled(true);
            addTableRow(ipAmount === 0 ? specificIP : ipAmount, ipDescription, !ipAmount);
            setValidity(true);
            setIpDescription("");
        }
        else {
            show.error("Please provide a description", "description_error");
            setValidity(false);
            document.getElementById('newIPDescription').focus();
            if (newIPButtonDisabled) setNewIPButtonDisabled(false);
        }
    }
    const handleRenewIPButton = () => {
        renewTableRow();
        if (newIPButtonDisabled) setNewIPButtonDisabled(false);
    }
    const handleRemoveIPButton = () => {
        removeTableRow();
        if (newIPButtonDisabled) setNewIPButtonDisabled(false);
    }
    const handleSpecificIPChange = (e) => {
        setSpecificIP(e.target.value);
    }

    const popover_ip = (
        <Popover id="popover-ip" className={(ipAmount > 0 && "d-none") + " shadow"}>
            <Popover.Body>
                <Form.Label>Between: {networkMin} ... {networkMax}</Form.Label> 
                <Form.Control placeholder="IP-address" variant="primary" value={specificIP} onChange={handleSpecificIPChange}/>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <Row>
                {buttonsDisabled ?
                    <>
                        <Col xs='2' md='1' className="pe-0">
                            <OverlayTrigger placement="top-start" overlay={popover_ip} defaultShow={true} show={true}>
                                <Form.Select id="newIPSelectAmount" size="sm" className="p-2" title="Amount of new IPs addresses" onChange={handleIPSelectAmount} value={ipAmount}>
                                    {role === 'admin' && 
                                        <option value='0'>IP</option>
                                    }
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    {role === 'admin' &&
                                        <>
                                            <option>10</option>
                                            <option>25</option>
                                        </>
                                    }
                                </Form.Select>
                            </OverlayTrigger>
                        </Col>
                        <Col xs='8' md='10' className="d-md-flex">
                            <Button
                                id='newIPButton'
                                variant="primary"
                                title="Fetch a new IP-address to be confirmed for reservation."
                                onClick={handleNewIPButton}
                                disabled={newIPButtonDisabled}>

                                New IP-address
                            </Button>
                            &nbsp;
                            <Form.Control
                                id='newIPDescription'
                                className={validity ? "w-75" : "w-75 border-danger"}
                                placeholder="IP use case description"
                                title="Describe your IP-address use case"
                                value={ipDescription}
                                onChange={handleIPDescriptionChange}
                            />
                        </Col>
                    </>
                    :
                    <Col xs='10' md='11'>
                        <Button
                            id='renewIPButton'
                            variant={"success"}
                            className={(!tableData.length || buttonsDisabled) && "d-none"}
                            title="Renew your IP reservation (set expiration date 30 days from now)."
                            onClick={handleRenewIPButton}
                            disabled={buttonsDisabled}>
                            Renew selected
                        </Button>
                    </Col>
                }
                <Col xs='2' md='1'>
                    <Button
                        id='removeIPButton'
                        variant="danger"
                        className="float-end p-1 ps-2 pe-2"
                        disabled={buttonsDisabled}
                        title="Remove selected IP addresses"
                        aria-label="Remove selected IP addresses"
                        onClick={handleRemoveIPButton}>
                        <FiTrash2 size="1.75em"></FiTrash2>
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default CommandPanel;