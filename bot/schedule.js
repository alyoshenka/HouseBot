const axios = require('axios')

const scheduleNotifications = () => {
  axios
    .get('http://localhost:8000/notifications')
    .then((response) => {
      const data = setTimeouts(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

const setTimeouts = (data) => {
  if (!data) {
    console.log('No data provided')
    return
  }

  data.map((element) => {
    scheduleAtTime(element.date, element.message, element.id)
  })
}

const scheduleAtTime = (time, msg, id) => {
  const eta_ms = new Date(time) - Date.now()
  if (eta_ms < 0) {
    deleteNotification(id)
  } else {
    setTimeout(() => {
      console.log(time + ': ' + msg)
    }, eta_ms)
  }
}

const deleteNotification = (id) => {
  axios
    .delete('http://localhost:8000/notifications/', { params: { _id: id } })
    .then(console.log('An old request was found, and deleted'))
    .catch((err) => {
      console.log(err)
    })
}

module.exports = { scheduleNotifications }
