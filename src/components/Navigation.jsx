import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Software from "./Software";
import Visit from "./Visit";
import Staff from "./Staff";
import Minicourses from "./Minicourses";
import "./Navigation.css";
import navIconImg from "../images/logo_black.png";
// I made a navbar css file if thats alright, feel free to change anything

class Navigation extends React.Component {
  state = {
    menuIsOpen: false,
  };
  handleMenu() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }
  render() {
    return (
      <Router>
        <Link to="/" className="navIconDiv">
          <img src={navIconImg} alt="csil logo" className="navIcon" />
        </Link>
        <div className="navMain">
          <div
            style={{
              marginTop: this.state.menuIsOpen ? "0px" : "-100%",
              opacity: this.state.menuIsOpen ? 1 : 0,
            }}
            className="menuPop"
          >
            <br />
            <br />
            <br /> <br />
            <div className="rowWithMargin">
              <div className="quad colNoCenter">
                <p className="whiteText lText">General</p>

                <Link
                  to="/"
                  onClick={() => this.setState({ menuIsOpen: false })}
                  className="montserrat linkMarginBottom bold"
                >
                  <span className="whiteLink"> Home</span>
                </Link>
                <Link
                  to="/about"
                  onClick={() => this.setState({ menuIsOpen: false })}
                  className="montserrat linkMarginBottom bold"
                >
                  <span className="whiteLink"> About Us</span>
                </Link>
                <Link
                  to="/staff"
                  onClick={() => this.setState({ menuIsOpen: false })}
                  className="montserrat linkMarginBottom bold"
                >
                  <span className="whiteLink"> Staff</span>
                </Link>
              </div>
              <div className="quad colNoCenter">
                <p className="whiteText lText">Services</p>

                <Link
                  to="/software"
                  onClick={() => this.setState({ menuIsOpen: false })}
                  className="montserrat linkMarginBottom bold"
                >
                  <span className="whiteLink"> Available Software</span>
                </Link>
                <a
                  href="https://www.lib.uchicago.edu/crerar/"
                  onClick={() => this.setState({ menuIsOpen: false })}
                  className="montserrat linkMarginBottom bold"
                >
                  <span className="whiteLink">Facilities</span>
                </a>
                <Link
                  to="/minicourses"
                  onClick={() => this.setState({ menuIsOpen: false })}
                  className="montserrat linkMarginBottom bold"
                >
                  <span className="whiteLink">Minicourses</span>
                </Link>
              </div>
              <div className="quad colNoCenter">
                <p className="whiteText lText">Inquiries</p>

                <Link
                  to="/contact"
                  onClick={() => this.setState({ menuIsOpen: false })}
                  className="montserrat linkMarginBottom bold"
                >
                  <span className="whiteLink">Contact</span>
                </Link>
                <Link
                  to="/visit"
                  onClick={() => this.setState({ menuIsOpen: false })}
                  className="montserrat linkMarginBottom bold"
                >
                  <span className="whiteLink">Visit</span>
                </Link>
              </div>
              <div className="quad colNoCenter">
                <p className="whiteText lText">Related Links</p>

                <a
                  href="https://arts.uchicago.edu/explore/initiatives/media-arts-data-and-design-center-madd-center"
                  onClick={() => this.setState({ menuIsOpen: false })}
                  className="montserrat linkMarginBottom bold"
                >
                  <span className="whiteLink">M.A.A.D. Center</span>
                </a>
                <a
                  href="https://computerscience.uchicago.edu"
                  onClick={() => this.setState({ menuIsOpen: false })}
                  className="montserrat linkMarginBottom bold"
                >
                  <span className="whiteLink">UChicago CS</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hamDiv">
            <Hamburger
              color={this.state.menuIsOpen ? "#ffffff" : "#000000"}
              toggled={this.state.menuIsOpen}
              className="hamMenu"
              onToggle={() => this.handleMenu()}
            />
          </div>
        </div>
        {/* <Navbar className="navMain">
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
        </Navbar> */}
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
          <Route path="/minicourses">
            <Minicourses />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
