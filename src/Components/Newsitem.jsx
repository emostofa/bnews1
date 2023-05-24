import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,imgUrl,readMore} = this.props;
    return (
        <div className="card mx-1 my-3 bg-dark" data-bs-theme='dark' >
        <img src={imgUrl}  className="card-img-top" alt="NewsItem"/>
        <div className="card-body" >

            <h5 className="card-title" >{title}</h5>
            <p className="card-text">{description}</p>
            <a href={readMore} rel='noopener' target='_blank' className="btn stretched-link">Read More...</a>
           
        </div>
        </div>
        
    
    )
  }
}
