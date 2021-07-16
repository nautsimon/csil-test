import React from "react";
// import { Link } from "react-router-dom";
import cosmos from "../images/staff/cosmos.png";
import staff_ill from "../images/staff_ill.png";
import staff_members from "./staff_members.json";

class Staff extends React.Component {
  state = {
    staff_members: staff_members.staff_members,
  };

  render() {
    return (
      <div className="main">
        <br /> <br /> <br /> <br />
        <br />
        <div className="colWithMargin">
          <p className="montserrat bold regBlueText underNegativeMargin">
            OUR STAFF
          </p>
          <p className="redText xxlText">
            Dozens of student tutors at your service
          </p>
        </div>
        <div className="rowWithMargin verticalPaddingM">
          <div className="topStaffColL">
            <p className="blackText">
              Under the direction of Cosmos Boekell 😎, CSIL is staffed by
              UChicago students who are passionate about technical and user
              support.
              <br />
              <br />
              If you have any questions or need any assistance, don't hesitate
              to reach out to a CSIL tutor or stop by our desk.
              <br />
              <br />
              Learn more about CSIL staff's areas of expertise and contact info
              below. We thank William Sterner for his 33 years of Service to the
              University of Chicago as the former CSIL Supervisor.
            </p>
          </div>
          <div className="topStaffColR">
            <div className="rowM">
              <div className="bi">
                <div className="staffIllGuyDiv">
                  <img
                    src={staff_ill}
                    className="staffIllGuy"
                    alt="staff illustration"
                  />
                </div>
                <div className="staffGuyProfileDiv">
                  <img
                    src={cosmos}
                    className="staffIllGuyDisplay"
                    alt="staff member"
                  />
                </div>
              </div>
              <div className="bi centerHorizontal">
                <p className="blackText leftText noMarginText">DIRECTOR</p>
                <p className="blackText leftText">cboekell[at]uchicago.edu</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rowWithMargin verticalPaddingM">
          <div className="staffColumns">
            {this.state.staff_members.map((staff_member, i) => {
              return (
                <div className="staffDiv textCenter">
                  <img
                    key={i}
                    src={
                      require("../images/staff/" + staff_member.photo).default
                    }
                    className="staffPicture circleImage"
                    alt={staff_member.name}
                  />

                  <p className="noMarginText">
                    {staff_member.title.toUpperCase()} - {staff_member.name}
                  </p>
                  <p className="noMarginText">{staff_member.email}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Staff;
