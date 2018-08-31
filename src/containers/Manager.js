import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

const INITIAL_STATE = {
  taskList: []
};

class Manager extends Component {
  state = INITIAL_STATE;
  
  render() {
    return(
      <Paper elevation={4}>
        Manager
      </Paper>
    );
  }
};

export default Manager;
