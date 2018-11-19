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

var dadjoke = [
    "Why can’t two elephants go swimming? Because they only have one pair of trunks",
    "You are portuguese right? No I am portugoose there is only one of me",
    "You are wearing ur shoes on the wrong feet. But these are the only feet I have!"
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
    case "gubber10":
         var gubber10 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/499701965106970664/image0.png")
         message.channel.sendEmbed(gubber10);
         break;
    case "gubber11":
         var gubber11 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/514223646198333450/image0.png")
         message.channel.sendEmbed(gubber11);
         break; 
    case "gubber12":
         var gubber12 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/514223671397580800/image0.png")
         message.channel.sendEmbed(gubber12);
         break; 
    case "gubber13":
         var gubber13 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/514223691366924288/image0.jpg")
         message.channel.sendEmbed(gubber13);
         break; 
    case "gubber14":
         var gubber14 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/514223691366924288/image0.jpg")
         message.channel.sendEmbed(gubber14);
         break; 
    case "gubber15":
         var gubber15 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/514223709465346068/image0.jpg")
         message.channel.sendEmbed(gubber15);
         break; 
    case "gubber16":
         var gubber16 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/514223746140078085/image0.jpg")
         message.channel.sendEmbed(gubber16);
         break; 
    case "gubber17":
         var gubber17 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/514223761986158602/image0.jpg")
         message.channel.sendEmbed(gubber17);
         break; 
    case "gubber18":
         var gubber18 = new Discord.RichEmbed()
             .setImage("https://cdn.discordapp.com/attachments/498899341998686238/514223786111926301/image0.jpg")
         message.channel.sendEmbed(gubber18);
         break;
    case "gubber19":
      message.channel.sendMessage("https://cdn.discordapp.com/attachments/498899341998686238/514223418590363648/video.mov")
    break;           
    case "commands":
          var commands = new Discord.RichEmbed()
              .setTitle("🐶 **Commands** 🐶")
              .addField("```!gubber```", " ￼ ")
              .addField("```!oceanman```", " ￼ ")
              .addField("```!8ball```", " ￼ ")   
              .addField("```!dadjokes```", " ￼ ")            
              .addField("```List of things gubber will reply to: woof, lunax, joy, jay, ly, amen and gaymen```", " ￼ ")
              .setImage("https://cdn.discordapp.com/attachments/498899341998686238/499657253784387604/Lunax_dog_with_glasses.jpg")
              .setColor(003366)
          message.channel.sendEmbed(commands);
          break;
    case "dadjokes":
      if (args[0]) message.channel.sendMessage(dadjoke[Math.floor(Math.random() * dadjoke.length)])
      else message.channel.sendMessage("Woofs in funny");
      break;          
  }
});

client.on('ready', function() {
    client.user.setGame("trying to prevent my owner from falling");
    client.user.setUsername("Gubber"); 
    console.log('woof');
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

client.on('message', message => {
    if (message.content === 'd') {
    	message.reply('**NO D**');
  	}
});

client.on('message', message => {
    if (message.content === 'D') {
    	message.reply('**NO D**');
  	}
});

client.on('message', message => {
    if (message.content === 'Woof') {
    	message.reply('**Woofs in hey thats my line 😔**');
  	}
});

client.on('message', message => {
    if (message.content === 'woof') {
    	message.reply('**woofs in hey thats my line 😔**');
  	}
});

client.on('message', message => {
    if (message.content === 'WOOF') {
    	message.reply('**WOOFS IN HEY THATS MY LINE 😔**');
  	}
});

client.on('message', message => {
    if (message.content === 'joy') {
    	message.reply('Joey to Joy!');
  	}
});

client.on('message', message => {
    if (message.content === 'Joy') {
    	message.reply('Joey to Joy!');
  	}
});

client.on('message', message => {
    if (message.content === 'lunax') {
    	message.reply('Tragic shes gonna fall');
  	}
});

client.on('message', message => {
    if (message.content === 'Lunax') {
    	message.reply('Tragic shes gonna fall');
  	}
});

client.on('message', message => {
    if (message.content === 'Sky') {
    	message.reply('shut up joafy');
  	}
});

client.on('message', message => {
    if (message.content === 'sky') {
    	message.reply('shut up joafy');
  	}
});

client.on('message', message => {
    if (message.content === 'ly') {
    	message.reply('woofs in dw ily2 ❤');
  	}
});

client.on('message', message => {
    if (message.content === 'Ly') {
    	message.reply('woofs in dw ily2 ❤');
  	}
});

client.on('message', message => {
    if (message.content === 'LY') {
    	message.reply('WOOFS IN ILY2!!! ❤❤❤');
  	}
});

client.on('message', message => {
    if (message.content === 'ly gubber') {
    	message.reply('woofs in ily2!!! ❤❤❤');
  	}
});

client.on('message', message => {
    if (message.content === 'Ly gubber') {
    	message.reply('woofs in ily2!!! ❤❤❤');
  	}
});

client.on('message', message => {
    if (message.content === 'LY gubber') {
    	message.reply('woofs in ily2!!! ❤❤❤');
  	}
});

client.on('message', message => {
    if (message.content === 'Ly Gubber') {
    	message.reply('woofs in ily2!!! ❤❤❤');
  	}
});

client.on('message', message => {
    if (message.content === 'LY GUBBER') {
    	message.reply('WOOFS IN ILY2!!! ❤❤❤');
  	}
});

client.on('message', message => {
    if (message.content === 'lY gubber') {
    	message.reply('woofs in ily2!!! ❤❤❤');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
