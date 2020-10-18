import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/fire';
import classes from './auth.module.css';

class Login extends Component {

    state = {
        email: null,
        password: null
    }

    emailInputHandler = (e) => {
        this.setState({email: e.target.value})
    }

    passwordInputHandler = (e) => {
        this.setState({password: e.target.value})
    }

    forgotPasswordHandler = () => {
        var auth = fire.auth();
        var emailAddress = this.state.email;

        auth.sendPasswordResetEmail(emailAddress).then(function() {
            // Email sent.
            alert('email sent, update password...')
        }).catch(function(error) {
            // An error happened.
        });
    }

    
    submitLoginHandler = () => {
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then( u => {
            console.log(u);
            console.log('logged in');
        }).catch( err => {
            console.log('Error: ' + err.toString());
        })
    }

    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.Login}>
                    <label htmlFor="email">Email: </label>
                    <input type='text' name="email" placeholder='Email' onChange={(e) => this.emailInputHandler(e)} />
                
                    <label htmlFor="password">Password: </label>
                    <input type='text' name="password" placeholder='Password' onChange={(e) => this.passwordInputHandler(e)} />
                    
                    <button className={classes.LoginButton} onClick={this.submitLoginHandler}>
                        Login
                    </button>
                    <button onClick={this.forgotPasswordHandler}>
                        Forgot Password?
                    </button>
                    <Link to='/register'>
                        <span>Create an Account</span>
                    </Link>
                 
                    
                    
                </div>
            </div>
        )
    }


}

export default Login;