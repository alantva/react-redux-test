import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Form from './Form';
import List from './List';

const INITIAL_STATE = {
  data: []
};

const styles = theme => ({
  manager: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main
  }
});

class Manager extends Component {
  state = INITIAL_STATE;
  
  static propTypes = { classes: PropTypes.object.isRequired };

  add = ({ description }) => {
    const { data } = this.state;
    data.push({ id: data.length + 1, description, complete: false });
    this.setState({ data });
  }
  
  render() {
    const { classes } = this.props;
    return(
      <Paper elevation={4} className={classes.manager}>
        <Form title="Cadastro de Tarefas" onSubmit={this.add} />
        <List title="Lista de Tarefas" data={this.state.data} />
      </Paper>
    );
  }
};

export default withStyles(styles)(Manager);
