import { Col, Row } from "react-bootstrap";
import { IPTableRow } from "./IPTableRow";

const IPTableRows = (props) => {
    const { tableData, updateTableData, updateButtonsDisabled } = props;

    return ( tableData.length == 0 ?
        <Row className="m-0 pt-2 border rounded">
            <Col>
                <p className="p-0">Begin by adding new IP-addresses and confirming them</p>
            </Col>
        </Row>
        :
        tableData.map((rowData, index) => {
            return <IPTableRow
                key={rowData.IP}
                index={index}
                rowData={rowData}
                updateTableData={updateTableData}
                updateButtonsDisabled={updateButtonsDisabled}
            />;
        })
    )
}

export default IPTableRows;