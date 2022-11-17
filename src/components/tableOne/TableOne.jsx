import * as React from "react";
import {
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Table,
  TableContainer,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import "./TableOne.scss";

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Giuseppe Carollo", 159, 6.0, 88, "View More"),
  createData("Giuseppe Carollo", 237, 9.0, 37, "View More"),
  createData("Giuseppe Carollo", 262, 16.0, 24, "View More"),
  createData("Giuseppe Carollo", 305, 3.7, 67, "View More"),
  createData("Giuseppe Carollo", 356, 16.0, 49, "View More"),
];

export default function TableOne() {
  return (
    <TableContainer className="tab">
      <div className="table-main">
        <h1 className="table-main-heading">Avanzamento Settimanale Clienti</h1>
        <div>
          <div className="input-section">
            <input placeholder="Search Clienti Name" className="input" />
            <button className="button">
              <SearchIcon />
            </button>
          </div>{" "}
        </div>
      </div>
      <Table className="tableOne" aria-label="customized table">
        <TableHead style={{ backgroundColor: "#5654C8", color: "#fff" }}>
          <TableRow>
            <StyledTableCell>Program</StyledTableCell>
            <StyledTableCell align="left">Week</StyledTableCell>
            <StyledTableCell align="left">Days</StyledTableCell>
            <StyledTableCell align="left">Progress</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}%</StyledTableCell>
              <StyledTableCell align="left">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
