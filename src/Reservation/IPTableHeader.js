import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FiCheckSquare, FiSquare } from "react-icons/fi";

const IPTableHeader = (props) => {
    const { tableData, updateTableData } = props;
    const [checked, setChecked] = useState(false);
    const [byUser, setByUser] = useState(false);

    const handleCheckClick = () => {
        setChecked(!checked);
        setByUser(true);
    }

    useEffect(() => {
        if (tableData.length > 0 && byUser) {
            updateTableData('checked', checked);
        }
        setByUser(false)
    }, [checked]);

    //
    useEffect(() => {
        const isAnyUnchecked = tableData.some(item => item.checked === false);
        setByUser(false);
        if (isAnyUnchecked || !tableData.length) {
            setChecked(false);
        } else {
            setChecked(true);
        }
    }, [tableData])

    return (
        <Row className="bg-light fw-bold m-0 border rounded d-sm-flex">
            <Col className="d-sm-block d-none ps-3" sm='2'>
                <span className="align-middle pt-2">
                    IP
                </span>
            </Col>
            <Col className="d-sm-block d-none" sm='3'>
                <span className="align-middle pt-2">
                    Expires
                </span>
            </Col>
            <Col className="d-sm-block d-none" sm='5'>
                <span className="align-middle pt-2">
                    Description
                </span>
            </Col>
            <Col className="d-sm-block" sm='2'>
                <span className="align-middle pt-2 d-sm-none">
                    Select all
                </span>
                <Button variant={!tableData.length && 'light'} className="p-1 float-end" onClick={handleCheckClick} disabled={!tableData.length} title={(checked ? "Unselect" : "Select") + " all"}>
                    {checked ? <FiCheckSquare size={"1.5em"} /> : <FiSquare size={"1.5em"} />}
                </Button>
            </Col>
        </Row>
    );
}

export default IPTableHeader;