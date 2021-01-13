import React from 'react';
import './Sidebar.css';
import logo from '../../../assets/img/logo/logo.png';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import { withStyles } from "@material-ui/core";
// import { style } from './SidebarStyle';

const style = {
    sidebar:{
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        left:'0px',
        width:'250px',
        height: '100%',
        backgroundColor:'#202020'
    }
}

const Sidebar = (props) => {
    const { classes } = props;
    return (
            <aside className={classes.sidebar}>

                <div className="logo">
                    <Link to="/"> 
                    <img src={logo} alt=""></img>
                    </Link>              
                </div>

                <ul className="sidenav-list">
                {SidebarData.map((item,index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon} <span> {item.title}</span>
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </aside>
            )
    
}

export default withStyles(style) (Sidebar);