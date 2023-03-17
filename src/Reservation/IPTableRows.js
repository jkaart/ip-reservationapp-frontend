import { IPTableRow } from "./IPTableRow";

const IPTableRows = (props) => {
    const { tableData, updateTableData, updateButtonsDisabled } = props;

    return tableData.map((rowData, index) => {
        return <IPTableRow
            key={rowData.IP}
            index={index}
            rowData={rowData}
            updateTableData={updateTableData}
            updateButtonsDisabled={updateButtonsDisabled}
        />;
    });
};

export default IPTableRows;