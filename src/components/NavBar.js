import React from "react";
import { Nav } from "react-bootstrap";

const NavBar = (props) => {


  return (
    <Nav variant="pills" defaultActiveKey="#tech" className="nav">
      <Nav.Item>
        <Nav.Link href="#tech" onClick={() => props.changeTheme('tech')}>Tech</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#science" onClick={() => props.changeTheme('science')}>Philosophy and Science</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#education" onClick={() => props.changeTheme('education')}>Education</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#articles" onClick={() => props.changeTheme('article')}>My published articles</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#travel" onClick={() => props.changeTheme('travel')}>My travels</Nav.Link>
      </Nav.Item>
    </Nav>


  );

}

export default NavBar;