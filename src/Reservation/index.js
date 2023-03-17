import React, { useState, useEffect } from "react";
import { DEBUG } from "../config";
import { Row, Col } from "react-bootstrap";

import IPTableHeader from "./IPTableHeader";
import IPTableRows from "./IPTableRows";
import IPTableFooter from "./IPTableFooter";
import { getNewIP, IPTablePopulate, removeIP, renewIP } from "./API";
import { showInfo, showSuccess } from "../Components/AlertManager";
import CommandPanel from "./CommandPanel";

const IPReservationTable = (props) => {
    const { user } = props;
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [buttonsDisabled, setButtonsDisabled] = useState(true);

    useEffect(() => {
        const IPTablePromise = IPTablePopulate(user.token);

        IPTablePromise.then((data) => {
            const formattedData = data.map(item => ({
                IP: item.ip,
                endDate: item.expirationDate,
                description: item.desc,
                checked: false,
                id: item.id
            }));
            setTableData(formattedData);
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
        });
    }, [user.token]);


    const updateTableData = (index, field, value) => {
        const updatedData = [...tableData];
        updatedData[index][field] = value;
        setTableData(updatedData);
    };

    const updateButtonsDisabled = () => {
        const isActive = tableData.some((rowData) => rowData.checked);
        setButtonsDisabled(!isActive);
    };

    useEffect(() => {
        updateButtonsDisabled();
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
                    checked: true,
                    id: item.id
                }));
                setTableData([...tableData, newTableRow[1]]);
                showSuccess(newTableRow[1].IP + " added! Confirm with 'Renew selected'", { toastID: "newIPSuccess" })
            }).catch((error) => {
                console.log(error);
            });
        }
    };
    const removeTableRow = () => {
        const filteredTables = tableData.filter(row => row.checked);

        filteredTables.forEach((item) => {
            removeIP(user.token, item.id);
        });
        setTableData(tableData.filter(row => !row.checked));
    };

    const renewTableRow = () => {
        const days = 30;

        tableData.forEach((item, index) => {
            renewIP(user.token, item.id, item.description, days);
            const newDate = new Date(Date.now() + days * 86400 * 1000).toISOString();
            console.log(item);
            console.log(newDate);
            updateTableData(index, 'endDate', newDate);
            updateTableData(index, 'checked', false);
        });
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Row>
                <Col>
                    <CommandPanel
                        addTableRow={addTableRow}
                        buttonsDisabled={buttonsDisabled}
                        removeTableRow={removeTableRow} 
                        renewTableRow={renewTableRow}
                    />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <IPTableHeader></IPTableHeader>
                    <IPTableRows
                        tableData={tableData}
                        updateTableData={updateTableData}
                        updateButtonsDisabled={updateButtonsDisabled}
                    >
                    </IPTableRows>
                    <IPTableFooter tableDataLength={tableData.length}>
                    </IPTableFooter>
                </Col>
            </Row>
        </>
    );
};

export default IPReservationTable;