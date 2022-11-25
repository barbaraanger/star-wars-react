import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import Characters from "../Characters/Characters";
import Container from "../Container/Container";
import Planets from "../Planets/Planets";
import { headerStyles } from "./Header.styles";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav style={headerStyles} defaultActiveKey="/home" as="ul">
          <NavItem as="li">
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem as="li">
            <NavLink to="/characters">Characters</NavLink>
          </NavItem>
          <NavItem as="li">
            <NavLink to="/planets">Planets</NavLink>
          </NavItem>
        </Nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/characters" element={<Characters />} />
          </Routes>
        </div>
      </div>
    )
  }
}

export default Header;