import { Divider } from '@material-ui/core';
import React, {Component} from 'react';
import './login.css';

class Login extends Component {
    render(){
        return(
            <div>
                <p>Login</p>
                <button>Go to Register</button>
                <button>Go to Dashboard</button>
            </div>
        )
    }
}

export default Login;