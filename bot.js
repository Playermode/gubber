const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "!";


var fortunes = [
    "Woofs in yes",
    "Woofs in no",
    "Woofs in maybe",
    "Woofs in no thats a horrible idea why did you even ask that in the first place",
    "WOOFS IN YES THATS THE BEST IDEA I HAVE HEARD IN MY LIFE",
    "Lunax says yes so I say yes",
    "Lunax says no so I say no"
]; 

client.on("message", function(message) {
  if (message.author.equals(client.user)) return;
  
  if (message.content === "gubber") {
    const gubberthegod = client.emojis.get("499405655485055004");                                 
    message.react("499405655485055004");
}     

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLocaleLowerCase()) {
    case "8ball":
      if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)])
      else message.channel.sendMessage("Please ask me an actual question");
      break;
    case "oceanman":
        message.channel.sendMessage("Barks in OCEAN MAN TAKE ME BY THE HAND LEAD ME TO THE LAND THAT YOU UNDERSTAND")
        break;
    case "gubber":
         var gubber = new Discord.RichEmbed()
             .setImage("https://i.imgur.com/ZWNrGeS.png")
         message.channel.sendEmbed(gubber);
         break;
    case "gubber2":
         var gubber2 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/499656297747185664/image0.png")
         message.channel.sendEmbed(gubber2);
         break;   
    case "gubber3":
         var gubber3 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/499656424964751370/image0.png")
         message.channel.sendEmbed(gubber3);
         break;
    case "gubber4":
         var gubber4 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/499656954143309824/unknown.png")
         message.channel.sendEmbed(gubber4);
         break;
    case "gubber5":
         var gubber5 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/499657016852348938/image0.png")
         message.channel.sendEmbed(gubber5);
         break;
    case "gubber6":
         var gubber6 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/499657253784387604/Lunax_dog_with_glasses.jpg")
         message.channel.sendEmbed(gubber6);
         break;
    case "gubber7":
         var gubber7 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/499657374093672455/image0.png")
         message.channel.sendEmbed(gubber7);
         break;
    case "gubber8":
         var gubber8 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/499657409938063370/image0.png")
         message.channel.sendEmbed(gubber8);
         break;  
    case "gubber9":
         var gubber9 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/499657443668918273/image0.png")
         message.channel.sendEmbed(gubber9);
         break;            
    case "describeozzy":
        message.channel.sendMessage("The most amazing, cutest, most gorgeous, sweetest, caring, bf in the universe")
        break;
    case "describeandrew":
        message.channel.sendMessage("AN INCREDIBLY KIND AND SWEET CUTIE THAT DESERVES EVERYTHING AMAZING AND IS THE BEST BF")
        break;                    
  }
});

client.on('ready', function() {
    client.user.setGame("Trying to prevent my owner from falling"); 
    client.user.setUsername("Gubber");
    console.log('Woof!');
});

client.on('message', message => {
    if (message.content === 'jay') {
    	message.reply('*woofs in valid*');
  	}
});

client.on('message', message => {
    if (message.content === 'Jay') {
    	message.reply('*woofs in valid*');
  	}
});

client.on('message', message => {
    if (message.content === 'amen') {
    	message.reply('*gaymen 🙏*');
  	}
});

client.on('message', message => {
    if (message.content === 'Amen') {
    	message.reply('*Gaymen 🙏*');
  	}
});

client.on('message', message => {
    if (message.content === 'gaymen') {
    	message.reply('*gaymen indeed 🙏*');
  	}
});

client.on('message', message => {
    if (message.content === 'Gaymen') {
    	message.reply('*Gaymen indeed 🙏*');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
