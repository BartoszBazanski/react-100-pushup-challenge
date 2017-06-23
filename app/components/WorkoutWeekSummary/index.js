/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';

export default class WorkoutWeekSummary extends Component {
  render() {
    const { summary } = this.props;
    return (
      <div>
        <ul className={styles.workoutWeekSummary}>
          <li className={styles.p_1rem}>Finished: {summary.done ? 'V' : 'X'}</li>
          <li className={styles.p_1rem}>Repeats: {summary.repeats}</li>
        </ul>
      </div>
    );
  }
}

WorkoutWeekSummary.propTypes = {
  summary: PropTypes.object,
};
