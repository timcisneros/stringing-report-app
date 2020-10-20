import React, { useState, useEffect } from 'react';
import { Table, Icon, Container, Button, Segment } from 'semantic-ui-react';
import TablesSavedRows from './TablesSavedRows';
import { v4 as uuidv4 } from 'uuid';
import TableForm from './TableForm';

export const SavedContext = React.createContext();

// const sampleTableSaves = [
//   {
//     id: 55,
//     title: 'Stringing Report',
//     created: '10/19/2020',
//     lastEdited: '8 hours ago',
//   },
//   {
//     id: 56,
//     title: 'Stringing Report',
//     created: '8/05/2020',
//     lastEdited: '2 months ago',
//   },
//   {
//     id: 57,
//     title: 'Stringing Report',
//     created: '9/03/2020',
//     lastEdited: '1 month ago',
//   },
// ];

const LOCAL_STORAGE_KEY = 'stringingReport.tables';

export default function TablesSaved() {
  const [selectedTableId, setSelectedTableId] = useState();
  const [tables, setTables] = useState([]);
  const selectedTable = tables.find((table) => table.id === selectedTableId);

  useEffect(() => {
    const tableJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (tableJSON != null) setTables(JSON.parse(tableJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tables));
  }, [tables]);

  const savedContextValue = {
    handleTableSelect,
  };

  function handleTableSelect(id) {
    setSelectedTableId(id);
  }

  function handleTableAdd() {
    const newTable = {
      id: uuidv4(),
      title: 'Stringing Report',
      created: Date(),
    };
    setSelectedTableId(newTable.id);
    setTables([newTable, ...tables]);
  }
  return (
    <SavedContext.Provider value={savedContextValue}>
      <Container>
        {!selectedTable && (
          <Segment padded>
            <Button floated="right" onClick={handleTableAdd}>
              <Icon name="file" />
              New Table
            </Button>
            <br />
            <br />
            <Table celled striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="5">Saved Tables</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <TablesSavedRows tables={tables} />
              </Table.Body>
            </Table>
          </Segment>
        )}
        {selectedTable && (
          <TableForm
            tables={tables}
            setTables={setTables}
            tableId={selectedTable.id}
          />
        )}
      </Container>
    </SavedContext.Provider>
  );
}
