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
    scheduleAtTime(element.date, element.message)
  })
}

const scheduleAtTime = (time, msg) => {
  const eta_ms = new Date(time) - Date.now()
  if (eta_ms < 0) {
    console.log('Old notification: ' + time + ' -> ' + msg)
    // delete message?
  } else {
    setTimeout(() => {
      console.log(time + ': ' + msg)
    }, eta_ms)
  }
}

module.exports = { scheduleNotifications }
