import React, {Component} from 'react';
import './register.css';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action';

class Register extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterSubmit = () => {
       const {email,password} = this.state;
        this.props.registerAPI({email,password});
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                <p className="auth-title">Register</p>
                <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText}/>
                <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText}/>
                <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading}/>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
});

const reduxDispatch = (dispatch) => ({
    registerAPI : (data) => dispatch(registerUserAPI(data))
});

export default connect(reduxState, reduxDispatch)(Register);