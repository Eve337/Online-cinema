import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

function UsersTable(props) {
  UsersTable.propTypes = {
    data: PropTypes.array.isRequired,
  };

  return (
    <div className="container mt-3">
      <h2 className="display-3">Page for admin</h2>
      <Table responsive className="text-center">
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>pass</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>deleteRequest</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(user => (
            <tr>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.deleteRequest.toString()}</td>
              <td>
                <button className="btn btn-color" type="button" name="user-remove-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersTable;
