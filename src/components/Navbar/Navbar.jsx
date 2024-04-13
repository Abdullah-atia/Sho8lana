// Navigation.js
import React from "react";
import { Link } from "react-router-dom";
// import styles from './Navbar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link compponent= {Link} to="/Signup" >Signup</Nav.Link> */}
            <Nav.Link href="/signup" >Signup</Nav.Link>

            <Nav.Link eventKey={2} href="/signin">
              Signin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/Profile">Profile</Link>
    //     </li>
    //     <li>
    //       <Link to="/Signin">Signin</Link>
    //     </li>
    //     <li>
    //       <Link to="/Signup">Signup</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Navigation;
