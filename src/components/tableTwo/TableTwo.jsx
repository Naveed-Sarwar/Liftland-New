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
import "../tableOne/TableOne.scss";

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
];

export default function TableTwo() {
  return (
    <TableContainer className="tab">
      <div className="table-main">
        <h1 className="table-main-heading">Le mie programmazioni</h1>
        <div>
          <div className="input-section">
            <input placeholder="Search Schedule " className="input" />
            <button className="button">
              <SearchIcon />
            </button>
          </div>{" "}
        </div>
      </div>
      <Table className="table" aria-label="customized table">
        <TableHead style={{ backgroundColor: "#5654C8", color: "#fff" }}>
          <TableRow>
            <StyledTableCell>Program</StyledTableCell>
            <StyledTableCell align="right">Week</StyledTableCell>
            <StyledTableCell align="right">Days</StyledTableCell>
            <StyledTableCell align="right">Progress</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}%</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
