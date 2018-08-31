import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
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

const CommonButton = ({ classes, ...props }) => (
  <Button variant="outlined" color="primary" className={classes.button} onClick={props.onClick}>
    {props.label}
  </Button>
);

CommonButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(CommonButton);
