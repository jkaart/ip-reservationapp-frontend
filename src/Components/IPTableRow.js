import { Row, Col, Button } from "react-bootstrap";
import { FiPlusSquare, FiSquare, FiCheckSquare } from "react-icons/fi";
import { IconContext } from "react-icons";
import EditButton from "./EditButton";

export const IPTableRow = (props) => {
    const {index, rowData, updateTableData, updateRemoveButtonActive, updateRowDescription } = props;

    const handleToggleCheckbox = (e) => {
        updateTableData(index, 'checked', !rowData.checked);
        updateRemoveButtonActive();
    };
    return (
        <IconContext.Provider value={{ size: "30px" }}>
            <Row className="border rounded m-0 p-2" index={index} key={rowData.IP}>
                <Col sm md='2'>
                    <span className="align-middle">
                        {rowData.IP}
                    </span>
                </Col>
                <Col sm md='3'>
                    <span className="align-middle">
                        {rowData.endDate}
                    </span>
                    <Button variant="" className="p-0 float-end"> 
                        <FiPlusSquare /> 
                    </Button>
                </Col>
                <Col sm md='6'>
                    <EditButton description={rowData.description} updateRowDescription={updateRowDescription}/>
                </Col>
                <Col sm md='1' className=''>
                    <Button id={index} variant="" className="p-0 float-end" onClick={handleToggleCheckbox}> 
                        {rowData.checked ? <FiCheckSquare /> : <FiSquare />}  
                    </Button>
                </Col>
            </Row>
        </IconContext.Provider>
    );
}