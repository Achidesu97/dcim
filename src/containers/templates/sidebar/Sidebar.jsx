import React from 'react';
import './Sidebar.css';
import logo from '../../../assets/img/logo/logo.png';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';

function Sidebar(){
       
    return (
            <aside className="sidebar">

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

export default Sidebar;