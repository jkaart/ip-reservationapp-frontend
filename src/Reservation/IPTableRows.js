import { IPTableRow } from "./IPTableRow";

const IPTableRows = (props) => {
    const { tableData, updateTableData, updateRemoveButtonActive } = props;

    return tableData.map((rowData, index) => {
        return <IPTableRow
            key={rowData.IP}
            index={index}
            rowData={rowData}
            updateTableData={updateTableData}
            updateRemoveButtonActive={updateRemoveButtonActive}
        />;
    });
};

export default IPTableRows;