/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-no-bind */

import React, { Component, PropTypes } from 'react';
import H3 from '../H3';
import styles from './styles.scss';

export default class WorkoutDay extends Component {
  render() {
    const {
      header,
      workout,
      dayId,
      handleWorkoutCompletion,
      weekId,
    } = this.props;
    const { isDone } = workout;
    return (
      <ul className={isDone ? styles.workoutDayActive : styles.workoutDay} onClick={() => handleWorkoutCompletion(dayId, weekId)}>
        <H3>{header}</H3>
        {workout.series.map((pushups, id) => (
          <li key={id} className={styles.workoutRound}>{pushups}</li>
        ))}
      </ul>
    );
  }
}

WorkoutDay.propTypes = {
  header: PropTypes.string,
  workout: PropTypes.object,
  dayId: PropTypes.number,
  weekId: PropTypes.number,
  handleWorkoutCompletion: PropTypes.func,
};
