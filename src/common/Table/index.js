import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import TableToolbar from './TableToolbar';
import TableHeader from './TableHeader';

const styles = {
  tableWrapper: {
    overflowX: 'hidden',
    maxWidth: 550,
    wordBreak: 'break-word'
  },
  checkbox: {
    width: 44
  },
  actions: {
    width: 50
  }
};

class CommonTable extends React.Component {
  state = {
    selected: [],
    page: 0,
    rowsPerPage: 5,
  };

  static defaultProps = {
    data: [],
    onMove: () => {},
    onDelete: () => {}
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    classes: PropTypes.object.isRequired,
    onMove: PropTypes.func,
    onDelete: PropTypes.func
  };

  handleSelectAllClick = event => {
    const { data } = this.props;
    if (event.target.checked) {
      this.setState({ selected: data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleMoveClick = () => {
    const { selected } = this.state;
    this.setState({ selected: [] }, () => this.props.onMove(selected));
  };

  handleDeleteClick = () => {
    const { selected } = this.state;
    this.setState({ selected: [] }, () => this.props.onDelete(selected));
  };

  handleEditClick = (event, id) => {
    event.stopPropagation();
    console.log('edit', id);
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes, title, data } = this.props;
    const { selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <div>
        <TableToolbar
          title={title}
          numSelected={selected.length} 
          onMoveClick={this.handleMoveClick}
          onDeleteClick={this.handleDeleteClick}
        />
        <div className={classes.tableWrapper}>
          <Table aria-labelledby="tableTitle">
            <TableHeader
              numSelected={selected.length}
              rowCount={data.length}
              onSelectAllClick={this.handleSelectAllClick}
            />
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox" className={classes.checkbox}>
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell>
                        <Typography component="p">{n.description}</Typography>
                      </TableCell>
                      <TableCell className={classes.actions}>
                        <Tooltip title="Editar">
                          <IconButton aria-label="Edit" onClick={event => this.handleEditClick(event, n.id)}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Anterior',
          }}
          nextIconButtonProps={{
            'aria-label': 'Próximo',
          }}
          labelDisplayedRows={({ from, to, count }) => `Exibindo ${from}-${to} de ${count} tarefa(s)`}
          labelRowsPerPage="Linhas por pagina:"
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </div>
    );
  }
}

export default withStyles(styles)(CommonTable);