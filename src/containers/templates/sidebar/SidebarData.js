import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiTwotoneHome/>,
        cName:'nav-text'
    },
    {
        title:'Customer List',
        path:'/customer_list',
        icon:<BsIcons.BsFillPersonFill/>,
        cName:'nav-text'
    },
    {
        title:'Rack Assets',
        path:'/rack_assets',
        icon:<AiIcons.AiFillDatabase/>,
        cName:'nav-text'
    },
    {
        title:'Cable Management',
        path:'/cable_management',
        icon:<FaIcons.FaEthernet/>,
        cName:'nav-text'
    }
  
]
