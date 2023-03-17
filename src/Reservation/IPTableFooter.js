import { Row, Col } from "react-bootstrap";

const IPTableFooter = (props) => {
    const { tableDataLength } = props;
    
    return ( tableDataLength < 1 && 
        <Row className="m-0 p-2 border rounded">
            <Col>
                <p className="p-1">Begin by adding new IP-addresses and confirming them</p>
            </Col>
        </Row>
    );
}

export default IPTableFooter;