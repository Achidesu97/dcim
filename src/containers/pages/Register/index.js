import { Divider } from '@material-ui/core';
import React, {Component} from 'react';
import './register.css';

class Register extends Component {
    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                <p className="auth-title">Register</p>
                <input className="input" placeholder="Email" type="text"/>
                <input className="input" placeholder="Password" type="password"/>
                <button className="btn">Register</button>
                </div>
            </div>
        )
    }
}

export default Register;