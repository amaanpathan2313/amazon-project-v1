// App.js
 import React, {useEffect} from "react";
 // import React from 'react';
 import './App.css';
 import Header from './Header';
 import Home from './Home';
 import Checkout from "./Checkout";
 import Payment from "./Payment";
 import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
 import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    //will only run once when app component is loaded.
    auth.onAuthStateChanged(
      authUser => {
        console.log('THE USER IS :', authUser);
     
      if (authUser){
        //user just logged in / user was logged in
        dispatch(
          {
            type: 'SET-USER',
            user: authUser
          }
        )
      }
      else{
        //user logged out
       dispatch(
         {
           type: 'SET-USER',
           user: null
         }
          
        )
      }
    })
  }, [])
      



  return (
    <Router>
      <div className="App">
        <Switch>
           <Route path = "/login">
           <Login />
           </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            </Route>

            <Route path="/payment">
            <Header />
            <Payment />
            
     </Route>
   
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
