import { IPTableRow } from "./IPTableRow";

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

export default IPTableRows;