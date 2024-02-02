import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";


export class Soon extends Component {
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
                  <div className="justify-content-center row mt-5">
        <img src="https://tawassam.ams3.digitaloceanspaces.com/Test1/media/AzimStars.png" style={{width: "15%"}} class="img-fluid ps-2 text-center" />
        </div>
        <h1 className="text-center  my-3 mb-5 pb-5 azimPurple" style={{fontSize: "4rem", fontWeight: "bold"}} > قريبا... </h1>    

        <div className="row justify-content-around mt-5 mb-5 pb-5">
        <div className="col-6 pt-5">
          <h1 className="azimPurple mx-3 my-5">هذه النسخة الأولية للمنصة وعملت أثناء هاكاثون ريادة الاعمال الرقمية في الباحة</h1>
          <h1 className="azimPurple mx-3 my-5">لا زلنا نعمل باستمرار لتطوير المنصة, فانتظرونا!</h1>
        </div>
        <div className="col-6">
        <img src="https://tawassam.ams3.digitaloceanspaces.com/Test1/media/analysis.png"  class="img-fluid ps-2 text-center" />
        </div>
       </div>
      </div>
    );
  }
}

export default Soon;
