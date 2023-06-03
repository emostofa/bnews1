import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
        <div className='d-flex justify-content-center m-5'>
            <button className="btn btn-warning" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    )
  }
}
