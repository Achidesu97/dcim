import React,{Component,Fragment} from 'react';
import './App.css';
import logo from './assets/logo.png';
import Dashboard from './components/pages/home/Home';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component{  

  render(){

    return (
      <BrowserRouter>
        <div className="grid-container">

          <header className="header">
            <div className="search">Search...</div>
            <div className="profile">Your photo</div>
          </header>

          <aside className="sidenav">
            <div className="logo">
                <img src={logo} alt=""></img>
            </div>

            <ul className="sidenav-list">
                <li className="sidenav-item">Home</li>
                <li className="sidenav-item">Customer List</li>
                <li className="sidenav-item">Rack Assets</li>
                <li className="sidenav-item">Cable Management</li>
            </ul>
          </aside>

          <main className="main">  
          <Dashboard />
          </main>

          <footer className="footer">
                  <div className="copyright">&copy; 2020 MTH</div>
                  <div className="signature">Mochammad Rashid Tri Utama</div>
          </footer>

        </div>

   

        </BrowserRouter>

    )
    
  }

}

export default App;
