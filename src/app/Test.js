import React from "react";
import styles from "./employee/LayoutEmployee.css";
import {Form,Input,Row,Col,FormGroup,legend,Label} from "reactstrap";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {displayContainer} from "./Layout.css";
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Test extends React.Component{
  render(){
    return(
      <div>
      <Header/>
      <div class={displayContainer}>

      <Form class={styles.formStyle}>
      <Row>
      <Col xs={5}>
      <label className={styles.labelStyle1}>Fathers Name</label>
        <Input  type="text" pattern="[A-Za-z]{5}" required className={styles.inputstyle} placeholder="Fathers Name" />
        </Col>
  <Col xs={5}>
  <label className={styles.labelStyle1}>DOB</label>
  <MuiThemeProvider>
<DatePicker hintText="date of Birth"
underlineStyle={{display: 'none'}}
textFieldStyle={{position:'relative',bottom:'0.75vw',color:'red'}}
className={styles.dateStyle} style={{border:'1px solid #D0D3D4',height:'2vw'}} required/>
</MuiThemeProvider>
  </Col>
        </Row>

        <Row>

        <Col xs={5}>
        <FormGroup tag="fieldset">
        Gender
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />
            Male
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label checked>
            <Input type="radio" name="radio1" />
          Female
          </Label>
        </FormGroup>
        </FormGroup>
          </Col>
        <Col xs={5}>
        <label className={styles.labelStyle1}>Phone</label>
          <Input  type="tel" pattern="^\d{10}$" required className={styles.inputstyle} placeholder="Eg.8987987867" />
          </Col>

          </Row>
          <Row>
          <Col xs={5}>
          <label className={styles.labelStyle1}>Permannet Address</label>
          <Input type="textarea" className={styles.inputstyletextarea} maxLength={50} required/>
          </Col>
          <Col xs={5}>
          <label className={styles.labelStyle1}>Nationality</label>
          <Input type="text"  className={styles.inputstyle} placeholder="" maxLength={25} required/>
          </Col>
          </Row>
</Form>
        <Input type="submit" value="Submit" style={{width:'20%'}}/>


      </div>
      <Footer/>
      </div>
    );
  }
}
