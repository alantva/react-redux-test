import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TabContainer from './Tab';
import FormContainer from './Form';

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

  handleAdd = ({ description }) => {
    const { data } = this.state;
    data.push({ id: data.length + 1, description, complete: false });
    this.setState({ data });
  };

  handleDelete = idArray => {
    this.setState(state => ({ data: state.data.filter(d => !idArray.includes(d.id)) }));
  };

  handleMove = idArray => {
    this.setState(state => ({
      data: state.data.map(d => idArray.includes(d.id) ? { ...d, complete: !d.complete } : d)
    }));
  };
  
  render() {
    const { classes } = this.props;
    return(
      <Paper elevation={4} className={classes.manager}>
        <FormContainer title="Cadastro de Tarefas" onSubmit={this.handleAdd} />
        <TabContainer
          data={this.state.data}
          onDelete={this.handleDelete}
          onMove={this.handleMove}
        />
      </Paper>
    );
  }
};

export default withStyles(styles)(Manager);
