import React, { useContext } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { TableContext } from './TableForm';

export default function TableFormCells({
  id,
  ftjt,
  label,
  size,
  length,
  wall,
  grade,
  heat,
  po,
  comments,
}) {
  const { handleRowSelect } = useContext(TableContext);
  return (
    <>
      <Table.Cell collapsing>
        <Button icon onClick={() => handleRowSelect(id)}>
          <Icon name="edit" />
        </Button>
        {/* <Button icon onClick={() => handleRowDelete(id)}>
          <Icon name="trash" />
        </Button> */}
      </Table.Cell>
      <Table.Cell>{`${ftjt}-${label}`}</Table.Cell>
      <Table.Cell>{size}</Table.Cell>
      <Table.Cell>{length}</Table.Cell>
      <Table.Cell>{wall}</Table.Cell>
      <Table.Cell>{grade}</Table.Cell>
      <Table.Cell>{heat}</Table.Cell>
      <Table.Cell>{po}</Table.Cell>
      <Table.Cell>{comments}</Table.Cell>
    </>
  );
}
