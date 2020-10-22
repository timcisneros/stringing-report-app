import React, { useContext } from 'react';
import { Form, Button, Input, Dropdown } from 'semantic-ui-react';
import { TableContext } from './TableForm';

const options = [
  {
    text: 'FT',
    value: 'FT',
  },
  {
    text: 'JT',
    value: 'JT',
  },
];

export default function EditForm({
  row,
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
  const { handleRowDelete, handleRowChange, handleRowSelect } = useContext(
    TableContext
  );

  function handleChange(changes) {
    handleRowChange(id, { ...row, ...changes });
  }

  return (
    <div>
      <Form>
        <Form.Field>
          <label>FT / JT</label>
          <Input
            type="number"
            placeholder="#"
            value={label}
            onChange={(e) => {
              handleChange({ label: e.target.value });
            }}
            size="large"
            action={
              <Dropdown
                button
                basic
                floating
                options={options}
                value={ftjt}
                onChange={(e, data) => {
                  handleChange({ ftjt: data.value });
                }}
              />
            }
            actionPosition="left"
          />
        </Form.Field>
        <Form.Field>
          <label>Size</label>
          <Input
            type="text"
            placeholder="Size"
            value={size}
            onChange={(e) => handleChange({ size: e.target.value })}
            size="large"
          />
        </Form.Field>
        <Form.Field>
          <label>Length</label>
          <Input
            type="text"
            placeholder="Length"
            value={length}
            onChange={(e) => handleChange({ length: e.target.value })}
            size="large"
          />
        </Form.Field>
        <Form.Field>
          <label>Wall</label>
          <Input
            type="text"
            placeholder="Wall"
            value={wall}
            onChange={(e) => handleChange({ wall: e.target.value })}
            size="large"
          />
        </Form.Field>
        <Form.Field>
          <label>Grade</label>
          <Input
            type="text"
            placeholder="Grade"
            value={grade}
            onChange={(e) => handleChange({ grade: e.target.value })}
            size="large"
          />
        </Form.Field>
        <Form.Field>
          <label>Heat #</label>
          <Input
            type="text"
            placeholder="Heat #"
            value={heat}
            onChange={(e) => handleChange({ heat: e.target.value })}
            size="large"
          />
        </Form.Field>
        <Form.Field>
          <label>P.O. #</label>
          <Input
            type="text"
            placeholder="P.O. #"
            value={po}
            onChange={(e) => handleChange({ po: e.target.value })}
            size="large"
          />
        </Form.Field>
        <Form.Field>
          <label>Comments</label>
          <Input
            type="text"
            placeholder="Comments"
            value={comments}
            onChange={(e) => handleChange({ comments: e.target.value })}
            size="large"
          />
        </Form.Field>
        <br />
        <Button
          color="green"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleRowSelect(undefined);
          }}
          size="large"
        >
          Done
        </Button>
        <Button
          color="red"
          onClick={(e) => {
            e.preventDefault();
            handleRowDelete(id);
          }}
          size="large"
        >
          Delete Row
        </Button>
      </Form>
      <br />
      <br />
      <br />
    </div>
  );
}
