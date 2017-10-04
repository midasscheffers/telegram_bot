const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '431608141:AAEWYiY84IG-20YEY41ME1daHbo-1c87-fM' // Telegram Bot API token.
});

bot.on('/start', function (msg) {
  return bot.sendMessage(msg.from.id, "Hello world!");
});

bot.on('/hoi', function (msg) {
  return bot.sendMessage(msg.from.id, "Hello");
});

bot.on('/wiebenjij', function (msg) {
  return bot.sendMessage(msg.from.id, "I'm Cheeta_bot")
});

bot.on('/foto', (msg) => {
    randnum = Math.floor(Math.random() * 2) + 1
    if (randnum == 1){
      img = ("images/cheeta-bot-marks.jpg")
    }
    if (randnum == 1){
      img = ("images/robotic-cheetah.jpg")
    }
    return bot.sendPhoto(msg.from.id, img);
});

bot.start();
