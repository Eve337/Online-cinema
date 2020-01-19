import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function NavbarAll() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#features">Films</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#home">About us</Nav.Link>
      </Nav>

      <Button variant="outline-primary">Profile</Button>
    </Navbar>
  );
}

export default NavbarAll;
