import React from 'react'

import axios from 'axios'

import { useState } from 'react'

import Box from '@mui/material/Box/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import DatePicker from './DatePicker'

const NotificationSelector = () => {
  const [message, setMessage] = useState(null)
  const [date, setDate] = useState(new Date())

  const passDateUpwards = (newDate) => {
    if (!date) {
      console.log('Bad date passed upwards')
      return
    }
    console.log('2) New date: ' + newDate)
    setDate(newDate)
    // console.log('3) New date: ' + date) // incorrect for some reason??
  }

  const handleMessageChange = (event) => {
    if (!event.target.value) {
      console.log('Bad message passed')
      return
    }
    setMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    const send = { date: date, notif: message }
    console.log('sending notification: ' + new Date(date) + ' -> ' + message)
    axios
      .post('http://localhost:8000/notifications', send)
      .then(() => {
        console.log('Notification sent')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Box
      sx={{
        width: '31vw',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
      }}
    >
      <DatePicker passDate={passDateUpwards} />
      <TextField
        onChange={handleMessageChange}
        sx={{ m: 3 }}
        inputProps={{ maxLength: 24 }}
        label="Your Message Here"
      />
      <Button
        onClick={(e) => handleSubmit(e)}
        sx={{ m: 3, width: '30%', alignSelf: 'center' }}
        variant="contained"
      >
        Submit
      </Button>
    </Box>
  )
}

export default NotificationSelector
