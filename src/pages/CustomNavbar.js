import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const BudgetNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <NavbarBrand href="/">Overview</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="budget">Budgeting</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="transactions">Transactions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="visuals">Visuals</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
