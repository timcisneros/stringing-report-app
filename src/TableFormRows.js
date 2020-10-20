import React from 'react';
import { Table } from 'semantic-ui-react';
import TableFormCells from './TableFormCells';

export default function TableFormRows({ rows }) {
  const tableRows = rows.map((row) => {
    return (
      <Table.Row key={row.id}>
        <TableFormCells {...row} />
      </Table.Row>
    );
  });
  return <>{tableRows}</>;
}
