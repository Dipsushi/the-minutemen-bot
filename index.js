const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const {Client, RichEmbed} = require(`discord.js`);

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("beer pong with Barb King.");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if(cmd === `${prefix}hello`){
    return message.channel.send(`Hello!`);
  }
/** this is for greeting new members into the server
*/
  bot.on(`guildMemberAdd`, member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  const embed2 = new RichEmbed()
  .setTitle('Greetings~')
  .setColor(0x00FF00)
  .setDescription(`Welcome to the Minutemen Clan server! , ${member}, Type -help for more information.`);
  if(!channel) return;
  channel.send(embed2);
});

});

bot.login(botconfig.token);
