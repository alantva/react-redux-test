import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TabContainer from './Tab';
import FormContainer from './Form';
import FormEditContainer from './FormEdit';

const INITIAL_STATE = {
  editId: null,
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

  handleEdit = id => {
    this.setState({ editId: id });
  };

  handleChangeDescription = description => {
    this.setState(state => ({
      editId: null,
      data: state.data.map(d => d.id === state.editId ? { ...d, description } : d)
    }));
  };

  handleCancelChange = () => {
    this.setState({ editId: null });
  };
  
  render() {
    const { classes } = this.props;
    const { editId } = this.state;
    return(
      <Paper elevation={4} className={classes.manager}>
        {editId
          ? <FormEditContainer
              title="Editar Tarefa"
              description={this.state.data.find(d => d.id === editId).description}
              onSubmit={this.handleChangeDescription}
              onCancel={this.handleCancelChange}
            />
          : <FormContainer
              title="Cadastro de Tarefas"
              onSubmit={this.handleAdd}
            />
        }
        <TabContainer
          data={this.state.data}
          isEditing={!!editId}
          onDelete={this.handleDelete}
          onMove={this.handleMove}
          onEdit={this.handleEdit}
        />
      </Paper>
    );
  }
};

export default withStyles(styles)(Manager);
