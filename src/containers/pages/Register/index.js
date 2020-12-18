import { Divider } from '@material-ui/core';
import React, {Component} from 'react';
import './register.css';
import firebase from '../../../config/firebase';
import Button from '../../../components/atoms/Button'

class Register extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterSubmit = () => {
       const {email,password} = this.state;
        console.log('data before send :', email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log('success:',res)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode,errorMessage);
        });
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                <p className="auth-title">Register</p>
                <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText}/>
                <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText}/>
                <Button onClick={this.handleRegisterSubmit} title="Register" />
                </div>
            </div>
        )
    }
}

export default Register;