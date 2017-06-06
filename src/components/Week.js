import React, { Component } from 'react';
import { Day } from './Day';

export class Week extends Component {
  render() {
    const { days } = this.props;
    console.log(days);
    return (
      <div>
        {days.map((day, id) => <Day key={id} day={day} /> )}
      </div>
    );
  }
}
