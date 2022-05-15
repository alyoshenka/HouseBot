import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Box from '@mui/material/Box/Box'

import NotificationSelector from '../components/NotificationSelector'
import NotificationDisplay from '../components/NotificationDisplay'

const Notifications = () => {
  const [notifications, setNotifications] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  const [shouldUpdate, setShouldUpdate] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:8000/notifications')
      .then((response) => {
        const data = response.data
        setNotifications(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log('Error @ Notification', typeof err)
        setErrors(err)
      })
    setShouldUpdate(false)
  }, [shouldUpdate])

  return (
    <Box sx={{ m: 10, display: 'flex', justifyContent: 'space-around' }}>
      <NotificationSelector update={setShouldUpdate} />
      <NotificationDisplay
        notifications={notifications}
        errors={errors}
        loading={loading}
        update={setShouldUpdate}
      />
    </Box>
  )
}

export default Notifications
