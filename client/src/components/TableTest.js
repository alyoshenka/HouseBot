import React from 'react'

import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'

const TableTest = ({ notifs }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Notification</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {notifs.map((notif) => (
            <TableRow key={notif.id}>
              <TableCell>{notif.date}</TableCell>
              <TableCell>{notif.message}</TableCell>
              <TableCell>DELETE</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableTest
