import React, { useState, useEffect } from "react";
import { DEBUG } from "../config";
import { Row, Col } from "react-bootstrap";

import IPTableHeader from "./IPTableHeader";
import IPTableRows from "./IPTableRows";
import IPTableFooter from "./IPTableFooter";
import { getNewIP, IPTablePopulate } from "./API";

const IPReservationTable = (props) => {
    const { user } = props;
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const IPTablePromise = IPTablePopulate(user.token);

        IPTablePromise.then((data) => {

            const formattedData = data.map(item => ({
                IP: item.ip,
                endDate: item.expirationDate,
                description: item.desc,
                checked: false
            }));

            setTableData(formattedData);
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
        });
    }, [user.token]);

    const [removeButtonDisabled, setRemoveButtonDisabled] = useState(true);

    const updateTableData = (index, field, value) => {
        const updatedData = [...tableData];
        updatedData[index][field] = value;
        setTableData(updatedData);
        console.log(index, field, value, updatedData);
    };

    const updateRemoveButtonActive = () => {
        const isActive = tableData.some((rowData) => rowData.checked);
        setRemoveButtonDisabled(!isActive);
    };

    useEffect(() => {
        updateRemoveButtonActive();
    });

    const addTableRow = () => {
        if (DEBUG) {
            const mfr = (min = 0, max = 255) => { return Math.floor(Math.random() * (max - min + 1)) + min; };
            const ip = "10.36." + mfr(1, 3) + "." + mfr();
            const now = new Date();
            const future = new Date(now.getTime() + 600000);
            const date = future.toLocaleTimeString() + " " + future.toLocaleDateString();
            //const date = future.getHours() + ":" + future.getMinutes() + ":" + future.getSeconds() + " " + future.getDate() + "." + future.getMonth() + "." + future.getFullYear();

            setTableData([...tableData, {
                IP: ip,
                endDate: date,
                description: "Debug description for " + ip,
                checked: true
            }]);
        } else {
            const newIPPromise = getNewIP(user.token);
            newIPPromise.then((response) => {
                const newTableRow = Object.values(response.data).map(item => ({
                    IP: item.ip,
                    endDate: item.expirationDate,
                    description: item.desc,
                    checked: true
                }));
                setTableData([...tableData, newTableRow[1]]);
            }).catch((error) => {
                console.log(error);
            });
        }
    };
    const removeTableRow = () => {
        const filteredTables = tableData.filter(row => !row.checked);
        setTableData(filteredTables);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <Row className="mt-4">
            <Col>
                <IPTableHeader></IPTableHeader>
                <IPTableRows
                    tableData={tableData}
                    updateTableData={updateTableData}
                    updateRemoveButtonActive={updateRemoveButtonActive}
                >
                </IPTableRows>
                <IPTableFooter
                    addTableRow={addTableRow}
                    removeButtonDisabled={removeButtonDisabled}
                    removeTableRow={removeTableRow}>
                </IPTableFooter>
            </Col>
        </Row>
    );
};

export default IPReservationTable;