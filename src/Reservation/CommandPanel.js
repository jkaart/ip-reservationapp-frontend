import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { FiPlus, FiTrash, FiTrash2 } from "react-icons/fi";

const CommandPanel = (props) => {
    const { tableData, addTableRow, buttonsDisabled, removeTableRow, renewTableRow } = props;
    const [ipAmount, setIpAmount] = useState(1);

    const handleIPSelectAmount = (e) => {
        setIpAmount(parseInt(e.target.value))
    }
    const handleNewIPButton = (e) => {
        addTableRow(ipAmount);
    }
    const handleRenewIPButton = () => {
        renewTableRow();
    }
    const handleRemoveIPButton = () => {
        removeTableRow();
    }

    return (
        <Row>
            <Col xs='2' md='1' className="pe-0">
                <Form.Select id="newIPSelectAmount" size="sm" className="p-2" title="Amount of new IPs addresses" onChange={handleIPSelectAmount}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Select>
            </Col>
            <Col >
                <Button
                    id='newIPButton'
                    variant="primary"
                    title="Fetch a new IP-address to be confirmed for reservation."
                    onClick={handleNewIPButton}
                    className="">
                    New IP<span className='d-none d-sm-inline'>-address</span>
                </Button>
                &nbsp;
                <Button
                    id='renewIPButton'
                    variant={buttonsDisabled ? "secondary" : "success"}
                    className={!tableData.length && "d-none"}
                    title="Renew your IP reservation (set expiration date 30 days from now)."
                    onClick={handleRenewIPButton}
                    disabled={buttonsDisabled}>
                    Renew selected
                </Button>
            </Col>
            <Col xs='4'>
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
    );
}

export default CommandPanel;