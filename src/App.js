import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'
import Gameboard from "./layouts/Gameboard";
import Gameplay from "./layouts/Gameplay.js";
import Login from "./layouts/Login.js";
// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import './util/web3/web3Reducer.js';
import Web3 from "web3";
class App extends Component {
 
  render() {

      return(
        <div>
      <Login/>
      </div>
        );
   
  }
}

export default (App);
