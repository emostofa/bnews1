import React, { Component } from 'react'

import logo3 from "./logo3.png"


export default class Navbar extends Component {
  render() {

    let {news1, news2,news3,news5, news4,news6, news7, country1, country2, country3} = this.props;

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top" data-bs-theme='dark'>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
            <img src={logo3} alt="Logo" width="140" height='50' className="d-inline align-text-top"/>
            1
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-justified me-auto mx-4">
              
                <a className="nav-link" aria-current="page" href="/">{news1.toUpperCase()}</a>
              
              
                <a className="nav-link" href="/">{(news2).toUpperCase()}</a>
              
              
                <a className="nav-link" href='/'>{(news3).toUpperCase()}</a>
              
              
                <a className="nav-link" href='/'>{(news4).toUpperCase()}</a>
              
              
                <a className="nav-link" href='/'>{(news5).toUpperCase()}</a>
              
              
                <a className="nav-link" href='/'>{(news6).toUpperCase()}</a>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Change Country
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">{(country1).toUpperCase()}</a></li>
                  <li><a className="dropdown-item" href="/">{(country2).toUpperCase()}</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">{(country3).toUpperCase()}</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control form-control-sm " type="search" placeholder="Search News" aria-label="Search"/>
              <button className="btn btn-outline-info" type="submit">Go</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

