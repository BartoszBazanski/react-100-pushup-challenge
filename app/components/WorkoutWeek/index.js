import React, { Component } from 'react';
import Grid from 'react-uikit-grid';
import WorkoutDay from '../WorkoutDay';
import H2 from '../H2';

export default class WorkoutWeek extends Component {
  render() {
    const { id, headers, workouts, summary} = this.props;
    return (
      <div className="uk-row">
        <Grid match>
          <ul style={{listStyleType: 'none'}}>
            <li><H2>Week: {id}</H2></li>
            {workouts.map((workout, id) => (
              <li key={id}>
                <WorkoutDay header={headers[id]} workout={workout}/>
              </li>
            ))}
            <li>Finished: {summary.done ? 'V' : 'X'}</li>
            <li>Repeats: {summary.repeats}</li>
          </ul>
        </Grid>
      </div>
    );
  }
}
