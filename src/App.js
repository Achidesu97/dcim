import React,{Component,Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/layout/header/Header';
import Sidebar from './components/layout/sidebar/Sidebar';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/home/Home';
import CustomerList from './components/pages/customerList/CustomerList';
import rackAsset from './components/pages/rackAsset/rackAsset';
import cableManagement from './components/pages/cableManagement/cableManagement';



class App extends Component{  

  render(){

    return (
      <Router>
        <div className="grid-container">
         <Header />
         <Sidebar />
         <main className="main">  
          <Switch>
            <Route path='/' exact component={Home}/>
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
