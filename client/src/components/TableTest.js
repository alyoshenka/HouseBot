import React from 'react'

import axios from 'axios'

import { makeStyles } from '@material-ui/core'

import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'

import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'

const useStyles = makeStyles({
  hover: {
    '&:hover': {
      backgroundColor: '#e1f5fe',
    },
  },
  delete: {
    color: '#ea605d',
    fontSize: 'large',
  },
})

const deleteNotification = (id) => {
  console.log(id)
  axios
    .delete('http://localhost:8000/notifications/', { params: { _id: id } })
    .then(console.log('Deleted notification: ' + id))
    .catch((err) => {
      console.log(err)
    })
}

const TableTest = ({ notifs, update }) => {
  const classes = useStyles()

  if (!notifs) {
    return <span>Loading notification data...</span>
  }
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
            <TableRow key={notif.id} className={classes.hover}>
              <TableCell>{notif.date}</TableCell>
              <TableCell>{notif.message}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  onClick={() => {
                    deleteNotification(notif.id)
                    update(true)
                  }}
                >
                  <DeleteIcon className={classes.delete} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableTest
