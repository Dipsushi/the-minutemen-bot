const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send(`Elder Requirement:
    1. Be Active!
    2. Be Courteous!
    3. Donate 400 or more troops during a single season!
    4. Show proficiency in war attacks!
    5. Recieve an approval from the leaders!`);

}

module.exports.help = {
  name: "elder"
}
