/* eslint-disable react/prefer-stateless-function */
/* eslint-disable consistent-return */

import React, { Component } from 'react';
import WorkoutWeek from 'components/WorkoutWeek';
import { DATA } from './data';

export default class Workout extends Component {
  state = {
    headers: {},
    weeks: {},
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    this.setState({
      currentWeek: 0,
      headers: DATA.headers,
      weeks: DATA.weeks,
    });
  }
  updateState(object) {
    this.setState({
      ...object,
    });
  }
  handleWorkoutCompletion = (id, weekId) => {
    const { weeks } = this.state;
    const { currentWeek } = this.state;
    if (currentWeek !== weekId) return null;

    if (!id || weeks[weekId].workouts[id - 1].isDone) {
      weeks[weekId].workouts[id].isDone = true;
      this.setState({
        weeks,
      });
    }

    if (this.checkWeekCompletion(weekId)) {
      this.finishWorkoutWeek(weekId);
    }
  }
  finishWorkoutWeek(weekId) {
    const { weeks } = this.state;
    const maxWeeksIndex = weeks.length - 1;
    const { repeats } = weeks[weekId].summary;
    const { done } = weeks[weekId].summary;
    const { currentWeek } = this.state;
    weeks[weekId].summary = {
      done: true,
      repeats: !done ? repeats + 1 : repeats,
    };
    this.setState({
      currentWeek: (currentWeek === maxWeeksIndex) ? currentWeek : currentWeek + 1,
      weeks,
    });
  }
  checkWeekCompletion(weekId) {
    const { weeks } = this.state;
    const week = weeks[weekId].workouts;
    const workoutsCompleted = week.map((workout) => workout.isDone);
    const isWeekCompleted = workoutsCompleted.reduce((a, b) => a && b);
    return isWeekCompleted;
  }
  render() {
    const { weeks, headers, currentWeek } = this.state;
    return (
      <div>
        {weeks.map((week, id) => (
          <WorkoutWeek
            key={id}
            weekId={id}
            currentWeek={currentWeek === id}
            headers={headers}
            handleWorkoutCompletion={this.handleWorkoutCompletion}
            {...week}
          />
        ))}
      </div>
    );
  }
}
