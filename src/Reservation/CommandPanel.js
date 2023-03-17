import { Row, Col, Button } from "react-bootstrap";

const CommandPanel = (props) => {
    const { addTableRow, buttonsDisabled, removeTableRow, renewTableRow } = props;

    return (
        <Row>
            <Col>
                <Button
                    id='newIPButton'
                    variant="primary"
                    className="mt-4"
                    title="Fetch a new IP-address to be confirmed for reservation."
                    onClick={() => {addTableRow()}}>
                    New IP-address
                </Button>
                &nbsp;
                <Button
                    id='renewIPButton'
                    variant={buttonsDisabled ? "secondary" : "success"}
                    className="mt-4"
                    title="Renew your IP reservation (add a week of reservation time)."
                    onClick={() => {renewTableRow()}}
                    disabled={buttonsDisabled}>
                        
                    Renew selected
                </Button>
            </Col>
            <Col>
                <Button
                    id='removeIPButton'
                    variant="danger"
                    className="mt-4 float-end"
                    disabled={buttonsDisabled}
                    title="Select an IP address to remove"
                    aria-label="Select an IP address to remove"
                    onClick={removeTableRow}>
                    Remove selected
                </Button>
            </Col>
        </Row>
    );
}

export default CommandPanel;