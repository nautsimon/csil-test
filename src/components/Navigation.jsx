import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Software from "./Software";
import Visit from "./Visit";
import Staff from "./Staff";
import "./Navigation.css";
// I made a navbar css file if thats alright, feel free to change anything

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <Navbar className="navMain">
          <Navbar.Brand href="/" className="mr-left">
            CSIL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" />
          <Navbar.Collapse id="basic-navbar-nav" className="mr-auto">
            <Nav className="mr-auto">
              <NavDropdown alignRight title="Dropdown" className="float-right">
                <NavDropdown.Item href="/">Home</NavDropdown.Item>
                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                <NavDropdown.Item href="/software">Software</NavDropdown.Item>
                <NavDropdown.Item href="/visit">Visit Us</NavDropdown.Item>
                <NavDropdown.Item href="/staff">Staff</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/software">
            <Software />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/visit">
            <Visit />
          </Route>
          <Route path="/staff">
            <Staff />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
