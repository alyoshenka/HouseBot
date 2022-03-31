const { Client, Intents } = require("discord.js");

const { token } = require("./auth.json");
const { channelID } = require("./config.json");

const { getData } = require("./data");

const data = getData();

client = new Client();
client.login(token);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  const channel = client.channels.cache.get(channelID);
  channel.send("hello");
});

const sendMessage = () => {
  const channel = client.channels.cache.get(channelID);
  channel.send("hello again");
};

const sleep = (ms) => {
  new Promise((r) => setTimeout(r, ms)).then(sendMessage);
};

sleep(2000);

// settimeout

// get the notification data
// poll every so often to refresh -> find better way to do that
// send notification at time
