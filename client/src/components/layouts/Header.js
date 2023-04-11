import React from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import {Link} from "react-router-dom";
import {auth} from "../firebase";
import {useNavigate} from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  const HandleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          Navbar with text
        </Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Home 1</Link>
          </Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <Link to="/login">Login </Link>
          </Nav.Link>
          <Nav.Link onClick={HandleLogout}>
            Logout
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
