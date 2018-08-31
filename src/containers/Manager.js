import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Form from './Form';

const INITIAL_STATE = {
  taskList: []
};

class Manager extends Component {
  state = INITIAL_STATE;
  
  render() {
    return(
      <Paper elevation={4}>
        <Form />
      </Paper>
    );
  }
};

export default Manager;
