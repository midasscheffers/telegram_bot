/*const express = require('express');
const app = express()

var server = app.listen(3000);

app.use(express.static('public'));

console.log("de server is running")
*/
const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '431608141:AAEWYiY84IG-20YEY41ME1daHbo-1c87-fM' // Telegram Bot API token.
});

bot.on('/start', function (msg) {
  return bot.sendMessage(msg.from.id, "Hello world!");
});

bot.start();
