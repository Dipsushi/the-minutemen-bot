const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send(`Co-Leader Requirement:
      1. Be Active!
      2. Be Courteous!
      3. Maintain the Elder status!
      4. Donate 600 or more troops every season!
      5. Earn a total of 42 wars stars from the minutemen regular clan wars.
      6. Earn a total of 30 war stars from Clan League Wars.
      7. Show leadership skills and dedication to the clan.
      8. Recieve an approval from the leaders.`);

}

module.exports.help = {
  name: "coleader"
}
