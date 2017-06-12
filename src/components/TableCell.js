import React, { Component } from 'react';

export class TableCell extends Component {
  render() {
    const { styles, children } = this.props;
    return (
      <div style={styles}>
        {children}
      </div>
    )
  }
}
