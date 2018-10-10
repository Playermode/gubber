const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "!";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'jay') {
    	message.reply('*woofs in valid*');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
