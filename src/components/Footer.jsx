import React from "react";
import atem from "../images/atemW.png";
import face from "../images/faceW.png";
import insta from "../images/instaW.png";
import twit from "../images/twitW.png";
function Footer() {
  return (
    <footer>
      <div className="rowWithMargin">
        <div className="footerLeftDiv">
          <p>
            (773) 702-1082 <br />
            csil@cs.uchicago.edu <br />
            5730 S Ellis Ave <br />
            Chicago, IL 60637
          </p>

          <a href="https://computerscience.uchicago.edu/" className="whiteLink">
            UChicago CS
          </a>
          <br />
          <a
            href="https://arts.uchicago.edu/media-arts-data-and-design-center-madd-center"
            className="whiteLink"
          >
            Media Arts and Design (M.A.A.D.)
          </a>
        </div>
        <div className="footerRightDiv">
          <div className="SocialBarRow">
            <a href="https://www.facebook.com/uchicagocsil/">
              <img className="socialImg" alt="face" src={face}></img>
            </a>
            <a href="https://www.instagram.com/uchicagocsil/?hl=en">
              <img className="socialImg" alt="insta" src={insta}></img>
            </a>
            <a href="https://twitter.com/UChicagoCSIL">
              <img className="socialImg" alt="twit" src={twit}></img>
            </a>
            <a href="mailto: csil@cs.uchicago.edu">
              <img className="socialImg" alt="atem" src={atem}></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
