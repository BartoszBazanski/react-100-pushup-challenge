/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react';
import 'fontawesome';
import Grid from 'react-uikit-grid';
import WorkoutDay from '../WorkoutDay';
import WorkoutWeekSummary from '../WorkoutWeekSummary';
import H2 from '../H2';

import styles from './styles.scss';

export default class WorkoutWeek extends Component {
  render() {
    const {
      headers,
      workouts,
      summary,
      handleWorkoutCompletion,
      weekId,
      currentWeek,
    } = this.props;
    return (
      <div className="uk-row">
        <Grid match>
          <ul className={currentWeek ? styles.workoutWeek__active : styles.workoutWeek}>
            <li><H2>Week: {weekId + 1}</H2></li>
            {workouts.map((workout, id) => (
              <li key={id}>
                <WorkoutDay
                  dayId={id}
                  header={headers[id]}
                  workout={workout}
                  weekId={weekId}
                  handleWorkoutCompletion={handleWorkoutCompletion}
                />
              </li>
            ))}
            <WorkoutWeekSummary summary={summary} />
          </ul>
        </Grid>
      </div>
    );
  }
}

WorkoutWeek.propTypes = {
  weekId: PropTypes.number.isRequired,
  currentWeek: PropTypes.bool.isRequired,
  headers: PropTypes.array,
  workouts: PropTypes.array,
  summary: PropTypes.object,
  handleWorkoutCompletion: PropTypes.func,
};
