import React, { Component } from 'react';
import { WorkoutWeek } from '../components';
import { DATA } from '../data';

export class AppContainer extends Component {
  state = DATA;

  render() {
    const { weeks, headers } = this.state;
    return (
      <div className='uk-container'>
        {weeks.map(week => (
          <WorkoutWeek key={week.id} {...week} headers={headers}/>
        ))}
      </div>
    );
  }
}
