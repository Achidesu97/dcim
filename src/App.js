import React,{Component,Fragment} from 'react';
import './App.css';
import Home from './components/pages/home/Home';
import CustomerList from './components/pages/customerList/CustomerList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/layout/header/Header';
import Sidebar from './components/layout/sidebar/Sidebar';
import Footer from './components/layout/footer/Footer';

class App extends Component{  

  render(){

    return (
      <Router>
        <div className="grid-container">
         <Header />
         <Sidebar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/customer_list' component={CustomerList}/>
          </Switch>
          <main className="main">  
          <Home />
          </main>
        <Footer/>
        </div>
        </Router>

    )
    
  }

}

export default App;
