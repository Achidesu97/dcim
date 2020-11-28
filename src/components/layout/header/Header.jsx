import React,{Component} from 'react';
import './Header.css';


class Header extends Component{
    render(){
        return(

            <header className="header">
            <div className="search">Search...</div>
            <div className="profile">Your photo</div>
            </header>

        )
    }
}

export default Header;
