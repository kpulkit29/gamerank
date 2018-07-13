import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from "react-redux";
import FormValidator from './FormValidator.js';
import { browserHistory } from 'react-router'
// Styles
import './login.css';


class Login extends Component {
  constructor() {
    super();

    this.validator = new FormValidator([
      { 
        field: 'email', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Email is required.' 
      },
      { 
        field: 'email',
        method: 'isEmail', 
        validWhen: true, 
        message: 'That is not a valid email.'
      },
      { 
        field: 'password', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Password is required.'
      },
      { 
        field: 'password_confirmation', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Password confirmation is required.'
      },
      { 
        field: 'password_confirmation', 
        method: this.passwordMatch,   // notice that we are passing a custom function here
        validWhen: true, 
        message: 'Password and password confirmation do not match.'
      }
    ]);

    this.state = {
      email: '',
      phone: '',
      password: '',
      password_confirmation: '',
      validation: this.validator.valid(),
    }

    this.submitted = false;
  }

  passwordMatch = (confirmation, state) => (state.password === confirmation)

  handleInputChange = event => {
    console.log(event.target.name);
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  }
    
  handleFormSubmit = event => {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      // handle actual form submission here
      browserHistory.push("/gameplay");
    }
  }
  render() {
    let validation = this.submitted ?         
    this.validator.validate(this.state) :   
    this.state.validation 
    //console.log(this.props.web3.web3.web3Instance.eth.accounts);
    return (
     <div className="login">
    <div className="login-triangle"></div>
  
   <h2 className="login-header">Log in</h2>

   <form className="login-container">
   <div className={validation.email.isInvalid && 'has-error'}><p><input type="text" name="email" placeholder="Email" onChange={this.handleInputChange}/></p>
   <span className="help-block text-center" style={{margin:"auto",display:"block",color:"red"}}>{validation.email.message}</span>
   </div>
    <p><input type="text" placeholder="Address" value={this.props.web3.web3.web3Instance.eth.accounts}/></p>
    <div className={validation.password.isInvalid && 'has-error'}><p><input type="password" name="password" placeholder="password" onChange={this.handleInputChange}/></p>
    <span className="help-block" style={{margin:"auto",display:"block",color:"red"}}>{validation.password.message}</span>
    </div>
    <div className={validation.password_confirmation.isInvalid && 'has-error'}><p><input type="password" name="password_confirmation" placeholder=" Confirm Password" onChange={this.handleInputChange}/></p>
    <span className="help-block" style={{margin:"auto",display:"block",color:"red"}}>{validation.password_confirmation.message}</span>
    </div>
    <button onClick={this.handleFormSubmit} className="btn" style={{margin:"auto",display:"block"}}>
          Sign up
        </button>
   </form>
   </div>   
    );
  }
}
const mapStateToProps = (state) => {
    return {
      web3: state
    }
  }
export default connect(mapStateToProps)(Login);