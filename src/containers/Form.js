import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    '&:hover': {
      animation: 'shiny infinite 0.5s alternate'
    }
  },
  '@keyframes shiny': {
    '0%': {
      boxShadow: `0 0 10px inset ${theme.palette.primary.contrastText}`
    },
    '100%': {
      boxShadow: `0 0 10px inset ${theme.palette.primary.main}`
    }
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
  
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.container}>
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.taskName}
          onChange={this.handleChange('taskName')}
          margin="normal"
        />
        <Button variant="outlined" color="primary" className={classes.button}>
          Adicionar
        </Button>
      </div>
    );
  }
};

export default withStyles(styles)(Form);
