import React, { Component } from 'react';
import { TableCell } from './TableCell';
import Grid from 'react-uikit-grid';
const styles = {
  padding: '20px',
  boxSizing: 'borderBox',
  textAlign: 'center'
};

export class TableRow extends Component {
  render() {
    const { days } = this.props;
    return (
      <div className="uk-row">
        <Grid widths='1-10'>
          {days.map((day, id) => <TableCell key={id} styles={styles}>{day}</TableCell> )}
          <TableCell styles={styles}>Actions</TableCell>
        </Grid>
      </div>
    );
  }
}
