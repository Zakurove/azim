import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";


export class AdvanceSoon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: null,
      block: null,
      isUpdating: true
    };
  }
  static propTypes = {
    block: PropTypes.string.isRequired,
  };


  render() {
    return (
      <div className="container">
        <h2>طور مهاراتك مع الأكادميات المتعاونين </h2>
      </div>
    );
  }
}

export default AdvanceSoon;
