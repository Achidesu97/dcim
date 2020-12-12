import React,{ Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../../templates/header/Header';
import Sidebar from '../../templates/sidebar/Sidebar';
import Footer from '../../templates/footer/Footer';
import Home from '../Home/Home';
import CustomerList from '../CustomerList/CustomerList';
import rackAsset from '../RackAsset/rackAsset';
import cableManagement from '../CableManagement/cableManagement';
import Register from '../../pages/Register'

class App extends Component{  

  render(){

    return (
      <Router>
        <div className="grid-container">
         <Header />
         <Sidebar />
         <main className="main">  
          <Switch>
            <Route path='/' exact component={Register}/>
            <Route path='/customer_list' component={CustomerList}/>
            <Route path='/rack_assets' component={rackAsset}/>
            <Route path='/cable_management' component={cableManagement}/>
          </Switch>
          </main>
        <Footer/>
        </div>
        </Router>

    )
    
  }

}

export default App;
