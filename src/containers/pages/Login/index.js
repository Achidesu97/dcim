import { Divider } from '@material-ui/core';
import React, {Component} from 'react';
import './login.css';
import { connect } from 'react-redux';
import { actionUserName } from '../../../config/redux/action';

class Login extends Component {

    changeUser = () => {
        this.props.changeUserName()
    }

    render(){
        return(
            <div>
                <p>Login as a {this.props.userName}</p>
                
                <button onClick={this.changeUser} > Change User Name</button>
                <button>Go to Dashboard</button>
            </div>
        )
    }
}



const reduxState = (state) => ({
    popupProps : state.popup,
    userName : state.user
})

const reduxDispatch = (dispatch) => ({
    changeUserName : () => dispatch(actionUserName())
}) 

export default connect(reduxState, reduxDispatch)(Login);