import React, { useState, useEffect, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { IPTableHeader } from "./IPTableHeader";
import { IPTableRow } from "./IPTableRow.js";
import { IPTableFooter } from "./IPTableFooter";
import { DEBUG } from "../config";

const IPTableRows = (props) => {
    const { tableData, updateTableData, updateRemoveButtonActive } = props;

    if (DEBUG) {
        return tableData.map((rowData, index) => {
            return <IPTableRow
                key={rowData.IP}
                index={index}
                rowData={rowData}
                updateTableData={updateTableData}
                updateRemoveButtonActive={updateRemoveButtonActive}
            />;
        });
    } else {
        return ""; //API
    }
};

const IPReservationTable = (props) => {
    const { } = props;
    const [tableData, setTableData] = useState([]);
    const [removeButtonActive, setRemoveButtonActive] = useState(true);

    const updateTableData = (index, field, value) => {
        const updatedData = [...tableData];
        updatedData[index][field] = value;
        setTableData(updatedData);
    };

    const updateRemoveButtonActive = () => {
        const isActive = tableData.some((rowData) => rowData.checked);
        setRemoveButtonActive(!isActive);
    };

    useEffect(() => {
        updateRemoveButtonActive();
    }, [tableData]);

    const addTableRow = () => {
        if (DEBUG) {
            const mfr = () => { return Math.floor(Math.random() * 256); };
            const ip = "10.36." + mfr() + "." + mfr();
            //const now = new Date();
            const nextWeek = new Date(new Date().getTime() + 604800000);
            const date = nextWeek.getDate() + "." + nextWeek.getMonth() + "." + nextWeek.getFullYear();

            setTableData([...tableData, { 
                IP: ip, 
                endDate: date, 
                description: "Debug description for " + ip, 
                checked: false 
            }]);
        } else {
            
        }
    }

    return (
        <Row className="mt-4">
            <Col>
                <IPTableHeader></IPTableHeader>
                <IPTableRows
                    tableData={tableData}
                    updateTableData={updateTableData}
                    updateRemoveButtonActive={updateRemoveButtonActive} >
                </IPTableRows>
                <IPTableFooter
                    addTableRow={addTableRow}
                    removeButton={removeButtonActive}>
                </IPTableFooter>
            </Col>
        </Row>
    );
};

export default IPReservationTable;