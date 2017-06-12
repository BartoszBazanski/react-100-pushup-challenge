import React, { Component } from 'react';
import { TableRow } from '../components';

export class AppContainer extends Component {
  state = {
    days: ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturnday', 'Sunday']
  }

  render() {
    const { days } = this.state;
    return (
      <div className='uk-container'>
        <TableRow days={ days }/>
      </div>
    );
  }
}
