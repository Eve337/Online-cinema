import React from 'react';
import NavbarAll from '../../сomponents/navbar/Navbar';
import UsersTable from './UsersTable';
import UsersObj from '../../data/users';
import AdminButtons from './AdminButtons';

function AdminPanel() {
  return (
    <div>
      <NavbarAll />
      <AdminButtons />
      <UsersTable data={UsersObj} />
    </div>
  );
}

export default AdminPanel;
