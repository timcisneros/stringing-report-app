import React, { useState, useEffect, useContext } from 'react';
import { Header, Button, Table, Divider, Icon } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import EditForm from './EditForm';
import TableFormRows from './TableFormRows';
import { SavedContext } from './TablesSaved';

export const TableContext = React.createContext();

const LOCAL_STORAGE_KEY = 'stringingReport.tableRows';

export default function TableForm({ tableId }) {
  const { handleTableSelect } = useContext(SavedContext);
  const [selectedRowId, setSelectedRowId] = useState();
  const [rows, setRows] = useState([]);
  const selectedRow = rows.find((row) => row.id === selectedRowId);
  const filteredRows = rows.filter((row) => row.tableId === tableId);

  useEffect(() => {
    const rowJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (rowJSON != null) setRows(JSON.parse(rowJSON));
  }, [tableId]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rows));
  }, [rows]);

  const tableContextValue = {
    handleRowAdd,
    handleRowDelete,
    handleRowSelect,
    handleRowChange,
  };

  function handleRowSelect(id) {
    setSelectedRowId(id);
  }

  // console.log(tableId);

  function handleRowAdd() {
    const newRow = {
      id: uuidv4(),
      label: '',
      size: 0,
      length: '',
      wall: '',
      grade: '',
      heat: '',
      po: '',
      comments: '',
      tableId: tableId,
    };

    setSelectedRowId(newRow.id);
    setRows([...rows, newRow]);
  }

  function handleRowChange(id, row) {
    const newRows = [...rows];
    const index = newRows.findIndex((r) => r.id === id);
    newRows[index] = row;
    setRows(newRows);
  }

  function handleRowDelete(id) {
    if (selectedRowId != null && selectedRowId === id) {
      setSelectedRowId(undefined);
    }
    setRows(
      rows.filter((row) => {
        return row.id !== id;
      })
    );
  }

  return (
    <TableContext.Provider value={tableContextValue}>
      <div>
        <br />
        <Header textAlign="center" as="h1">
          Stringing Report
        </Header>
        <Button icon onClick={() => handleTableSelect(undefined)}>
          <Icon name="home" />
        </Button>
        <Divider />
        {selectedRow && <EditForm row={selectedRow} {...selectedRow} />}
        {!selectedRow && (
          <>
            <Button
              color="green"
              floated="right"
              type="submit"
              onClick={handleRowAdd}
            >
              <Icon name="plus" />
              Add Row
            </Button>
            <br />
            <br />
            <Table celled compact definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>Label</Table.HeaderCell>
                  <Table.HeaderCell>Size</Table.HeaderCell>
                  <Table.HeaderCell>Length</Table.HeaderCell>
                  <Table.HeaderCell>Wall</Table.HeaderCell>
                  <Table.HeaderCell>Grade</Table.HeaderCell>
                  <Table.HeaderCell>Heat #</Table.HeaderCell>
                  <Table.HeaderCell>P.O. #</Table.HeaderCell>
                  <Table.HeaderCell>Comments</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <TableFormRows rows={filteredRows} />
              </Table.Body>
            </Table>
          </>
        )}
      </div>
    </TableContext.Provider>
  );
}

// const sampleRows = [
//   {
//     id: 1,
//     label: 'FT-28',
//     size: 4,
//     length: 'ELL',
//     wall: '0.237',
//     grade: 'WPB',
//     heat: 'A0162',
//     po: '0123',
//     comments: 'Sample Comments',
//     tableId: null,
//   },
//   {
//     id: 2,
//     label: 'FT-29',
//     size: 4,
//     length: 'ELL',
//     wall: '0.237',
//     grade: 'WPB',
//     heat: 'Z498',
//     po: '0265',
//     comments: 'Some more sample Comments',
//     tableId: null,
//   },
// ];
