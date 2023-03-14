import React, { useState, useEffect, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { IPTableHeader } from "./IPTableHeader";
import { IPTableRow } from "./IPTableRow.js";
import { IPTableFooter } from "./IPTableFooter";
import { API_BASE_URL, DEBUG } from "../config";
import axios from "axios";

const IPTableRows = (props) => {
    const { tableData, updateTableData, updateRemoveButtonActive, updateRowDescription } = props;

    return tableData.map((rowData, index) => {
        return <IPTableRow
            key={rowData.IP}
            index={index}
            rowData={rowData}
            updateTableData={updateTableData}
            updateRemoveButtonActive={updateRemoveButtonActive}
            updateRowDescription={updateRowDescription}
        />;
    });
};

const getNewIP = async (token) => {
    try {
        return await axios
            .post(API_BASE_URL + 'ips/next-ip', {
                desc:'aaaaa',
                networkId:'640e21ac00544bcae339d40e'
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        );
    } catch (error) {
        console.log(error.response);
        //TODO: set error alert
    }
};

const IPTablePopulate = async (token) => {
    console.log(token);
    try {
        const response = await axios
            .get(API_BASE_URL + 'users/user', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        );

        return response.data.ips;
    } catch (error) {
        console.log(error.response);
        //TODO: set error alert
    }
}

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
    };

    const updateRemoveButtonActive = () => {
        const isActive = tableData.some((rowData) => rowData.checked);
        setRemoveButtonDisabled(!isActive);
    };

    const updateRowDescription = (description) => {
        setTableData([...tableData], { description: description });
    }

    useEffect(() => {
        updateRemoveButtonActive();
    }, [tableData]);

    const addTableRow = () => {
        if (DEBUG) {
            const mfr = (min = 0, max = 255) => { return Math.floor(Math.random() * (max - min + 1)) + min; };
            const ip = "10.36." + mfr(1, 3) + "." + mfr();
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
            const newIPPromise = getNewIP(user.token);
            newIPPromise.then((response) => {
                const newTableRow = Object.values(response.data).map(item => ({
                    IP: item.ip,
                    endDate: item.expirationDate,
                    description: item.desc,
                    checked: false
                }));
                console.log(newTableRow[1]);
                setTableData([...tableData], newTableRow[1]);
            }).catch((error) => {

            });
        }
    };
    const removeTableRow = () => {
        setTableData(tableData.filter(row => !row.checked));
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
                    updateRowDescription={updateRowDescription}
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