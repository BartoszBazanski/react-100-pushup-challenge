import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class WorkoutDay extends Component {
  render() {
    console.log(styles.workoutDay);
    const { header, workout } = this.props;
    return (
      <ul className={styles.workoutDay}>
        <p>{header}</p>
        {workout ? workout.map((pushups, id) => (
          <li key={id}>{pushups}</li>
        )) : 'Rest'}
      </ul>
    )
  }
}

export default CSSModules(WorkoutDay, styles);
