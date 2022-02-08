import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
const Header = (props) => {
  return (
    <>
    <Navbar >
       <Container >
        <h1>{props.text}</h1>
        </Container>
    </Navbar> 
  </>
  );
};

export default Header;