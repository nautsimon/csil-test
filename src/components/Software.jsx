import React from "react";
import softwares from "./softwares.json";

class Software extends React.Component {
  state = {
    query: "",
    softwares: softwares.softwares,
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value }, () => {
      for (let i = 0; i < this.state.softwares.length; i++) {
        if (
          e.target.value.trim() !== "" &&
          this.state.softwares[i]
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          this.setState({ ["s" + i.toString() + "IsActive"]: true });
        } else {
          this.setState({ ["s" + i.toString() + "IsActive"]: false });
        }
      }
    });
  };
  render() {
    return (
      <div className="main">
        <div className="rowWithMargin verticalPaddingM col">
          <br />
          <br />
          <p className="montserrat bold regBlueText underNegativeMargin">
            AVAILABLE SOFTWARE
          </p>

          <p className="redText xxlText">
            Learn more about what software we offer
          </p>
          <input
            placeholder="Search our resources"
            className="searchInput"
            onChange={this.handleChange}
            value={this.state.query}
          ></input>
          <br />
          <div className="rowM">
            <div className="triL">
              {this.state.softwares.map((software, softwareIndex) => {
                return softwareIndex < this.state.softwares.length / 3 ? (
                  <p className="softwareListText">
                    <span
                      style={{
                        background: this.state[
                          "s" + softwareIndex.toString() + "IsActive"
                        ]
                          ? "yellow"
                          : "transparent",
                      }}
                    >
                      {software}
                    </span>
                  </p>
                ) : null;
              })}
            </div>
            <div className="tri">
              {this.state.softwares.map((software, softwareIndex) => {
                return softwareIndex < (this.state.softwares.length / 3) * 2 &&
                  softwareIndex >= this.state.softwares.length / 3 ? (
                  <p className="softwareListText">
                    <span
                      style={{
                        background: this.state[
                          "s" + softwareIndex.toString() + "IsActive"
                        ]
                          ? "yellow"
                          : "transparent",
                      }}
                    >
                      {software}
                    </span>
                  </p>
                ) : null;
              })}
            </div>
            <div className="triR">
              {this.state.softwares.map((software, softwareIndex) => {
                return softwareIndex >= (this.state.softwares.length / 3) * 2 &&
                  softwareIndex < this.state.softwares.length ? (
                  <p className="softwareListText">
                    <span
                      style={{
                        background: this.state[
                          "s" + softwareIndex.toString() + "IsActive"
                        ]
                          ? "yellow"
                          : "transparent",
                      }}
                    >
                      {software}
                    </span>
                  </p>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Software;
