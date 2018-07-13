import React, { Component } from 'react';
import { Link } from 'react-router';
// Our custom input component, which uses label, id and tabIndex properties
var MyInput = React.createClass({
  render: function() {

    // Get the error message by calling a function, passed to this
    // component through getError property
    var errorMessage = this.props.getError(this.props.id);

    return (
        <fieldset className={"form-fieldset ui-input first " + (errorMessage ?    "erroneous" : "")}>
            <input type="text" name={this.props.id} id={this.props.id} tabIndex={this.props.tabIndex} />
            <label htmlFor={this.props.id}>
              <span data-text={this.props.label}>{this.props.label}</span>
            </label>
            <span className="error">{errorMessage ? errorMessage : null}</span>
          </fieldset>
    )
  }
});

// Form
var SendForm = React.createClass ({
  getError: function (fieldName) {
    return this.state[fieldName+"Error"];
  },
  setError: function (fieldName, error) {
    var update = {};
    update[fieldName+"Error"] = error;
    this.setState(update);
  },
  getInitialState: function() {
    return {
      isMailSent: false,
      errorMessage: null,
    };
  },
  componentDidMount: function () {
    // This will be called right when the form element is displayed
    $('form').parsley()
  },
  validateForm: function(){
    var hasErrors = false;

    if ($('#company').val().length < 1){
      this.setError("company", "Please enter your company name");
      hasErrors = true;
    } else this.setError("company", null)

    if ($('#industry').val().length < 1){
      this.setError("industry", "Please enter the industry");
      hasErrors = true;
    } else this.setError("industry", null)

    if ($('#firstName').val().length < 1){
      this.setError("firstName", "Please enter your first name");
      hasErrors = true;
    } else this.setError("firstName", null)

    if ($('#lastName').val().length < 1) {
      this.setError("lastName", "Please enter your last name");
      hasErrors = true;
    } else this.setError("lastName", null)

    if ($('#email').val() == '') {
      this.setError("email", "Please enter your email address");
      hasErrors = true;
    } else this.setError("email", null)

    if ($('#email').val() !== /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/) {
      this.setError("email", "Please enter a valid email address");
      hasErrors = true;
    } else this.setError("email", null)
    if ($('#phone').val().length < 1) {
      this.setError("phone", "Please enter your phone number");
      hasErrors = true;
    } else this.setError("phone", null)

    return !hasErrors;
  },
  handleSubmit: function (e) {
    e.preventDefault();

    // Check if data is valid
    if (!this.validateForm()) {
      //return if not valid
      return;
    }

    // Get the form.
    var form = $('form');
    // Serialize the form data.
    var formData = $(form).serialize();

    var self = this;
    console.log(formData)
    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: 'email-handler.php',
      data: formData
    }).done(function(response) {

      // Update the state, notifying that mail was sent
      // This value will be used in the form when rendering
      self.setState({isMailSent: true})

      // Hide the form
      $('.formCont').hide();
    }).fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      self.setState({errorMessage : "Something went wrong. Please try again."});
    });
  },
 render: function(){
   return (
     <div className="companyForm">

       <h2 className="header compFormHead">Form</h2>

       { this.state.isMailSent ?
           <div className="success">Thank you for submission. Someone will be in contact with you shortly.</div>
           : null }

       <div className="container formCont">
         <form method="post" acceptCharset="utf-8" autoComplete="off" onSubmit={this.handleSubmit}>

         <MyInput id="company" label="Company" tabIndex="1" getError={this.getError}/>
         <MyInput id="industry" label="Industry" tabIndex="2" getError={this.getError}/>

         <div className="two-column">
           <MyInput id="firstName" label="First Name" tabIndex="3" getError={this.getError}/>
           <MyInput id="lastName" label="Last Name" tabIndex="4" getError={this.getError}/>
         </div>
         <div className="two-column">
           <MyInput id="email" type="email" label="Email" tabIndex="5" getError={this.getError}/>
           <MyInput id="phone" label="Phone" tabIndex="6" getError={this.getError}/>
         </div>

         {this.state.errorMessage ? <div className="fail">{this.state.errorMessage}</div> : null}

         <div className="form">
           <input type="submit" name="submit" className="btn btn-primary" value="APPLY" tabIndex="7" />
         </div>

         </form>
       </div>

     </div>
   );
 }
});

export default SendForm;
