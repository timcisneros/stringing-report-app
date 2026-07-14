import React, { useContext } from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';
import { SavedContext } from './TablesSaved';
import { formatAge, formatDate } from './dateFormat';

export default function TablesSavedRows({ tables }) {
  const { handleTableSelect } = useContext(SavedContext);
  const tablesSaved = tables.map((table) => {
    return (
      <Table.Row key={table.id}>
        <Table.Cell collapsing>
          <Button onClick={() => handleTableSelect(table.id)}>
            <Icon name="folder" />
            Open
          </Button>
        </Table.Cell>
        <Table.Cell collapsing>
          <Icon name="table" /> {table.title}
        </Table.Cell>
        <Table.Cell>
          Created On: {formatDate(table.created)}
        </Table.Cell>
        <Table.Cell collapsing>
          Last Edited:{' '}
          {formatAge(table.created)} ago
        </Table.Cell>
      </Table.Row>
    );
  });

  return <>{tablesSaved}</>;
}
