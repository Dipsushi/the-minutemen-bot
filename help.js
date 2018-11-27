const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setTitle('The Minutemen Help Desk')
    .setColor(0xFF0000)
    .setDescription(`Once again, welcome to the Minutemen discord server!
    The purpose of this server is to communicate with other clan members about many different aspects of clash to strenghten our clan further and to have fun of course.
    Please keep the server Christian friendly and keep "it" in your pants! Happpy Clashing!
    \n \n The Minutemen Clan Information Commands
    \n \n -e1der
    -coleader
    -inactive
    -howtogetgood`);

    return message.channel.send(botembed);
}

module.exports.help = {
  name: "help"
}
