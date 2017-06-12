import React, { Component } from 'react';
import { TableCell } from './TableCell';
import Grid from 'react-uikit-grid';
const styles = {
  padding: '20px',
  boxSizing: 'border-box',
  textAlign: 'center'
};

export class WorkoutWeek extends Component {
  render() {
    const { id, headers, workouts, summary} = this.props;
    return (
      <div className="uk-row">
        <Grid match list>
          <ul>
            <li>Week: {id}</li>
            {workouts.map((workout, id) => (
              <li>
                <p>{headers[id]}</p>
                <ul>
                  {workout ? workout.map(pushups => (
                    <li>{pushups}</li>
                  )) : 'Rest'}
                </ul>
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
