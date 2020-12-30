import React,{ Component } from 'react';
import './App.css';
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

class App extends Component{  


  render(){

    return (
      <Provider store={store}>

      <Router>
        <div className="grid-container">
         <Header />
         <Sidebar />
         <main className="main">  
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/customer_list' component={CustomerList}/>
            <Route path='/rack_assets' component={RackAsset}/>
            <Route path='/cable_management' component={CableManagement}/>
          </Switch>
          </main>
        <Footer/>
        </div>
        </Router>

      </Provider>

    )
    
  }

}

export default App;
