const express = require('express')
const router = express.Router()
const Notification = require('./models/Notification')

router.get('/', async (req, res) => {
    const notifs = await Notification.find()
    const filter = notifs.map((notif) => {
        return { 'date': notif.sendDate, 'message': notif.notifBody }
    })
    res.send(filter)
})

router.post('/', async (req, res) => {
    const notif = new Notification({
        sendDate: req.body.sendDate,
        notifBody: req.body.notifBody
    })
    await notif.save()
    res.send(notif)
})

module.exports = router