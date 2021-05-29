// I do not recommend manually checking for commands like this.
const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('message' async(message) =>
  if(message === '!ping'){
    message.reply('Pong!');
  }
  if(message === '!ban'){
    if(!message.author.hasPermission('BAN_MEMBERS`) return;
    let user = message.mentions.first();
    user.ban();
    return:
  }
)};
