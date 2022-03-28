const mongoose = require('mongoose')

const notification = mongoose.Schema({
    sendDate: Date,
    notifBody: String
})

module.exports = mongoose.model('Notification', notification)