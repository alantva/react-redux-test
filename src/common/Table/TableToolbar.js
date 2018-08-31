import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { lighten } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    flex: '0 0 auto'
  }
});

const TableToolbar = ({ classes, ...props }) => (
  <Toolbar
    className={classNames(classes.root, {
      [classes.highlight]: props.numSelected > 0,
    })}
  >
    <div className={classes.title}>
      <h3>
        {props.numSelected > 0 ? `${props.numSelected} tarefa(s) selecionada(s)` : props.title}
      </h3>
    </div>
    <div className={classes.spacer} />
    {props.numSelected > 0 ? (
      <div className={classes.actions}>
        <Tooltip title="Mover">
          <IconButton aria-label="Move" onClick={props.onMoveClick}>
            <SwapHorizIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Deletar">
          <IconButton aria-label="Delete" onClick={props.onDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    ) : null}
  </Toolbar>
);

TableToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onMoveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default withStyles(styles)(TableToolbar);
