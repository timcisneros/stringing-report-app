import React from 'react';
import { Table, Icon, Menu } from 'semantic-ui-react';

export default function TableFormFooter() {
  return (
    <>
      <Table.Row>
        <Table.HeaderCell colSpan="9">
          <Menu floated="right" pagination>
            <Menu.Item as="a" icon>
              <Icon name="chevron left" />
            </Menu.Item>
            <Menu.Item as="a">1</Menu.Item>
            <Menu.Item disabled as="a">
              2
            </Menu.Item>
            <Menu.Item as="a" icon>
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </>
  );
}
