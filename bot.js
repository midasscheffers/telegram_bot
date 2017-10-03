const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '431608141:AAEWYiY84IG-20YEY41ME1daHbo-1c87-fM' // Telegram Bot API token.
});

bot.on('/start', function (msg) {
  return bot.sendMessage(msg.from.id, "Hello world!");
});

bot.start();
