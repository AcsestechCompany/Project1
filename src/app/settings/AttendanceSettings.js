import React  from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {DatePicker,TextField,Slider,TimePicker} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from "react-router-dom";
import Icon from 'react-icons-kit';
import {arrowRight2,arrowLeft2 } from 'react-icons-kit/icomoon';
import {labelStyle1,hyperLinkEmployee,overtimePay,skipstyle,inputStyle,inputstyletextarea} from "../employee/LayoutEmployee.css";
import {displayContainer,pageHeading,hrStyle,buttonStyle,arrowIcon,orange} from "../Layout.css";
import {inputstyle,formStyle,textAreaStyle,hyperLink,floatRight,
  inputStyle1,radiodiv,timeStyle} from "./LayoutSettings.css";
import {Header1} from "../Header1";
import {Footer} from "../Footer";
export class AttendanceSettings extends React.Component {
  constructor(props) {
   super(props);
   this.state = {value24: null, valueStart: null,valueEnd: null,valueLateMark: null};
 }

 handleChangeTimePicker24 = (event, date) => {
   this.setState({value24: date});
 };

 handleChangeTimePickerStart = (event, date) => {
   this.setState({valueStart: date});
 };
 handleChangeTimePickerEnd = (event, date) => {
   this.setState({valueEnd: date});
 };
 handleChangeTimePickerLateMark = (event, date) => {
   this.setState({valueLateMark: date});
 };
  render() {

    return(
      <div>
      <Header1/>
             <div className={displayContainer}>
      <p className={pageHeading}>Attendance</p>
      <hr className={hrStyle}/>
      <Row>
      <Col xs="10">
            <Form className={formStyle}>

              <FormGroup>
                <Label className={labelStyle1}>Shift Name</Label>
                <Input className={inputStyle} type="text" name="" id="" placeholder="" />
              </FormGroup>
              <div class="form-row">
              <div class="col-md-5 mb-3">
              <label className={labelStyle1}>Work Start Time</label>
              <MuiThemeProvider>
              <TimePicker
           format="ampm"
           hintText="12hr Format"
           value={this.state.valueStart}
           onChange={this.handleChangeTimePickerStart}
           underlineStyle={{display: 'none'}}
           className={timeStyle}

           style={{border:'1px solid #D0D3D4',height:'2vw'}}
         />
         </MuiThemeProvider>
             </div>
             <div class="col-md-5 mb-3">
             <label className={labelStyle1}>Work End Time</label>
             <MuiThemeProvider>
             <TimePicker
          format="ampm"
          hintText="12hr Format"
          value={this.state.valueEnd}
          onChange={this.handleChangeTimePickerEnd}
          underlineStyle={{display: 'none'}}
          className={timeStyle}
          style={{border:'1px solid #D0D3D4',height:'2vw'}}
        />
        </MuiThemeProvider>
            </div>
            </div>
              <FormGroup>
                   <Label className={labelStyle1}>Description</Label>
                   <Input id={inputstyletextarea} type="textarea" name="text"  />
                 </FormGroup>
                 <div class="form-row">
                 <div class="col-md-5 mb-3">
                 <label className={labelStyle1}>Late Mark After Time</label>
                 <MuiThemeProvider>
                 <TimePicker
              format="ampm"
              hintText="12hr Format"
              value={this.state.valueEnd}
              onChange={this.handleChangeTimePickerLateMark}
              underlineStyle={{display: 'none'}}
              className={timeStyle}
              style={{border:'1px solid #D0D3D4',height:'2vw'}}
            />
            </MuiThemeProvider>
                </div>
                <div class="col-md-5 mb-3">
                 <label className={labelStyle1}>Over Time</label>
                 <select id="" class="form-control" id={inputstyle}>
                 <option >Enable</option>
                  <option >Disable</option>
                </select>
               </div>
               </div>
               <Row className={overtimePay}>
               <p style={{fontWeight:'lighter',fontSize:'0.9vw'}}>Status</p>

            </Row>
            <div className={radiodiv}>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
              style={{marginTop:'0.7vw'}}/>
              <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.45vw',marginLeft:'1vw'}}>
                Active
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
              <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.5vw',marginLeft:'1vw'}}>
              InActive
              </label>
            </div>
            </div>
                 </Form>
                 </Col>
                 <Col xs="2">
                 <div className={floatRight} style={{fontSize:'0.9vw'}}>
                 <p style={{marginTop:'3vw'}}>
                 <Link to="/CompanyDetails" className={hyperLinkEmployee}>Organization Details</Link></p>
                 <p><Link to="/AttendanceSettings" className={orange}>Attendance</Link></p>
                 <p><Link to="/AddLeave" className={hyperLinkEmployee}>Leave Types</Link></p>
                 <p><Link to="/AddComponent" className={hyperLinkEmployee}>Salary Cmponents</Link></p>
                 </div>

                    </Col>
                 </Row>

              <Link to="/ViewShiftAttendance">
              <button className="btn btn-outline-primary " id={buttonStyle}>
              Save</button></Link>

              <Link to="/AddLeave" className={hyperLinkEmployee} id={skipstyle}>Skip</Link>

              <span className={floatRight}>

              <Link to="/CompanyDetails" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>

                      <Icon icon={arrowLeft2} size={14} className={arrowIcon} />  Prev
      </Link>

              <Link to="/AddLeave" className={hyperLinkEmployee}>Next
              <Icon icon={arrowRight2} size={14} className={arrowIcon} /></Link></span>

             </div>
             <Footer/>
             </div>


    );
  }
}
