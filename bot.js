const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '431608141:AAEWYiY84IG-20YEY41ME1daHbo-1c87-fM' // Telegram Bot API token.
});


bot.on('/start', (msg) => {
  bot.sendPhoto(msg.from.id, "images/hoi_cheetah.jpeg");
  return bot.sendMessage(msg.from.id, "Hello world!");
});

bot.on([/^[Hh][AaOo]*[Ii]/, /[Hh]ello/], (msg) => {
  bot.sendPhoto(msg.from.id, "images/hoi_cheetah.jpeg");
  return bot.sendMessage(msg.from.id, "Hello");
});

bot.on('sticker', (msg) => {
  bot.sendPhoto(msg.from.id, "images/haha_cheetah.jpeg");
});

bot.on([/[Ii]'m/, /[Ii] am/], (msg) => {
  img = ("images/deb_cheetah.jpeg");
  bot.sendPhoto(msg.from.id, img);
  return bot.sendMessage(msg.from.id,"hoi " + msg.from.first_name + " I'm Cheeta_bot");
});

bot.on(/[wW]ho are you/, (msg) => {
  return bot.sendMessage(msg.from.id, "I'm Cheeta_bot");
});

bot.on(/[Hh]ow are you/, (msg) => {
  return bot.sendMessage(msg.from.id, "I'm fine how are you");
});

bot.on([/[Ii]'?m [good, fine] .+?/], (msg) => {
  return bot.sendMessage(msg.from.id, "Well nice");
});


bot.on(/photo/, (msg) => {
    console.log("foto!!!!!!!!!!!!");
    randnum = Math.floor(Math.random() * 2)
    if (randnum == 0){
      img = ("images/cheetah-bot-marks.jpg");
    }
    if (randnum == 1){
      img = ("images/robotic-cheetah.jpg");
    }
    return bot.sendPhoto(msg.from.id, img);
});

bot.on(/.*[\.\?]$/, (msg) => {
  return bot.sendMessage(msg.from.id, "what?")
});

bot.on(/(.+)/, function (msg, props) {
  lastmsg = props.match[1];
  console.log(msg.from.first_name + " " + msg.from.last_name + ": " + lastmsg);
});

bot.start();
