import React from "react";
import { Nav } from "react-bootstrap";
import { headerStyles } from "./Header.styles";

class Header extends React.Component {
    render() {
        return (
            <Nav css={headerStyles} defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
          </Nav>
        )
    }
}

export default Header;