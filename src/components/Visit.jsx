import React from "react";
import { Link } from "react-router-dom";
import rocket from "../images/rocket_icon.png";
import cal from "../images/cal_icon.png";
import write from "../images/write_icon.png";
function Home() {
  return (
    <div className="main">
      <br /> <br /> <br /> <br />
      <br />
      <div className="colWithMargin">
        <p className="montserrat bold regBlueText underNegativeMargin">
          VISIT US
        </p>
        <p className="redText xxlText">
          Learn about current events and reserving lab spaces.{" "}
        </p>
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
            Check out the link below to view our live CSIL schedule. You can
            learn more about current labs, office hours, and more! Please
            contact us if you would like to schedule an event.
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
                VIRTUAL HOURS
              </p>
            </div>
          </div>
          <br />
          <p className="montserrat blackText">
            CSIL will be providing a virtual help desk this quarter via Zoom.
            Please contact csil@cs.uchicago.edu for access.
            <br />
            <br />
            Monday – Friday: 9AM–11PM CDT Saturday: 10AM–6PM CDT Sunday:
            10AM–11PM CDT
          </p>
        </div>
        <div className="triRWBorder sideBorderL">
          <div className="rowMH">
            <div className="iconDiv">
              <img src={write} className="icons" alt="calendar icon" />
            </div>
            <div className="iconDivR">
              <p className="montserrat bold regBlueText noMarginText">
                RESERVE
              </p>
            </div>
          </div>
          <br />
          <p className="montserrat blackText">
            Our Mac and Linux labs are located on the first floor of the John
            Crerar Building.Our labs feature 20 student workstations each.
            Contact us at the link below to reserve a lab.
          </p>
          <Link to="/" className="montserrat bold regBlueText blueArrowLink">
            RESERVE ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
