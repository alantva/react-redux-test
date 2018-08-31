import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

const CommonField = ({ classes, ...props }) => (
  <TextField
    id={props.name}
    label={props.label}
    className={classes.textField}
    error={!!props.error}
    helperText={props.error}
    value={props.value}
    multiline={!!props.rows}
    rows={props.rows}
    onChange={props.onChange(props.name)}
    margin="normal"
  />
);

CommonField.defaultProps = {
  error: null
};

CommonField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(CommonField);
