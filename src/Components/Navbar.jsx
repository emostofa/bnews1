import React, { Component } from 'react'

import logo3 from "./logo3.png"



export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark " data-bs-theme='dark'>
            <a class="navbar-brand" href="/">
            <img src={logo3} alt="Logo" width="140" height='50' class="d-inline-block align-text-top"/>
            1
          </a>
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-justified me-auto mx-4">
              <li className="nav-item ">
                <a className="nav-link" aria-current="page" href="/">{this.props.news1.toUpperCase()}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{(this.props.news2).toUpperCase()}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/'>{(this.props.news6).toUpperCase()}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/'>{(this.props.news4).toUpperCase()}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/'>{(this.props.news5).toUpperCase()}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">{(this.props.news7).toUpperCase()}</a></li>
                  <li><a className="dropdown-item" href="/">{(this.props.news8).toUpperCase()}</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">{(this.props.news5).toUpperCase()}</a></li>
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
