import React from "react";
import { Link } from "react-router-dom";
import hardwareSoftware from "../images/hardware_software_example_1.png";
import booking from "../images/booking_example_1.png";
import madd from "../images/madd_example_1.png";

function Home() {
  return (
    <div className="main">
      <div className="homeLanding">
        <div className="rowWithMargin">
          <div className="leftLandingCol col">
            <p className="titleLandingText redText">
              Computer
              <br />
              Science
              <br />
              Instructional
              <br />
              Laboratory
            </p>
            <div className="landingLearnMore">
              <Link to="/about" className="regBlueText blueArrowLink">
                LEARN MORE ⟶
              </Link>
            </div>
          </div>
          <div className="rightLandingCol col">
            <div className="innerRightLandingCol">
              <p className="titleLandingSubText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s...
              </p>
              <p className="titleLandingSubText regBlueText">WANT TO TALK?</p>
              <Link to="/contact" className="blackLink">
                CONTACT US
              </Link>
              <div className="landingContactBar"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltBlueBackground">
        <div className="rowWithMargin verticalPaddingM centerVertical">
          <div className="leftOneThirdCol col">
            <b className="regBlueText montserrat">
              SERVING UCHICAGO FOR OVER 25 YEARS
            </b>
            <p className="blackText">
              Welcome to the University of Chicago Computer Science
              Instructional Laboratory (CSIL)! Since 1989, CSIL has provided
              students, faculty, and university affiliates with a variety of
              computing services, from hardware support to computer software to
              minicourse lessons.
            </p>
            <Link to="/about">
              <button className="montserrat redButton">ABOUT CSIL</button>
            </Link>
          </div>
          <div className="rightTwoThirdCol rowM ">
            <div className="col tri centerHorizontal">
              <img
                className="circleImage paddingImageM"
                alt="madd"
                src={madd}
              ></img>
              <a
                className="montserrat bold textCenter regBlueText"
                href="https://arts.uchicago.edu/explore/initiatives/media-arts-data-and-design-center-madd-center"
              >
                <span className="blueLink">LAB SCHEDULE</span>
              </a>
            </div>
            <div className="col tri centerHorizontal">
              <img
                className="circleImage paddingImageM"
                alt="madd"
                src={hardwareSoftware}
              ></img>
              <a
                className="montserrat bold textCenter regBlueText"
                href="https://arts.uchicago.edu/explore/initiatives/media-arts-data-and-design-center-madd-center"
              >
                <span className="blueLink">POLICIES</span>
              </a>
            </div>
            <div className="col tri ">
              <img
                className="circleImage paddingImageM"
                alt="madd"
                src={booking}
              ></img>
              <a
                className="montserrat bold textCenter regBlueText"
                href="https://arts.uchicago.edu/explore/initiatives/media-arts-data-and-design-center-madd-center"
              >
                <span className="blueLink">M.A.D.D CENTER</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="rowWithMargin textCenter verticalPaddingM">
        <div className="width30percent">
          <p className="montserrat bold redText lText">VIRTUAL HOURS</p>

          <p className="montserrat blackText">
            CSIL will be providing a virtual help desk this quarter via Zoom.
            Please contact csil@cs.uchicago.edu for access.
          </p>

          <p className="montserrat regBlueText">
            Monday – Friday: 9AM–11PM CDT
            <br />
            Saturday: 10AM–6PM CDT
            <br />
            Sunday: 10AM–11PM CDT
          </p>
        </div>
      </div>
      <div className="dkGreyBackground">
        <div className="rowWithMargin verticalPaddingM">
          <div className="quadAlt1">
            <p className="montserrat bold redText lText">FACILITIES</p>
            <Link
              to="/contact"
              className="montserrat linkMarginBottom bold blueLink"
            >
              LAB RESERVATION
            </Link>
            <br />
            <br />
            <p className="montserrat blackText">
              Our Mac and Linux labs are located on the first floor of Crerar.
              We have current hardware and software for OS X and Linux, along
              with scanners and video equipment. Our labs feature 20 student
              workstations each. Please contact us to reserve a lab.
            </p>
          </div>
          <div className="quadAlt2 sideBorderL">
            <p className="montserrat bold redText lText">EDUCATION</p>
            <Link
              to="/contact"
              className="montserrat linkMarginBottom bold blueLink"
            >
              MINICOURSE SESSIONS
            </Link>
            <br />
            <br />
            <p className="montserrat blackText">
              We offer free-of-charge minicourse sessions each quarter, taught
              by UChicago students. Learn about systems, programming, media
              software, and more in a relaxed environment. Reservation is not
              required and documentation is provided.
            </p>
          </div>
          <div className="quadAlt2 sideBorderL">
            <p className="montserrat bold redText lText">USER SUPPORT</p>
            <Link
              to="/contact"
              className="montserrat linkMarginBottom bold blueLink"
            >
              USE HARDWARE & SOFTWARE
            </Link>
            <br />
            <br />
            <p className="montserrat blackText">
              CSIL has current hardware and software for macOS and Ubuntu Linux,
              along with hardware, scanners, and video projection equipment in
              the labs. Check out a detailed list of all the software and
              packages our laboratory machiens currently have installed.{" "}
            </p>
          </div>
          <div className="quadAlt2 sideBorderL">
            <p className="montserrat bold redText lText">RESOURCES</p>
            <Link
              to="/contact"
              className="montserrat linkMarginBottom bold blueLink"
            >
              EQUIPMENT LOANING
            </Link>
            <br />
            <br />
            <p className="montserrat blackText">
              From chargers to headphones to cables to mice, and more, CSIL
              offers a wide variety of equipment that you can check out for
              free. You will be required to fill out a form with your contact
              information and temporarily trade in your UofC ID.
            </p>
          </div>
        </div>
      </div>
      <div className="rowWithMargin verticalPaddingM col textCenter width50percent">
        <p className=" redText xlText">Get in touch!</p>
        <p className="montserrat blackText">
          For CSIL-related questions, please contact our Staff instead of
          Cosmos. You can find their areas of expertise and contact info on the
          staff page.
        </p>
      </div>
    </div>
  );
}

export default Home;
