
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Newsitem from './Components/Newsitem';
import News from './Components/News';

export default class App extends Component {
  //businessgeneralhealthsciencesportstechnology
  render() {
    return (
      <><Navbar news1='business' news2='entertainment' news3='health' news4='general' news5='science' news6='sports'
        news7='technology' country1= 'us' country2='in' country3='uk'></Navbar>
        <News></News>
        
      </>

     
    )
  }
}

