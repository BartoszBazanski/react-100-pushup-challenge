import React, { Component } from 'react';
import H3 from '../H3';
// import styles from './styles.scss';

export default class WorkoutDay extends Component {
  render() {
    const { header, workout } = this.props;
    return (
      <ul style={{listStyleType: 'none'}}>
        <H3>{header}</H3>
        {workout ? workout.map((pushups, id) => (
          <li key={id}>{pushups}</li>
        )) : 'REST'}
      </ul>
    )
  }
}
