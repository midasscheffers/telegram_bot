const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '431608141:AAEWYiY84IG-20YEY41ME1daHbo-1c87-fM' // Telegram Bot API token.
});

bot.on('/start', (msg) => {
  return bot.sendMessage(msg.from.id, "Hello world!");
});

bot.on([/[Hh]oi/, /[Hh]ello/], (msg) => {
  return bot.sendMessage(msg.from.id, "Hello");
});

bot.on([/[Ii]'m/, /[Ii] am/], (msg) => {
  return bot.sendMessage(msg.from.id,"hoi " + msg.from.first_name + " I'm Cheeta_bot")
});

bot.on(/who are you/, (msg) => {
  return bot.sendMessage(msg.from.id, "I'm Cheeta_bot")
});

bot.on(/how are you/, (msg) => {
  return bot.sendMessage(msg.from.id, "I'm fine how are you")
});

bot.on([/I'm [good, fine]/], (msg) => {
  return bot.sendMessage(msg.from.id, "Well nice")
});

bot.on(/(.+)/, function (msg, props) {
  lastmsg = props.match[1];
  console.log(msg.from.first_name + " " + msg.from.last_name + ": " + lastmsg);
});

bot.on(/photo/, (msg) => {
    console.log("foto!!!!!!!!!!!!");
    setInterval(function(){
      randnum = Math.floor(Math.random() * 2)
      if (randnum == 0){
        img = ("images/cheetah-bot-marks.jpg")
      }
      if (randnum == 1){
        img = ("images/robotic-cheetah.jpg")
      }
      return bot.sendPhoto(msg.from.id, img);
      console.log("foto!!!!!!!!!!!!");
    }, 3600000);
});

bot.on(/.*[\.\?]$/, (msg) => {
  return bot.sendMessage(msg.from.id, "what?")
});

bot.start();
