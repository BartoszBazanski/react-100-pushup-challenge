import React, { Component } from 'react';
import Grid from 'react-uikit-grid';
import WorkoutDay from '../WorkoutDay/WorkoutDay';

export class WorkoutWeek extends Component {
  render() {
    const { id, headers, workouts, summary} = this.props;
    return (
      <div className="uk-row">
        <Grid match>
          <ul>
            <li>Week: {id}</li>
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
