import React, { Component } from 'react';
import loading from './loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
          <img className='my-3' src={loading} alt="loading" style={{width: "30px"}}/>
      </div>
    )
  }
}

export default Spinner