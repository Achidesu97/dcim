import React,{ Component } from 'react';
// import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../../templates/header/Header';
import Sidebar from '../../templates/sidebar/Sidebar';
import Footer from '../../templates/footer/Footer';
import Home from '../Home';
import CustomerList from '../CustomerList/';
import RackAsset from '../RackAsset/';
import CableManagement from '../CableManagement';
import Register from '../../pages/Register'
import Login from '../../pages/Login'
import { Provider } from 'react-redux';
import {store} from '../../../config/redux'
import { CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '250px',
    width:'100%'
  }
})


function App (){  
const classes = useStyles();

    return (
      <Provider store={store}>

      <Router>
        {/* <div className="grid-container"> */}
        <Sidebar />
         <main className={classes.appMain}>  
         <Header />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/customer_list' component={CustomerList}/>
            <Route path='/rack_assets' component={RackAsset}/>
            <Route path='/cable_management' component={CableManagement}/>
          </Switch>
          <Footer/>
          </main>
          <CssBaseline/>
        {/* </div> */}
        </Router>

      </Provider>

    )
    

}

export default App;
