import React, { useContext } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { TableContext } from './TableForm';

export default function EditForm({
  row,
  id,
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
          <label>Label</label>
          <input
            placeholder="Label"
            value={label}
            onChange={(e) => handleChange({ label: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Size</label>
          <input
            placeholder="Size"
            value={size}
            onChange={(e) => handleChange({ size: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Length</label>
          <input
            placeholder="Length"
            value={length}
            onChange={(e) => handleChange({ length: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Wall</label>
          <input
            placeholder="Wall"
            value={wall}
            onChange={(e) => handleChange({ wall: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Grade</label>
          <input
            placeholder="Grade"
            value={grade}
            onChange={(e) => handleChange({ grade: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Heat #</label>
          <input
            placeholder="Heat #"
            value={heat}
            onChange={(e) => handleChange({ heat: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>P.O. #</label>
          <input
            placeholder="P.O. #"
            value={po}
            onChange={(e) => handleChange({ po: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Comments</label>
          <input
            placeholder="Comments"
            value={comments}
            onChange={(e) => handleChange({ comments: e.target.value })}
          />
        </Form.Field>
        <Button
          color="green"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleRowSelect(undefined);
          }}
        >
          Done
        </Button>
        <Button
          color="red"
          onClick={(e) => {
            e.preventDefault();
            handleRowDelete(id);
          }}
        >
          Delete Row
        </Button>
      </Form>
    </div>
  );
}
