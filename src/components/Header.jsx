import React, { Component } from 'react'
import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap"
import { Link} from "react-router-dom";
// import {Switch } from "react-router-dom"
import logo from "../img/logo192.png"
// import Home from '../Pages/Home'
// import Projects from '../Pages/Projects'
// import About from '../Pages/About'
// import Contact from '../Pages/Contact'
export default class Header extends Component {
  render() {
    return (
        <>
        <Navbar sticky="top" collapseOnSelect expand="md" bg="primary" variant="primary">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} height="30" width="30" className="d-inline align-top" alt="Logo" /> Hi, I'm Vlad👋
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  HOME
                </Nav.Link>
                <Nav.Link as={Link} to="/projects">
                  PROJECTS
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  ABOUT
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  CONTACTS
                </Nav.Link>
              </Nav>
              <Container></Container>
              <Row>
                <Col xs="auto">
                  <Button
                    variant="warning"
                    href="https://drive.google.com/file/d/17g1jCN4jM9YsgwWspc1apEfJ53_w6bOs/view?usp=sharing"
                  >
                    Download CV
                  </Button>
                </Col>
              </Row>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}