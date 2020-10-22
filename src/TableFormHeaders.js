import React from 'react';
import { Table } from 'semantic-ui-react';

export default function TableFormHeaders() {
  return (
    <Table.Row>
      <Table.HeaderCell />
      <Table.HeaderCell>JT / FT</Table.HeaderCell>
      <Table.HeaderCell>Size</Table.HeaderCell>
      <Table.HeaderCell>Length</Table.HeaderCell>
      <Table.HeaderCell>Wall</Table.HeaderCell>

      <Table.HeaderCell>Grade</Table.HeaderCell>
      <Table.HeaderCell>Heat #</Table.HeaderCell>
      <Table.HeaderCell>P.O. #</Table.HeaderCell>
      <Table.HeaderCell>Comments</Table.HeaderCell>
    </Table.Row>
  );
}
