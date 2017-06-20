import React, { Component, PropTypes } from 'react';
import Grid from 'react-uikit-grid';
import WorkoutDay from '../WorkoutDay';
import H2 from '../H2';
import styles from './styles.scss';

export default class WorkoutWeek extends Component {// eslint-disable-line react/prefer-stateless-function
  render() {
    const { headers, workouts, summary } = this.props;
    const weekId = this.props.id;
    return (
      <div className="uk-row">
        <Grid match>
          <ul className={styles.workoutWeek}>
            <li><H2>Week: {weekId}</H2></li>
            {workouts.map((workout, id) => (
              <li key={id}>
                <WorkoutDay header={headers[id]} workout={workout} />
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

WorkoutWeek.propTypes = {
  id: PropTypes.number.isRequired,
  headers: PropTypes.array,
  workouts: PropTypes.array,
  summary: PropTypes.object,
};
