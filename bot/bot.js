const { Client, Intents } = require('discord.js')

const { channelID } = require('./config.json')

const { scheduleNotifications } = require('./schedule')
scheduleNotifications()

client = new Client()
client.login(process.env.TOKEN)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
  // const channel = client.channels.cache.get(channelID)
  // channel.send('hello')
})

const sendMessage = (msg) => {
  const channel = client.channels.cache.get(channelID)
  channel.send('hello again')
}

const sleep = (ms) => {
  new Promise((r) => setTimeout(r, ms)).then(sendMessage)
}

sleep(2000)

// settimeout

// get the notification data
// poll every so often to refresh -> find better way to do that
// send notification at time
