import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './login/login'
import SignupComponent from './signup/signup'
import Dashboard from './dashboard/dashboard'

const firebase = require('firebase')
require('firebase/firestore')

firebase.initializeApp({
    apiKey: "AIzaSyBzOEcsaJ45dzLzndWe_HyvNXqhojmPvSY",
    authDomain: "react-chat-6b08b.firebaseapp.com",
    databaseURL: "https://react-chat-6b08b.firebaseio.com",
    projectId: "react-chat-6b08b",
    storageBucket: "react-chat-6b08b.appspot.com",
    messagingSenderId: "159525446202",
    appId: "1:159525446202:web:1bff612eb8b93c8c29cb03",
    measurementId: "G-HC8BSBTSYR"

})

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
    </div>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
