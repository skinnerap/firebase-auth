import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import fire from '../config/fire';
import classes from './auth.module.css';

class Register extends Component {

    state = {
        email: null,
        password: null,
        passwordConfirm: null,
        phoneNumber: null,
        firstName: null,
        lastName: null,
        birthday: null,
        focusEmail: false,
        focusPassword: false,
        focusPasswordConfirm: false,
        focusPhoneNumber: false,
        focusFirstName: false,
        focusLastName: false
    }

    emailInputHandler = (e) => {
        this.setState({email: e.target.value})
    }

    passwordInputHandler = (e) => {
        this.setState({password: e.target.value})
    }

    passwordConfirmInputHandler = (e) => {
        this.setState({passwordConfirm: e.target.value})
    }

    phoneNumberInputHandler = (e) => {
        this.setState({phoneNumber: e.target.value})
    }

    firstNameInputHandler = (e) => {
        this.setState({firstName: e.target.value})
    }

    lastNameInputHandler = (e) => {
        this.setState({lastName: e.target.value})
    }

    birthdayInputHandler = (e) => {
        this.setState({birthday: e.target.value})
    }

    emailBlurHandler = () => {
        if(!this.state.email) {
            this.setState({focusEmail: true})
        } else this.setState({focusEmail: false})
    }

    phoneNumberBlurHandler = () => {
        if(!this.state.phoneNumber) {
            this.setState({focusPhoneNumber: true})
        } else this.setState({focusPhoneNumber: false})
    }

    registrationHandler = () => {

        // Password Validation: 6 Character Length, Must include at least one number, one regular character, one special character.
        if(!this.validatePassword(this.state.password)) {
            // Password is NOT valid, display this info to user

        }

        // Phone Number Validation: Must be a valid phone number, format it correctly
        if(!this.validatePhoneNumber(this.state.phoneNumber)) {
            // Phone number is NOT valid, display this info to user

        }

        // Birthday Validation: User should be at least 18 years old

        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then( u => {
            console.log('logged in');
            this.props.history.push("/"); // Redirect new user back to Home Page
        }).catch( err => {
            console.log('Error: ' + err.toString());
        })
    }

    loginHandler = () => {
        this.props.history.push("/");
    }

    validatePassword = (password) => {

    }

    validatePhoneNumber = (number) => {

    }

    validateBirthday = (date) => {

    }

    getEmailClass = () => {
        let inputClass = "";
        if(this.state.focusEmail) inputClass = classes.inputDanger;
        return inputClass;
    }

    getPhoneNumberClass = () => {
        let inputClass = "";
        if(this.state.focusPhoneNumber) inputClass = classes.inputDanger;
        return inputClass;
    }

    render() {

        const inputEmailClass = this.getEmailClass();
        const inputPhoneNumberClass = this.getPhoneNumberClass();

        return (
            <Router>
                <div className={classes.Container}>
                    <div className={classes.Register}>
                        <label htmlFor="email">Email: </label>
                        <input className={inputEmailClass} type='text' name="email" placeholder='Email' onBlur={this.emailBlurHandler} onChange={(e) => this.emailInputHandler(e)} />
                    
                        <label htmlFor="password">Password: </label>
                        <input type='text' name="password" placeholder='Password' onChange={(e) => this.passwordInputHandler(e)} />
                    
                        <label htmlFor="passwordConfirm">Confirm Password: </label>
                        <input type='text' name="passwordConfirm" placeholder='Confirm Password' onChange={(e) => this.passwordConfirmInputHandler(e)} />

                        <label htmlFor="phoneNumber">Phone Number: </label>
                        <input className={inputPhoneNumberClass} type='text' name="phoneNumber" placeholder='Phone Number' onBlur={this.phoneNumberBlurHandler} onChange={(e) => this.phoneNumberInputHandler(e)} />
                    
                        <label htmlFor="firstName">First Name: </label>
                        <input type='text' name="firstName" placeholder='First Name' onChange={(e) => this.firstNameInputHandler(e)} />
                    
                        <label htmlFor="lastName">Last Name: </label>
                        <input type='text' name="lastName" placeholder='Last Name' onChange={(e) => this.lastNameInputHandler(e)} />
                
                        <label htmlFor="birthday">Birthday: </label>
                        <input type='date' name="birthday" placeholder='Birthday' onChange={(e) => this.birthdayInputHandler(e)} />
                
                    </div>

                    <button className={classes.RegisterButton} onClick={this.registrationHandler}>
                        Register Account
                    </button> <br />
                    <button className={classes.LoginButton} onClick={this.loginHandler}>
                        Login
                    </button>

                </div>
            </Router>      
        )
    }
}

export default withRouter(Register);