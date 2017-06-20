import React, { Component, PropTypes } from 'react';
import H3 from '../H3';
import styles from './styles.scss';

export default class WorkoutDay extends Component {// eslint-disable-line react/prefer-stateless-function
  render() {
    const { header, workout } = this.props;
    return (
      <ul className={styles.workoutDay} >
        <H3>{header}</H3>
        {workout.map((pushups, id) => (
          <li key={id} className={styles.workoutRound}>{pushups}</li>
        ))}
      </ul>
    );
  }
}

WorkoutDay.propTypes = {
  header: PropTypes.string,
  workout: PropTypes.array,
};
