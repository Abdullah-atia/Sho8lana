import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Nav2() {
  return (
    <header className="headerPrimary">
      <Container>
        <Navbar expand="xl" justify="between">
          <Navbar.Brand href="index.html">
            <img height="40" width="50" src="./logo.svg" alt=""logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
              <NavDropdown title="Home" id="home-dropdown">
                <NavDropdown.Item href="index.html">Home Main</NavDropdown.Item>
                <NavDropdown.Item href="index-2.html">Home Two</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Freelancer" id="freelancer-dropdown">
                <NavDropdown.Item href="freelancers.html">Freelancers</NavDropdown.Item>
                <NavDropdown.Item href="freelancer-details.html">Freelancer Details</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="about.html">About Us</Nav.Link>
              <NavDropdown title="Pages" id="pages-dropdown">
                <NavDropdown.Item href="services.html">Services</NavDropdown.Item>
                <NavDropdown.Item href="service-details.html">Service Details</NavDropdown.Item>
                <NavDropdown.Item href="job-posts.html">Job Post</NavDropdown.Item>
                {/* Add other pages here */}
              </NavDropdown>
              <NavDropdown title="Blog" id="blog-dropdown">
                <NavDropdown.Item href="blogs.html">Blog</NavDropdown.Item>
                <NavDropdown.Item href="blog-details.html">Blog Details</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="contact.html">Contact</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-4 mt-4">
              <div className="d-flex d-lg-none">
                <Nav.Link href="signin.html" className="headerBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5 7.55556C8.55134 7.55556 10.2143 5.86419 10.2143 3.77778C10.2143 1.69137 8.55134 0 6.5 0C4.44866 0 2.78571 1.69137 2.78571 3.77778C2.78571 5.86419 4.44866 7.55556 6.5 7.55556ZM6.5 17C10.0899 17 13 15.3086 13 13.2222C13 11.1358 10.0899 9.44444 6.5 9.44444C2.91015 9.44444 0 11.1358 0 13.2222C0 15.3086 2.91015 17 6.5 17Z" fill="white"></path>
                  </svg>
                  Login
                </Nav.Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Nav2;