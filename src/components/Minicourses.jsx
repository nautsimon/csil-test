import React from "react";
import minicourseIllus from "../images/minicourse_ill.png";
import zoom from "../images/zoom_logo.png";
import panopto from "../images/panopto_logo.png";
import git from "../images/git_logo.png";
import terminal from "../images/terminal_logo.png";
import latex from "../images/latex_logo.png";
import linux from "../images/linux_logo.png";

import playerIcon from "../images/player_icon.png";
import readIcon from "../images/read_icon.png";

function Home() {
  return (
    <div className="main">
      <div className="fullscreenVertical">
        <br /> <br /> <br /> <br />
        <br />
        <div className="rowWithMargin col">
          <p className="montserrat bold regBlueText underNegativeMargin">
            MINICOURSES
          </p>
          <p className="redText xxlText">
            Student-led minicourse sessions <u>free of charge</u>
          </p>
          <div className="rowM">
            <div className="aboutColLeft">
              <br />
              <br />

              <p className="blackText">
                CSIL is committed to help you take full advantage of our
                computing facilities.
                <br />
                <br />
                We invite the university community to our free-of-charge
                minicourse sessions presented each quarter.
                <br />
                <br />
                Learn about operating systems, programming, and media software
                in a relaxed environment with plenty of instructor attention.
                <br />
                <br />
                Reservation is not required and paper documentation is provided.
                <br />
                <br />
                Learn more about the minicourse offerings this quarter below.
              </p>
            </div>

            <div className=" aboutColRight">
              <br />
              <br />
              <img
                src={minicourseIllus}
                alt="about illustration"
                className="aboutIllus"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lterGreyBackground">
        <div className="rowWithMargin textCenter verticalPaddingM">
          <div className="width70percent">
            <p className="montserrat bold redText lText">SPRING 2020 ONWARDS</p>

            <p className=" blackText">
              This quarter we are moving our most popular minicourses online.
              <br />
              <br />
              We've recorded a series of minicourses as video tutorials ready
              for your use, linked below along with the documentation. Whether
              you are a faculty member, researcher, or a student, we hope you
              will find these tutorials helpful.
              <br />
              <br />
              If you are a faculty member and have any new minicourse requests
              for your course, please don't hesitate to reach out.
            </p>
          </div>
        </div>
      </div>
      <div className="rowWithMargin verticalPaddingM">
        <div className="wrapColumns">
          <div className="minicourseCard">
            <div className="minicourseCardIn">
              <div className="minicourseCardImgDiv">
                <img src={zoom} className="cardImg" alt="zoom" />
                <p className="montserrat bold redText textCenter noMarginText">
                  ZOOM
                </p>

                <p className="blackText topTextSpace">
                  Part of 2020 remote learning tool-kit. Zoom is a cloud-based
                  video communications app that allows you to set up virtual
                  video and audio conferencing, webinars, live chats,
                  screen-sharing, and other collaborative capabilities.
                </p>
                <div className="wrapColumns">
                  <a
                    href="https://www.youtube.com"
                    className="cardLinkDiv cardRow"
                  >
                    <img src={playerIcon} className="cardIcon " alt="player" />
                    <p className="smText montserrat bold regBlueText underNegativeMargin leftTextSpace">
                      WATCH NOW
                    </p>
                  </a>
                  <a
                    href="https://www.wikipedia.org"
                    className="cardLinkDiv cardRow leftCardSpace"
                  >
                    <img src={readIcon} className="cardIcon " alt="player" />
                    <p className=" smText montserrat bold regBlueText underNegativeMargin leftTextSpace">
                      READ NOW
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="minicourseCard">
            <div className="minicourseCardIn">
              <div className="minicourseCardImgDiv">
                <img src={panopto} className="cardImg" alt="zoom" />
                <p className="montserrat bold redText textCenter noMarginText">
                  PANOPTO
                </p>

                <p className="blackText topTextSpace">
                  Part of 2020 remote learning tool-kit. Panopto is a screen and
                  lecture capture tool that facilitates the recording of
                  lectures on the screen with PowerPoint, Google slides, etc.
                </p>
                <div className="wrapColumns">
                  <a
                    href="https://www.youtube.com"
                    className="cardLinkDiv cardRow"
                  >
                    <img src={playerIcon} className="cardIcon " alt="player" />
                    <p className="smText montserrat bold regBlueText underNegativeMargin leftTextSpace">
                      WATCH NOW
                    </p>
                  </a>
                  <a
                    href="https://www.wikipedia.org"
                    className="cardLinkDiv cardRow leftCardSpace"
                  >
                    <img src={readIcon} className="cardIcon " alt="player" />
                    <p className=" smText montserrat bold regBlueText underNegativeMargin leftTextSpace">
                      READ NOW
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="minicourseCard">
            <div className="minicourseCardIn">
              <div className="minicourseCardImgDiv">
                <img src={git} className="cardImg " alt="zoom" />

                <p className="montserrat bold redText textCenter noMarginText">
                  GIT
                </p>

                <p className="blackText topTextSpace">
                  Git is a version-control system for tracking changes and
                  coordinating work on collaborative projects. <br />
                  <br />
                  <a href="https://google.com" className="redLink">
                    Learn how to install Git on your PC here.
                  </a>
                </p>
                <div className="wrapColumns">
                  <a
                    href="https://www.youtube.com"
                    className="cardLinkDiv cardRow"
                  >
                    <img src={playerIcon} className="cardIcon " alt="player" />
                    <p className="smText montserrat bold regBlueText underNegativeMargin leftTextSpace">
                      WATCH NOW
                    </p>
                  </a>
                  <a
                    href="https://www.wikipedia.org"
                    className="cardLinkDiv cardRow leftCardSpace"
                  >
                    <img src={readIcon} className="cardIcon " alt="player" />
                    <p className=" smText montserrat bold regBlueText underNegativeMargin leftTextSpace">
                      READ NOW
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="minicourseCard">
            <div className="minicourseCardIn">
              <div className="minicourseCardImgDiv">
                <img src={terminal} className="cardImg" alt="zoom" />
                <p className="montserrat bold redText textCenter noMarginText">
                  TERMINAL
                </p>

                <p className="blackText topTextSpace">
                  Learn how to work from the terminal, specifically in bash and
                  git/svn version control. We will go over: the Linux
                  environment, essential shell commands, text editors, running
                  Python programs from the shell, remote access tools, version
                  control.
                </p>
                <div className="wrapColumns">
                  <a
                    href="https://www.youtube.com"
                    className="cardLinkDiv cardRow"
                  >
                    <img src={playerIcon} className="cardIcon " alt="player" />
                    <p className="smText montserrat bold regBlueText underNegativeMargin leftTextSpace">
                      WATCH NOW
                    </p>
                  </a>
                  <a
                    href="https://www.wikipedia.org"
                    className="cardLinkDiv cardRow leftCardSpace"
                  >
                    <img src={readIcon} className="cardIcon " alt="player" />
                    <p className=" smText montserrat bold regBlueText underNegativeMargin leftTextSpace">
                      READ NOW
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="minicourseCard">
            <div className="minicourseCardIn">
              <div className="minicourseCardImgDiv">
                <img src={latex} className="cardImg" alt="zoom" />
                <p className="montserrat bold redText textCenter noMarginText">
                  LATEX
                </p>

                <p className="blackText topTextSpace">
                  LaTeX is a high-quality typesetting system; it includes
                  features designed for the production of technical and
                  scientific documentation. LaTeX is the de facto standard for
                  the communication and publication of scientific documents.
                </p>
                <div className="wrapColumns">
                  <a
                    href="https://www.youtube.com"
                    className="cardLinkDiv cardRow"
                  >
                    <img src={playerIcon} className="cardIcon " alt="player" />
                    <p className="smText montserrat bold regBlueText underNegativeMargin leftTextSpace">
                      WATCH NOW
                    </p>
                  </a>
                  <a
                    href="https://www.wikipedia.org"
                    className="cardLinkDiv cardRow leftCardSpace"
                  >
                    <img src={readIcon} className="cardIcon " alt="player" />
                    <p className=" smText montserrat bold regBlueText underNegativeMargin leftTextSpace">
                      READ NOW
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="minicourseCard">
            <div className="minicourseCardIn">
              <div className="minicourseCardImgDiv">
                <img src={linux} className="cardImg" alt="zoom" />
                <p className="montserrat bold redText textCenter noMarginText">
                  LINUX
                </p>

                <p className="blackText topTextSpace">
                  The Linux open source operating system, or Linux OS, is a
                  freely distributable, cross-platform operating system based on
                  Unix that can be installed on PCs, laptops, netbooks, mobile
                  and tablet devices, video game consoles, servers,
                  supercomputers and more.
                </p>
                <div className="wrapColumns">
                  <a
                    href="https://www.youtube.com"
                    className="cardLinkDiv cardRow"
                  >
                    <img src={playerIcon} className="cardIcon " alt="player" />
                    <p className="smText montserrat bold regBlueText underNegativeMargin leftTextSpace">
                      WATCH NOW
                    </p>
                  </a>
                  <a
                    href="https://www.wikipedia.org"
                    className="cardLinkDiv cardRow leftCardSpace"
                  >
                    <img src={readIcon} className="cardIcon " alt="player" />
                    <p className=" smText montserrat bold regBlueText underNegativeMargin leftTextSpace">
                      READ NOW
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
