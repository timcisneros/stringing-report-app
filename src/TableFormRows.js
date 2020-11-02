import React from 'react';
import { Table } from 'semantic-ui-react';
import TableFormCells from './TableFormCells';

export default function TableFormRows({ rows, selectedOption }) {
    const tableRows = rows.map((row) => {
        return (
            <Table.Row className="table-form-rows" key={row.id}>
                <TableFormCells {...row} selectedOption={selectedOption} />
            </Table.Row>
        );
    });
    return <>{tableRows}</>;
}
