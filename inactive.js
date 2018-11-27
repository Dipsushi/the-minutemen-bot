const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send(`Inactive Policy:
  If you are to have 19 or less victorious attacks per season, you are considered inactive and will be kicked.`);

}

module.exports.help = {
  name: "inactive"
}
