import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';

export default class App extends Component {
  render() {
    return (
      <Navbar news1='Sport' news2='Travel' news3='Health' news4='Education' news5='Science' news6='International'
      news7= 'Tech' news8= 'Nature'></Navbar>

     
    )
  }
}

