import { Row, Col, Button, Badge } from "react-bootstrap";
import { FiSquare, FiCheckSquare, FiCopy } from "react-icons/fi";
import { IconContext } from "react-icons";
import Description from "./IPTableRowDescription";

export const IPTableRow = (props) => {
    const { index, rowData, updateTableData, updateRemoveButtonActive } = props;

    const handleToggleCheckbox = (e) => {
        updateTableData(index, 'checked', !rowData.checked);
        updateRemoveButtonActive();
    };
    return (
        <IconContext.Provider value={{ size: "30px" }}>
            <Row className="border rounded m-0 p-2" index={index} key={rowData.IP}>
                <Col sm md='2'>
                    <Button variant="light" className="w-100 p-2" title="Copy To Clipboard">
                        {rowData.IP}
                    </Button>
                </Col>
                <Col sm md='3'>
                    <span className="align-middle pt-2">
                        {rowData.endDate}
                    </span>
                </Col>
                <Col sm md='6'>
                    <Description description={rowData.description} updateTableData={updateTableData} index={index} />
                </Col>
                <Col sm md='1' className=''>
                    <Button id={index} variant="" className="p-1 float-end" onClick={handleToggleCheckbox}>
                        {rowData.checked ? <FiCheckSquare /> : <FiSquare />}
                    </Button>
                </Col>
            </Row>
        </IconContext.Provider>
    );
}