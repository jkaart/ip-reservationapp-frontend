import jwtDecode from "jwt-decode";
import { useState } from "react";
import { Row, Col, Button, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { FiTrash2 } from "react-icons/fi";
import show from "../utils/AlertManager";

const CommandPanel = (props) => {
    const { tableData, addTableRow, buttonsDisabled, removeTableRow, renewTableRow, user } = props;
    const [ipAmount, setIpAmount] = useState(1);
    const [ipDescription, setIpDescription] = useState("");
    const [validity, setValidity] = useState(true);

    const role = jwtDecode(user.token).role;
    const handleIPDescriptionChange = (e) => {
        setIpDescription(e.target.value);
    }
    const handleIPSelectAmount = (e) => {
        setIpAmount(parseInt(e.target.value))
    }
    const handleNewIPButton = (e) => {
        if(ipDescription.length > 4) {
            e.target.disabled = true;
            addTableRow(ipAmount, ipDescription);
            setValidity(true);
            setIpDescription("");
        }
        else {
            show.error("Please provide a description", "description_error");
            setValidity(false);
            document.getElementById('newIPDescription').focus();
        }
    }
    const handleRenewIPButton = () => {
        renewTableRow();
    }
    const handleRemoveIPButton = () => {
        removeTableRow();
    }

    return (
        <>
            <Row>
                {buttonsDisabled ?
                    <>
                        <Col xs='2' md='1' className="pe-0">
                            <Form.Select id="newIPSelectAmount" size="sm" className="p-2" title="Amount of new IPs addresses" onChange={handleIPSelectAmount} value={ipAmount}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                {role === 'admin' &&
                                    <>
                                        <option>10000</option>
                                        <option>25</option>
                                    </>
                                }
                            </Form.Select>
                        </Col>
                        <Col xs='8' md='10' className="d-md-flex">
                            <Button
                                id='newIPButton'
                                variant="primary"
                                title="Fetch a new IP-address to be confirmed for reservation."
                                onClick={handleNewIPButton}
                                className="">
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