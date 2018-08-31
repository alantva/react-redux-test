import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CommonField from '../common/Field';
import CommonButton from '../common/Button';

const INITIAL_STATE = {
  description: '',
  descriptionError: null
};

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main
  }
});

class Form extends Component {
  state = INITIAL_STATE;
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value, descriptionError: null });
  };

  handleSubmit = () => {
    const { description } = this.state;
    if (description && description.length) {
      this.setState({ description: '' }, () => this.props.onSubmit({ description }));
    } else {
      this.setState({ descriptionError: 'Preenchimento obrigatório!' });
    }
  };
  
  render() {
    const { classes, title } = this.props;
    return(
      <div className={classes.form}>
        <h3>{title}</h3>
        <CommonField
          name="description"
          label="Descrição"
          error={this.state.descriptionError}
          value={this.state.description}
          rows={5}
          onChange={this.handleChange}
        />
        <CommonButton label="Adicionar" onClick={this.handleSubmit} />
      </div>
    );
  }
};

export default withStyles(styles)(Form);
