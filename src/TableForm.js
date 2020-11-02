import React, { useState, useEffect, useContext } from 'react';
import { Segment, Header, Button, Table, Icon } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import TimeStamp from 'react-timestamp';
import EditForm from './EditForm';
import TableFormHeaders from './TableFormHeaders';
import TableFormRows from './TableFormRows';
import ExportExcel from './ExportExcel';
import HelpMessage from './HelpMessage';
import { SavedContext } from './TablesSaved';
import { confirmAlert } from 'react-confirm-alert';

import 'react-confirm-alert/src/react-confirm-alert.css';

export const TableContext = React.createContext();

const LOCAL_STORAGE_KEY = 'stringingReport.tableRows';

export default function TableForm({ tables, setTables, tableId }) {
    const { handleTableSelect } = useContext(SavedContext);
    const [selectedRowId, setSelectedRowId] = useState();
    const [rows, setRows] = useState([]);
    const selectedRow = rows.find((row) => row.id === selectedRowId);
    const filteredRows = rows.filter((row) => row.tableId === tableId);
    const selectedTableData = tables.find((table) => table.id === tableId);

    useEffect(() => {
        const rowJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (rowJSON != null) setRows(JSON.parse(rowJSON));
    }, []);

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
            ftjt: 'FT',
            label: 1,
            size: '',
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

    function handleRowCopy() {
        const newRow = {
            id: uuidv4(),
            ftjt: 'FT',
            label: Number(rows[rows.length - 1].label) + 1,
            size: rows[rows.length - 1].size,
            length: rows[rows.length - 1].length,
            wall: rows[rows.length - 1].wall,
            grade: rows[rows.length - 1].grade,
            heat: rows[rows.length - 1].heat,
            po: rows[rows.length - 1].po,
            comments: rows[rows.length - 1].comments,
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

    function handleTableDelete(id) {
        confirmAlert({
            title: 'Delete Table',
            message: 'Are you sure you want to permanently delete this table?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: handleYes,
                },
                {
                    label: 'No',
                    onClick: () => null,
                },
            ],
        });
        function handleYes() {
            if (selectedRowId != null && selectedRowId === id) {
                setSelectedRowId(undefined);
            }
            const deleteTables = async (id) => {
                await deleteRows(id);
                setTables(
                    tables.filter((table) => {
                        // console.log('run2', id);
                        return table.id !== id;
                    })
                );
            };
            const deleteRows = async (id) => {
                setRows(
                    rows.filter((row) => {
                        // console.log('run1', id);
                        return row.tableId !== id;
                    })
                );
            };
            deleteTables(id);
        }
    }

    return (
        <TableContext.Provider value={tableContextValue}>
            <div>
                <Segment padded>
                    <br />
                    <Button
                        icon
                        floated="left"
                        onClick={() => handleTableSelect(undefined)}
                    >
                        <Icon name="home" />
                    </Button>
                    <Button
                        color="red"
                        floated="right"
                        onClick={() => handleTableDelete(tableId)}
                    >
                        <Icon name="table" />
                        Delete Table
                    </Button>
                    <ExportExcel tableId={tableId} />
                    <Header textAlign="center" as="h3" dividing>
                        <Header.Content>
                            Stringing Report:{' '}
                            <TimeStamp date={selectedTableData.created} />
                        </Header.Content>
                    </Header>
                    {selectedRow && (
                        <EditForm row={selectedRow} {...selectedRow} />
                    )}
                    {!selectedRow && (
                        <>
                            {filteredRows.length > 0 && (
                                <Button
                                    color="blue"
                                    floated="right"
                                    type="submit"
                                    onClick={handleRowCopy}
                                >
                                    <Icon name="copy" />
                                    Copy Last Row
                                </Button>
                            )}
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
                            <Table
                                celled
                                compact
                                striped
                                definition
                                id={tableId}
                            >
                                <Table.Header>
                                    <TableFormHeaders />
                                    {filteredRows.length < 1 && (
                                        <Table.Row>
                                            <Table.Cell colSpan="9">
                                                <HelpMessage
                                                    header="No rows have been added yet."
                                                    content="Click on the Add Row button to get started."
                                                />
                                            </Table.Cell>
                                        </Table.Row>
                                    )}
                                </Table.Header>
                                <Table.Body>
                                    <TableFormRows rows={filteredRows} />
                                </Table.Body>
                            </Table>
                        </>
                    )}
                </Segment>
                {!selectedRow && (
                    <>
                        {filteredRows.length > 0 && (
                            <Button
                                color="blue"
                                floated="right"
                                type="submit"
                                onClick={handleRowCopy}
                            >
                                <Icon name="copy" />
                                Copy Last Row
                            </Button>
                        )}
                        <Button
                            color="green"
                            floated="right"
                            type="submit"
                            onClick={handleRowAdd}
                        >
                            <Icon name="plus" />
                            Add Row
                        </Button>
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
