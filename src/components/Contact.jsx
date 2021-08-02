import React from "react";
import { BTextField } from "./FormStyles";
import contactIll from "../images/contact_ill.png";
import emailjs from "emailjs-com";
import validator from "validator";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    status: "-",
  };
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  checkForm() {
    if (
      (this.state.name !== "",
      this.state.email !== "",
      this.state.message !== "")
    ) {
      if (validator.isEmail(this.state.email)) {
        return true;
      } else {
        this.setState({ status: "Please enter a valid email." });
        return false;
      }
    } else {
      this.setState({ status: "Please complete the form." });
      return false;
    }
  }
  submitForm() {
    if (this.checkForm()) {
      let templateParams = {
        from_name: this.state.name,
        from_email: this.state.email,
        message: this.state.message,
      };
      emailjs.send(
        "service_h9u0gei",
        "template_xjlnxtu",
        templateParams,
        "user_VW4CyNGASt0YHDK9EArrj"
      );
      this.resetForm();
      // emailjs.send(
      //     "service_h9u0gei",
      //     "template_xjlnxtu",
      //     templateParams,
      //     "user_VW4CyNGASt0YHDK9EArrj"
      //   );
      //   this.resetForm();
      // } else {
      // }
    }
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
      status: "Thank you for your response.",
    });
  }
  render() {
    return (
      <div className="main">
        <br /> <br /> <br /> <br />
        <br />
        <div className="colWithMargin">
          <p className="montserrat bold regBlueText underNegativeMargin">
            CONTACT US
          </p>
          <p className="redText xxlText">
            Feel free to drop by or shoot us an email
          </p>
        </div>
        <div className="rowWithMargin verticalPaddingM">
          <div className="bi">
            <img src={contactIll} alt="contact ill" className="contactIll" />
          </div>
          <div className="bi">
            <BTextField
              id="name"
              label="Name"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={(e) => this.handleChange(e)}
              value={this.state.name}
            />
            <br />
            <BTextField
              id="email"
              label="Email"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={(e) => this.handleChange(e)}
              value={this.state.email}
            />
            <br />
            <BTextField
              label="Your Message"
              placeholder="Your Message"
              variant="outlined"
              style={{ width: "100%" }}
              id="message"
              onChange={(e) => this.handleChange(e)}
              minRows={4}
              multiline
              maxRows={6}
              value={this.state.message}
            />
            <i
              style={{ opacity: this.state.status !== "-" ? 1 : 0 }}
              className="contactStatus topTextSpace regBlueText noMarginText"
            >
              {this.state.status}
            </i>

            <div className="contactButtonDiv">
              <span
                onClick={() => this.submitForm()}
                className="bold regBlueText contactButtonSubmit textCenter"
              >
                Send ⟶
              </span>
            </div>
          </div>
        </div>
        <div className="rowWithMargin verticalPaddingM wrapColumns">
          <br /> <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.7535830949623!2d-87.60504268442789!3d41.790523979229384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e293c21dac439%3A0xcf45cf3ba1a46e95!2sJohn%20Crerar%20Library!5e0!3m2!1sen!2sus!4v1627858037611!5m2!1sen!2sus"
            width="40%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
          <div className="contactMapTextDiv">
            <p>⟵ We’re behind the Barnes&Noble bookstore/Starbucks :)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
