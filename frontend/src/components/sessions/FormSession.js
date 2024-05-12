import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import * as sessionActions from "../../actions/sessions.js";
import { createMessage } from "../../actions/messages";
import Loader from "../layout/Loader.js";



 export class FormSession extends Component {
   state = {
     isReady: false,
     age: '',
     armL: '11',
     height: '11',
     weight: '12',
     legL: '2',
     chestG: '33',
     date: '',
     site: '',
     diagnosis: '',
     job: '',
     movement: '',
     features: [{featureTitle: "Hello this is the first feature", featureDescription: "this is the description"}]
   }
     static propTypes = {
      actions: PropTypes.object.isRequired,
      auth: PropTypes.object.isRequired,
     };

     onChange = e => this.setState ({ [e.target.name]: e.target.value });

     onSubmit = (e) => {
       e.preventDefault();
       if (this.state.age.trim() == "" || this.state.job.trim() == "" || this.state.diagnosis.trim() == "" || this.state.movement.trim() == "" || this.state.site.trim() == "") {
        this.props.createMessage({ titleEmpty: "الرجاء تعبئة جميع الحقول" });
      } 
      
      else if (this.state.age.trim() !== "" && this.state.site.trim() !== "" && this.state.diagnosis.trim() !== "" && this.state.movement.trim() !== "" && this.state.job.trim() !== "") {
       const set = new FormData();
       set.append('age', this.state.age)
       set.append('armL', this.state.age);
       set.append('legL', this.state.age);
       set.append('chestG', this.state.age);
       set.append('height', this.state.age);
       set.append('weight', this.state.age);
       this.props.actions.addSession(set);
       this.setState({
         title: "",
         description: "",
         highYield: "",
         references: "",       })
        //  console.log("state", this.state.sessions)
        //  console.log("props" , this.props.sessions)
        //  console.log("hmmm" , this.state)

         let sessionsNum = this.props.sessions.length + 1
         window.location.href = `#/session/${sessionsNum}`;
        // window.location.href = `#/`;
        // window.location.href = "http://www.stackoverflow.com";

     };
     
    }
     render() {
       const {age, height, weight, armL, legL, chestG, date, diagnosis, site, job, movement } = this.state;

                      // The loading handler
                      if (this.state.isReady == false) {
                        this.props.actions.getAllSessions();
                        setTimeout(() => this.setState({ isReady: true }), 500);
                      }       
                  
                  // The loading component
      if (this.state.isReady == false) {
        return (
        <Loader/>
        );
        }
       return (
         <div className="container mb-5 mt-5" >
           <h2 className="text-center py-2 azimPurple" style={{ fontWeight: "bold"}}> ❞العزم هو الشرارة التي تضيء الطريق نحو النجاح، والقوة التي تجعل كل تحدي فرصة للتألق.❝</h2>
           <Link to="/">
            <button type="button" className="btn btn-secondary mb-2"> <i class="fas fa-arrow-right"></i> العودة </button>
            </Link>
        <hr/>
          <div className="row justify-content-around pt-4 mb-2" >
            
          <div className="col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12">
            <form onSubmit={ this.onSubmit} id="setForm">
            <h3 className="azimPurple">المعلومات الدميوغرافية*</h3>
              <div className="form-group">
                <h4 className="azimBlue mt-4 mb-2">العمر:</h4> 
                <input
                  className="form-control"
                  type="number"
                  name="age"
                  onChange={this.onChange}
                  value={age}
                  placeholder="العمر"
                />
              </div>
              <div className="form-group mt-2">
              <h4 className="azimBlue mt-3 mb-2">الجنس:</h4> 
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected>اختار...</option>
                <option value="1">ذكر</option>
                <option value="2">أنثى</option>
                </select>
              </div>
              <hr/>
              <h3 className="azimPurple">التاريخ المرضي*</h3>
              <div className="form-group">
                <h4 className="azimBlue mt-4 mb-2">التشخيص:</h4> 
                <input
                  className="form-control"
                  type="text"
                  name="diagnosis"
                  onChange={this.onChange}
                  value={diagnosis}
                  placeholder="التشخيص الطبي"
                />
              </div>
              <div className="form-group">
                <h4 className="azimBlue mt-3 mb-2">تاريخ الاصابة:</h4> 
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  onChange={this.onChange}
                  value={date}
                  placeholder="التاريخ"
                />
              </div>
              <div className="form-group">
                <h4 className="azimBlue mt-3 mb-2">المنطقة الحركية المتأثرة :</h4> 
                <input
                  className="form-control"
                  type="text"
                  name="site"
                  onChange={this.onChange}
                  value={site}
                  placeholder="طرفي ام دماغي مع التفصيل "
                />
              </div>
              <div className="form-group">
                <h4 className="azimBlue mt-3 mb-2"> نوع العمل اليومي:</h4> 
                <input
                  className="form-control"
                  type="text"
                  name="job"
                  onChange={this.onChange}
                  value={job}
                  placeholder="نوع الوظيفة او المهام اليومية"
                />
              </div>
              <div className="form-group">
                <h4 className="azimBlue mt-3 mb-2">مستوى الحركة الحالي :</h4> 
                <input
                  className="form-control"
                  type="text"
                  name="movement"
                  onChange={this.onChange}
                  value={movement}
                  placeholder="صف مستوى الحركة الحالي "
                />
              </div>
              <hr/>
              <h3 className="azimPurple">معلومات اضافية لنتعرف اكثر</h3>
              <div className="form-group">
                <h4 className="azimBlue mt-4 mb-2">   هل اخذت تأهيل مكثف سابقا:</h4> 
                <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected value="1"> ..</option>
                <option value="3">نعم</option>
                <option value="2">لا</option>
                </select>
              </div>
              <div className="form-group">
                <h4 className="azimBlue mt-3 mb-2"> الأمراض المزمنة:</h4> 
                <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected>لا توجد...</option>
                <option value="1">التهاب الأعصاب</option>
                <option value="2">الضغط </option>
                <option value="3">السكري النوع الأول</option>
                <option value="4"> السكري النوع الثاني </option>
                <option value="5">انسداد الشرايين</option>
                <option value="6"> أخرى </option>
                </select>
              </div>

            
              
            </form>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12"><img src="https://tawassam.ams3.digitaloceanspaces.com/Test1/media/People%20search-bro.png" class="img-fluid ps-2" /></div>

            
           
            <div className="form-group d-grid mt-5 pt-4 px-5" form = "setForm">
              <button type="submit" className="btn btn-lg azimPurpleBG btn-block mt-5 mb-5" onClick={this.onSubmit}>
              ابدأ التحليل
              </button>
            </div>
 
          </div>
          </div>
       )
     }
   }
   function mapStateToProps(state, ownProps) {
    let sessions = state.sessions.sessions;
  
    let auth = state.auth;
    let session = {};

    return { session: session, auth: auth, sessions: sessions };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(sessionActions, dispatch),
      createMessage: bindActionCreators(createMessage, dispatch)
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(FormSession);
  // export default connect(mapStateToProps, addSession, getAllSessions, createMessage )(FormSession);
