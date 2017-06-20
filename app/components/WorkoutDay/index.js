/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import H3 from '../H3';
import styles from './styles.scss';

export default class WorkoutDay extends Component {
  constructor() {
    super();
    this.state = {
      isDone: false,
    };
    this.toggleActive = this.toggleActive.bind(this);
  }
  toggleActive() {
    const { isDone } = this.state;
    this.setState({
      isDone: !isDone,
    });
  }
  render() {
    const { header, workout } = this.props;
    const { isDone } = this.state;
    return (
      <ul className={isDone ? styles.workoutDayActive : styles.workoutDay} onClick={this.toggleActive}>
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
