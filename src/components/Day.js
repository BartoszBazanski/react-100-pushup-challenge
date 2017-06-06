import React, { Component } from 'react';

export class Day extends Component {
  render() {
    const { day } = this.props;
    return (
      <span style={{'padding': '20px'}}>{day}</span>
    )
  }
}
