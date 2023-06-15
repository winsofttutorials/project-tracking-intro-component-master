import React, { Component } from "react";
import logo from "../images/logo.svg";
import "./Hero.css";
// import OutsideClickHandler from "react-outside-click-handler";

class Hero extends Component {
  state = { clicked: false };

  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <div className="navBar">
          <nav className="padding">
            <img src={logo} alt="logo" className="logo" />
            {/* <OutsideClickHandler onOutsideClick={() => {}}> */}
            <div
              id="navLinks"
              className={this.state.clicked ? "#navLinks active" : "#navLinks"}
            >
              <ul>
                <li>
                  <a href="index.html">Product</a>
                </li>
                <li>
                  <a href="index.html">Features</a>
                </li>
                <li>
                  <a href="index.html">Pricing</a>
                </li>
              </ul>
              <a href="/" className="loginBtn">
                Login
              </a>
            </div>
            {/* </OutsideClickHandler> */}
            <div className="menuIcon" onClick={this.handleClicked}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Hero;
