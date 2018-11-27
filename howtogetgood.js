const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   return message.channel.send(`Don't be like cody! :)`);

}

module.exports.help = {
  name: "howtogetgood"
}
