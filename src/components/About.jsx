import React from "react";
import { Link } from "react-router-dom";
import aboutIllus from "../images/about_ill.png";
import rocket from "../images/rocket_icon.png";
import cal from "../images/cal_icon.png";
import write from "../images/write_icon.png";
function Home() {
  return (
    <div className="main">
      <div className="fullscreenVertical">
        <br /> <br /> <br /> <br />
        <br />
        <div className="rowWithMargin col">
          <p className="montserrat bold regBlueText underNegativeMargin">
            ABOUT CSIL
          </p>
          <p className="redText xxlText">
            Serving students and faculty for over 30 years
          </p>
          <div className="rowM">
            <div className="aboutColLeft">
              <p className="blackText">
                <br />
                Welcome to the University of Chicago Computer Science
                Instructional Laboratory (CSIL)!
                <br />
                <br />
                Since 1989, CSIL has provided students, faculty, and university
                affiliates with a variety of computing services.
                <br />
                <br />
                Located on the first floor of the John Crerar Library, CSIL
                offers a wide range of services - from hardware support to
                computer software to minicourse lessons.
                <br />
                <br />
                Contact us if you have any questions or would like to reserve a
                lab.
              </p>
              <br />
              <button className="montserrat redButton">CONTACT US</button>
            </div>

            <div className=" aboutColRight">
              <br />
              <br />
              <img
                src={aboutIllus}
                alt="about illustration"
                className="aboutIllus"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lterGreyBackground">
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
      </div>
      <div className="rowWithMargin verticalPaddingM">
        <div className="triLWBorder sideBorderR">
          <div className="rowMH">
            <div className="iconDiv">
              <img src={cal} className="icons" alt="calendar icon" />
            </div>
            <div className="iconDivR">
              <p className="montserrat bold regBlueText noMarginText">
                LAB SCHEDULE
              </p>
            </div>
          </div>
          <br />
          <p className="montserrat blackText">
            From RSO meetings to student-led workshops, CSIL hosts a wide
            variety of events. We also assist the CS department faculty by
            maintaining laboratory reservations for their classes. Check out our
            lab schedule above or below.
          </p>
          <Link to="/" className="montserrat bold regBlueText blueArrowLink">
            LAB SCHEDULE ⟶
          </Link>
        </div>
        <div className="triWBorder">
          <div className="rowMH">
            <div className="iconDiv">
              <img src={rocket} className="icons" alt="calendar icon" />
            </div>
            <div className="iconDivR">
              <p className="montserrat bold regBlueText noMarginText">
                MINICOURSES
              </p>
            </div>
          </div>
          <br />
          <p className="montserrat blackText">
            We offer free-of-charge minicourse sessions each quarter. Learn
            about systems, programming, media software, and more in a relaxed
            environment. Reservation is not required and documentation is
            provided.
          </p>
          <Link to="/" className="montserrat bold regBlueText blueArrowLink">
            MINICOURSES ⟶
          </Link>
        </div>
        <div className="triRWBorder sideBorderL">
          <div className="rowMH">
            <div className="iconDiv">
              <img src={write} className="icons" alt="calendar icon" />
            </div>
            <div className="iconDivR">
              <p className="montserrat bold regBlueText noMarginText">
                POLICIES
              </p>
            </div>
          </div>
          <br />
          <p className="montserrat blackText">
            CSIL is open to the public, but we do have many specific policies
            regarding priority of use, user file storage, printing, lost and
            found items, food, smoking, and more. Read more about our specific
            policies above.
          </p>
          <Link to="/" className="montserrat bold regBlueText blueArrowLink">
            POLICIES ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
