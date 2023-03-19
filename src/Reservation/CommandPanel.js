import { Row, Col, Button } from "react-bootstrap";

const CommandPanel = (props) => {
    const { tableData, addTableRow, buttonsDisabled, removeTableRow, renewTableRow } = props;

    const handleNewIPButton = () => {
        addTableRow();
    }
    const handleRenewIPButton = () => {
        renewTableRow();
    }
    const handleRemoveIPButton = () => {
        removeTableRow();
    }

    return (
        <Row>
            <Col>
                <Button
                    id='newIPButton'
                    variant="primary"
                    title="Fetch a new IP-address to be confirmed for reservation."
                    onClick={handleNewIPButton}>
                    New IP-address
                </Button>
                &nbsp;
                <Button
                    id='renewIPButton'
                    variant={buttonsDisabled ? "secondary" : "success"}
                    className={!tableData.length && "d-none" }
                    title="Renew your IP reservation (set expiration date 30 days from now)."
                    onClick={handleRenewIPButton}
                    disabled={buttonsDisabled}>
                    Renew selected
                </Button>
            </Col>
            <Col>
                <Button
                    id='removeIPButton'
                    variant="danger"
                    className="float-end"
                    disabled={buttonsDisabled}
                    title="Select an IP address to remove"
                    aria-label="Select an IP address to remove"
                    onClick={handleRemoveIPButton}>
                    Remove selected
                </Button>
            </Col>
        </Row>
    );
}

export default CommandPanel;