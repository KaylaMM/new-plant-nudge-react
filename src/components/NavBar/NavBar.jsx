import React from "react";
import LogIn from "../../views/LogIn/LogIn";
import SignUp from "../../views/SignUp/SignUp";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">PN</Navbar.Brand>
          <LogIn />
          <SignUp />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
