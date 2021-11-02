import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classes from './orders.module.css';

function createData(date: string, product: number, quantity: number) {
  return { date, product, quantity };
}

const rows = [
  createData('12/02/2021', 159, 6.0),
  createData('15/03/2021', 237, 9.0),
  createData('18/05/2021', 262, 16.0),
];

export default function Orders() {
  return (
    <div className={classes.main_container}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align='right'>Product</TableCell>
              <TableCell align='right'>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.date}
                </TableCell>
                <TableCell align='right'>{row.product}</TableCell>
                <TableCell align='right'>{row.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
