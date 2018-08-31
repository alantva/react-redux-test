import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const TableHeader = ({ rowCount, numSelected, ...props }) => (
  <TableHead>
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={numSelected === rowCount}
          onChange={props.onSelectAllClick}
        />
      </TableCell>
      <TableCell padding="dense">Tarefa</TableCell>
    </TableRow>
  </TableHead>
);

TableHeader.propTypes = {
  numSelected: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired
};

export default TableHeader;
