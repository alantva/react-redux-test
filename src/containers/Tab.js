import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListContainer from './List';

const INITIAL_STATE = { value: 0 };

const styles = theme => ({
  tab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 400,
    flexWrap: 'wrap',
    margin: theme.spacing.unit * 2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main
  }
});

class CommonTab extends Component {
  state = INITIAL_STATE;

  static defaultProps = {
    data: [],
    onMove: () => {},
    onDelete: () => {}
  };

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func,
    onMove: PropTypes.func,
    classes: PropTypes.object.isRequired
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, data } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.tab}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Pendentes" />
            <Tab label="Completas" />
          </Tabs>
        </AppBar>
        <ListContainer
          title="Lista de Tarefas"
          data={data.filter(d => d.complete === !!value)}
          onMove={this.props.onMove}
          onDelete={this.props.onDelete}
        />
      </div>
    );
  }
}

export default withStyles(styles)(CommonTab);