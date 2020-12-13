import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/pages/App';
import Register from './containers/pages/Register';
import * as serviceWorker from './serviceWorker';
import firebase from './config/firebase';


ReactDOM.render(<Register />, document.getElementById('root'));

console.log("firebase =>",firebase);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
