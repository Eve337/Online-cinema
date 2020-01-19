import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

function AdminButtons() {
  return (
    <div className="d-flex flex-column">
      <ButtonGroup size="lg">
        <Button>Add film</Button>
      </ButtonGroup>
    </div>
  );
}

export default AdminButtons;
