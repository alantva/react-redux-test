import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CommonField from '../common/Field';
import CommonButton from '../common/Button';

const INITIAL_STATE = {
  taskName: ''
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main
  }
});

class Form extends Component {
  state = INITIAL_STATE;
  
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = () => {
    console.log('Submit');
  };
  
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.container}>
        <CommonField
          name="taskName"
          label="Tarefa"
          value={this.state.taskName}
          onChange={this.handleChange}
        />
        <CommonButton label="Adicionar" onClick={this.handleSubmit} />
      </div>
    );
  }
};

export default withStyles(styles)(Form);
