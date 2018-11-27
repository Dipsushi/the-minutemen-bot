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
/** List of Commands
*/
  if (message.content === `${prefix}help`){
    const embed = new RichEmbed()
    .setTitle('The Minutemen Help Desk')
    .setColor(0xFF0000)
    .setDescription(`Once again, welcome to the Minutemen discord server!
    The purpose of this server is to communicate with other clan members about many different aspects of clash to strenghten our clan further and to have fun of course.
    Please keep the server Christian friendly and keep "it" in your pants! Happpy Clashing!
    \n \n The Minutemen Clan Information Commands
    \n \n -elder
    -coleader
    -leader
    -inactive
    -howtogetgood`);

    message.channel.send(embed);
  }
/** Elder information.
*/ 
  if(cmd === `${prefix}elder`) {
    return message.channel.send(`Elder Requirement:
    1. Be Active!
    2. Be Courteous!
    3. Donate 400 or more troops during a single season!
    4. Show proficiency in war attacks!
    5. Recieve an approval from the leaders!`);
  }
/** Coleader information
*/
  if(cmd === `${prefix}coleader`){
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
/** Leader information
*/
  if(cmd === `${prefix}leader`){
    return message.channel.send(`Leader Requirement: 
    if( you == kim yoo suk) {
      System.out.println("You are leader!");
   } else {
      System.out.println("You probably won't be leader unless kim yoo suk steps down!");
   }
    return start a rebellion;
   }`);
  }
/** Inactive information.
*/
  if(cmd === `${prefix}inactive`){
    return message.channel.send(`Inactive Policy:
If you have 19 or less victorious attacks within a seeason, you will be demoted and/or kicked!`); 
  }
/** Cody Code.
*/
 if(cmd === `${prefix}howtogetgood`){
   return message.channel.send("Don't be like cody~ :)", 
   {files: ["https://drive.google.com/file/d/1U-q5ntnoKIMT8Nu1NX-D-luDpa9S4UJi/view?usp=drivesdk"]});
 }
/** Greeting New members.
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
