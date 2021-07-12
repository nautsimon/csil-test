import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12}>
            <Row>
              <p className="footer-title">Say Hello.</p>
            </Row>
            <Row>
              <p>
                (773) 702-1082 <br></br>
                csil@cs.uchicago.edu <br></br>
                5730 S Ellis Ave <br></br>
                Chicago, IL 60637
              </p>
            </Row>
            <Row>
              <a
                href="https://computerscience.uchicago.edu/"
                className="white-link"
              >
                UChicago CS
              </a>
            </Row>
            <Row>
              <a
                href="https://arts.uchicago.edu/media-arts-data-and-design-center-madd-center"
                className="white-link"
              >
                Media Arts and Design (M.A.A.D.)
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
