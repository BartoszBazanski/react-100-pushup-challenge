import React, { Component } from 'react';
import { Week } from '../components';

export class AppContainer extends Component {
  state = {
    days: ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturnday', 'Sunday']
  }

  render() {
    const { days } = this.state;
    return (
      <Week days={ days }/>
    );
  }
}
