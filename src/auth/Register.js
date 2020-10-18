import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import fire from '../config/fire';
import classes from './auth.module.css';

class Register extends Component {

    state = {
        email: null,
        password: null,
        phoneNumber: null,
        firstName: null,
        lastName: null,
        birthday: null
    }

    emailInputHandler = (e) => {
        this.setState({email: e.target.value})
    }

    passwordInputHandler = (e) => {
        this.setState({password: e.target.value})
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

    registrationHandler = () => {
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then( u => {
            console.log(u);
            console.log('logged in');
            this.props.history.push("/"); // Redirect new user back to Home Page
        }).catch( err => {
            console.log('Error: ' + err.toString());
        })
    }

    render() {
        return (
            <Router>
            <div className={classes.Container}>
            <div className={classes.Register}>
                <label htmlFor="email">Email: </label>
                <input type='text' name="email" placeholder='Email' onChange={(e) => this.emailInputHandler(e)} />
            
                <label htmlFor="password">Password: </label>
                <input type='text' name="password" placeholder='Password' onChange={(e) => this.passwordInputHandler(e)} />
            
                <label htmlFor="phoneNumber">Phone Number: </label>
                <input type='text' name="phoneNumber" placeholder='Phone Number' onChange={(e) => this.phoneNumberInputHandler(e)} />
            
                <label htmlFor="firstName">First Name: </label>
                <input type='text' name="firstName" placeholder='First Name' onChange={(e) => this.firstNameInputHandler(e)} />
            
                <label htmlFor="lastName">Last Name: </label>
                <input type='text' name="lastName" placeholder='Last Name' onChange={(e) => this.lastNameInputHandler(e)} />
          
                <label htmlFor="birthday">Birthday: </label>
                <input type='date' name="birthday" placeholder='Birthday' onChange={(e) => this.birthdayInputHandler(e)} />
        
                
                <button className={classes.RegisterButton} onClick={this.registrationHandler}>
                    Register Account
                </button>
            </div>
        </div>
        </Router>
            
        )
    }


}

export default withRouter(Register);