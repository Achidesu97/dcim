import React,{ Component } from 'react';
// import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../../templates/header/Header';
import PageHeader from '../../templates/pageHeader/PageHeader';
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
import { ThemeProvider,CssBaseline, makeStyles,createMuiTheme } from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#333996",
      light:"#3c44b126"
    },
    secondary:{
      main:"#f83245",
      light:"#F8324526"
    },
    background:{
      default: "#f4f5fd"
    },
  },
  shape:{
    borderRadius:'12px'
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }

}
)

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '250px',
    width:'100%'
  }
})


function App (){  
const classes = useStyles();

    return (
      <ThemeProvider theme={theme}>
      <Provider store={store}>
      <Router>
        {/* <div className="grid-container"> */}
        <Sidebar />
         <main className={classes.appMain}>  
         <Header />
         <PageHeader
         title="Page Header"
         subTitle="Page description"
         icon={<PeopleOutlineIcon fontSize="large"/>}
         />
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
        </ThemeProvider>

    )
    

}

export default App;
