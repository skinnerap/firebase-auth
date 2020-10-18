import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import fire from './config/fire';
import './App.css';

import Login from './auth/Login';
import Register from './auth/Register';
import Home from './views/Home';

function App() {

  const [loggedIn, setLoggedIn] = useState(null);
  
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        setLoggedIn({user});
        console.log(user.uid);
      }
      else setLoggedIn(null);
    })
  }, []);

  return (
  
    <Router>
      <div className="App">
      <Switch>
      <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/'>
          {loggedIn ? <Home /> : <Login />} 
        </Route>
        
      </Switch>
      </div>
    </Router>
  
  );
}

export default App;