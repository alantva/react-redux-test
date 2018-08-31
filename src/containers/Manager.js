import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Form from './Form';

const INITIAL_STATE = {
  list: []
};

class Manager extends Component {
  state = INITIAL_STATE;

  add = ({ description }) => {
    const { list } = this.state;
    list.push({ id: list.length + 1, description });
    this.setState({ list });
  }
  
  render() {
    return(
      <Paper elevation={4}>
        <Form title="Cadastro de Tarefas" onSubmit={this.add} />
      </Paper>
    );
  }
};

export default Manager;
