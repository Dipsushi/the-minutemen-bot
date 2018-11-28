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
    \n The purpose of this server is to communicate with other clan members about many different aspects of clash to strenghten our clan further and to have fun of course.
    \n Please keep the server Christian friendly and keep "it" in your pants! Happpy Clashing!
    \n \n Minutemen Informations: 
    \n \n -elder
    \n -coleader
    \n -leader
    \n -inactive
    \n \n Minutemen Honorable Mentions:
    \n \n -firstpresident
    \n -donationgod
    \n -clangamesonic
    \n -howtogetgood
    \n -taxevasion`);

    message.channel.send(embed);
  }
/** Clan Game Sonic
*/
  if(cmd === `${prefix}clangamesonic`){
    const embed = new RichEmbed()
    .setTitle("Fastest Clan Game Grinder!")
    .setColor(0x1A45EE)
    .setDescription(`PHluffy have max the clan game points the fastest during our recent clan game!
/n Can you steal PHluffy's position Or will PHluffy maintain the current position?`)
    .setImage("https://memegenerator.net/img/instances/71878629/good-job.jpg");
    
    message.channel.send(embed);
}
/** The First President
*/
  if(cmd === `${prefix}firstpresident`) {
    const embed = new RichEmbed()
    .setTitle("George Washington")
    .setColor(0xF7911D)
    .setDescription(`George Washington founded the minutemen clan in 1789 under the secret identity, Prajwal Chandrashekar.
\n Bravely fought and led the clan in the famous French and Indian war and American Revolutionary War.
\n Although no longer with us, the clan continued to thrive and left a legacy that wil be forever remembered.`)
    .setImage("https://i.imgur.com/QV9vctK.jpg);
              
    message.channel.send(embed);
}
/** Tax Evasion
*/
  if(cmd === `${prefix}taxevasion`) {
    const embed = new RichEmbed()
    .setTitle("Jack the wet noodle")
    .setColor(0xF7F01D)
    .setDescription(`There once was an uncivilized member named Jack aka. wet noodle
\n that refused to pay his taxes donation while the other clan members were doing their part. 
\n The clan tried to persuade Jack to do his civil duties . . . 
\n but in response Jack assembled a team starting the infamous Minutemen Civil War of 1861.`)
    .setImage("https://i.imgur.com/zeh6TI7.jpg");

    message.channel.send(embed);
  } 
/** Donation God
*/
  if(cmd == `${prefix}donationgod`) {
    const embed = new RichEmbed()
    .setTitle("Highest Donation Achieved!")
    .setColor(0x19BF3A)
    .setDescription(`Lelouch achieved the highest donation count during a single season!
\n Lelouch has donated +25,000 units! Can you beat Lelouch's record?`)
    .setImage("https://i.imgur.com/ctOFNMA.jpg");
    
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
/** Cody the legend
*/
 if(cmd === `${prefix}howtogetgood`){
    const embed2 = new RichEmbed()
    .setTitle("Don't be like Cody! :)")
    .setColor(0xFF0000)
    .setDescription(`There once was a warrior named Cody.
    \n He was a pimped townhall 9 roaming the champion league fighting off the townhall 10s.
    \n One day, Cody was faced with a weak, pitful townhall 8 during a clan war.
    \n Without any hesitation, he unleashed his army upon the townhall 8. . . . but 
    \n He somehow managed a 99% 2 stars. NOT 3 but a 2! And so the legend continues "Don't be like Cody! :)`)
    .setImage("https://i.imgur.com/8iMymSH.jpg");

    message.channel.send(embed2);
  
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
