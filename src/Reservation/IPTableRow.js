import { Row, Col, Button, Badge } from "react-bootstrap";
import { FiSquare, FiCheckSquare, FiCopy } from "react-icons/fi";
import { IconContext } from "react-icons";
import Description from "./IPTableRowDescription";
import show from "../utils/AlertManager";

export const IPTableRow = (props) => {
    const { index, rowData, updateTableData, updateButtonsDisabled, updateTableRowDescription } = props;

    const handleToggleCheckbox = (e) => {
        updateTableData('checked', !rowData.checked, index);
        updateButtonsDisabled();
    };
    return (
        <IconContext.Provider value={{ size: "1.5em" }}>
            <Row className="border rounded m-0 mt-1" index={index} key={rowData.id} >
                <Col sm='3' md='2' className="p-0">
                    <Button variant="light" className="w-100 p-2" title="Copy To Clipboard" onClick={(e) => {copyToClipboard(e.target.textContent)}}>
                        {rowData.IP}
                    </Button>
                </Col>
                <Col sm='3' title={new Date(rowData.endDate).toLocaleString()}>
                    <span className="align-middle pt-2 float-start">
                        {expirationTime(rowData.endDate)}
                    </span>
                    <span className="align-middle pt-2 float-end">
                        {new Date(rowData.endDate).toLocaleDateString()}
                    </span>
                </Col>
                <Col xs='10' sm='5' md='6'>
                    <Description description={rowData.description} updateTableData={updateTableData} index={index} updateTableRowDescription={updateTableRowDescription} />
                </Col>
                <Col xs='2' sm='1' className=''>
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
    const msg = 'Copied to clipboard: ' + text;
    show.info(msg, 'copy', null, 1500);
    //showInfo(msg, {toastID: "copy", timeOut: 1500, override: msg});
}