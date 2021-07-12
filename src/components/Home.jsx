import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="homeLanding">
        <div className="rowM">
          <div className="leftLandingCol">
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
              <p className="titleLandingSubText regBlueText">LEARN MORE</p>
            </div>
          </div>
          <div className="rightLandingCol">
            <div className="innerRightLandingCol">
              <p className="titleLandingSubText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s...
              </p>
              <p className="titleLandingSubText regBlueText">WANT TO TALK?</p>
              <b className="titleLandingSubText underline">CONTACT US</b>
              <div className="landingContactBar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
