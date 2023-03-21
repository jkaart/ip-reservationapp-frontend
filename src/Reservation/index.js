import React, { useState, useEffect } from "react";
import { DEBUG } from "../config";
import { Row, Col } from "react-bootstrap";

import IPTableHeader from "./IPTableHeader";
import IPTableRows from "./IPTableRows";
import { getNewIP, IPTablePopulate, removeIP, renewIP, updateDescription } from "./API";
import show from "../utils/AlertManager";
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

    const updateTableData = (field, value, index = null) => {
        const updatedData = [...tableData];
        if (index === null) {
            // update all rows
            updatedData.forEach(row => {
                row[field] = value;
            });
        } else if (Array.isArray(index)) {
            // update multiple rows
            index.forEach(i => {
                updatedData[i][field] = value;
            });
        } else {
            // update single row
            updatedData[index][field] = value;
        }
        setTableData(updatedData);
    };

    const updateButtonsDisabled = () => {
        const isActive = tableData.some((rowData) => rowData.checked);
        setButtonsDisabled(!isActive);
    };

    useEffect(() => {
        updateButtonsDisabled();
    });

    const addTableRow = (amount, ipDescription) => {
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
            const newIPPromise = getNewIP(user.token, amount, ipDescription);
            newIPPromise.then((response) => {
                const newTableRow = Object.values(response.data.savedIP).map(item => ({
                    IP: item.ip,
                    endDate: item.expirationDate,
                    description: item.desc,
                    checked: true,
                    id: item.id
                }));
                setTableData(tableData.concat(newTableRow));
                show.success(newTableRow.length + " IP(s) added! Confirm with 'Renew selected'", "newIPSuccess");
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
        const days = 30;        //here's the day renewal update constant - here's the day renewal update constant - here's the day renewal update constant - here's the day renewal update constant!!!!

        tableData.forEach((item, index) => {
            if(item.checked) {
                renewIP(user.token, item.id, item.description, days);
                const newDate = new Date(Date.now() + days * 86400 * 1000).toISOString();
                updateTableData('endDate', newDate, index);
                updateTableData('checked', false, index);
            }
        });
    }

    const updateTableRowDescription = (description, index) => {
        updateDescription(user.token, tableData[index].id, description);
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Row>
                <Col>
                    <CommandPanel
                        tableData={tableData}
                        addTableRow={addTableRow}
                        buttonsDisabled={buttonsDisabled}
                        removeTableRow={removeTableRow}
                        renewTableRow={renewTableRow}
                        user={user}
                    />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <IPTableHeader
                        tableData={tableData}
                        updateTableData={updateTableData}
                    />
                    <IPTableRows
                        tableData={tableData}
                        updateTableData={updateTableData}
                        updateButtonsDisabled={updateButtonsDisabled}
                        updateTableRowDescription={updateTableRowDescription}
                    />
                </Col>
            </Row>
        </>
    );
};

export default IPReservationTable;