import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CommonTable from '../common/Table';

const styles = theme => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 2
  }
});

const List = ({ classes, ...props }) => (
  <div className={classes.list}>
    {props.data && props.data.length ? (
      <CommonTable
        title={props.title}
        data={props.data}
        onDelete={props.onDelete}
        onMove={props.onMove}
      />
    ) : 'Não existem tarefas cadastradas.'}
  </div>
);

List.defaultProps = {
  data: [],
  onMove: () => {},
  onDelete: () => {}
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  classes: PropTypes.object.isRequired,
  onMove: PropTypes.func,
  onDelete: PropTypes.func
};

export default withStyles(styles)(List);
