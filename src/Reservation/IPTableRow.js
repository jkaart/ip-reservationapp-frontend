import { Row, Col, Button, Badge } from "react-bootstrap";
import { FiSquare, FiCheckSquare, FiCopy } from "react-icons/fi";
import { IconContext } from "react-icons";
import Description from "./IPTableRowDescription";
import { showInfo } from "../Components/AlertManager";

export const IPTableRow = (props) => {
    const { index, rowData, updateTableData, updateButtonsDisabled } = props;

    const handleToggleCheckbox = (e) => {
        updateTableData(index, 'checked', !rowData.checked);
        updateButtonsDisabled();
    };
    return (
        <IconContext.Provider value={{ size: "30px" }}>
            <Row className="border rounded m-0 p-2" index={index} key={rowData.id}>
                <Col sm='3' md='2'>
                    <Button variant="light" className="w-100 p-2" title="Copy To Clipboard" onClick={(e) => {copyToClipboard(e.target.textContent)}}>
                        {rowData.IP}
                    </Button>
                </Col>
                <Col sm='3'>
                    <span className="align-middle pt-2">
                        {expirationTime(rowData.endDate)}
                    </span>
                </Col>
                <Col sm='5' md='6'>
                    <Description description={rowData.description} updateTableData={updateTableData} index={index} />
                </Col>
                <Col sm='1' className=''>
                    <Button id={index} variant="" className="p-1 float-end" onClick={handleToggleCheckbox}>
                        {rowData.checked ? <FiCheckSquare /> : <FiSquare />}
                    </Button>
                </Col>
            </Row>
        </IconContext.Provider>
    );
}

function expirationTime(expirationDate) {
    const exp = new Date(expirationDate).getTime();
    const now = new Date().getTime();

    const timeDiff = exp - now;

    const remainingDays = Math.round(timeDiff / (1000 * 60 * 60 * 24));
    if (remainingDays > 0)
        return remainingDays + " days";

    const remainingHours = Math.round((timeDiff / (1000 * 60 * 60)) % 24);
    if (remainingHours > 0)
        return remainingHours + " hours";

    const remainingMinutes = Math.round((timeDiff / (1000 * 60)) % 60);
    return remainingMinutes < 1 ? "NOW" : remainingMinutes + " minutes";
}

function copyToClipboard(text)
{
    navigator.clipboard.writeText(text);
    showInfo('Copied to clipboard: ' + text, {timeOut: 1500});
}