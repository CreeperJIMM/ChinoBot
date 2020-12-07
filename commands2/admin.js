const Discord = require("discord.js")
module.exports= {
    "clear":{
        description: "Clear message",
        fun: function(bot,message,p,args) {
          if(!message.guild) return;
          if(args[0] == null) {message.channel.send("❌Please enter number.")} else{
            if(message.member.hasPermission(['MANAGE_MESSAGES'])) {
              if(!message.member.guild.me.hasPermission(['MANAGE_MESSAGES'])) {return message.channel.send(`❌I can't delete the message ;w; Authority plz .w.`)}
                message.delete()
                message.channel.bulkDelete(args[0])
                message.channel.send(`Delete ` + args[0] + ` messages` );
          }else{
            message.channel.send(`❌You do not have "Manage Message" permission!`)
            }
        }}
    },
    "kick":{
        description: "kick member",
        fun: function(bot,message) {
          if(!message.guild) return;
            if(message.member.hasPermission(['KICK_MEMBERS'])) {
                const user = message.mentions.users.first()
                if(user) {
                  const member = message.guild.member(user);
                  if(member) {
                    member.kick(`Was kick ${member} by admin!`) .then(() => {
                        message.channel.send(`Success will ${user.tag} kick in ${message.guild.name}!`);
                    }).catch(err => {
                      message.reply(`❌I can't kick this user  ${message.guild.name} :(`)
                      console.log(err);
                    })
                  }else{
                    message.channel.send("❌Not found this user!")
                  }
                }else{
                  message.channel.send("❌You must fill in the user to be kick!")
                }
        }else{
          message.channel.send(`❌You do not have "Kick members" permission!`)}
        }
    },
    "ban":{
        description: "Ban user",
        fun: function(bot,message) {
          if(!message.guild) return;
            if(message.member.hasPermission(['BAN_MEMBERS'])) {
                const user = message.mentions.users.first()
                if(user) {
                  const member = message.guild.member(user);
                  if(member) {
                    member.ban(`Was kick ${member} By admin!`) .then(() => {
                        message.channel.send(`Success will ${user.tag} kick in ${message.guild.name} !`);
                    }).catch(err => {
                      message.reply(`❌I can't kick this user :(`)
                      console.log(err);
                    })
                  }else{
                    message.channel.send("❌Not found this user!")
                  }
                }else{
                  message.channel.send("❌You must fill in the user to be Ban!")
                }
        }else{
          message.channel.send(`❌You do not have "Ban members" permission!`)}
        }
    },
    "vote":{
        description: "vote somthing",
        fun: function(bot,message,p,args) {
          if(!message.guild) return;
            if(message.content.includes("@")) {
                if(message.member.hasPermission(['MENTION_EVERYONE'])) {
                  if(args[1] === null) {
                  let voteEmbed = new Discord.MessageEmbed()
                  .setColor('#2d9af8') .setTitle("📦VOTE!!") .setDescription(args[0]) .setFooter("Send vote author: " + message.author.username + "#" + message.author.discriminator , message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true )
                  message.channel.send(voteEmbed).then(( msg) =>{ msg.react("✅"); msg.react("❌")});
                  setTimeout(() => { message.delete();}, 1000);
                  }else{
                    message.channel.send(args[2])
                    let voteEmbed = new Discord.MessageEmbed()
                    .setColor('#2d9af8') .setTitle("📦VOTE!!") .setDescription(args[0]) .setFooter("Send vote author: " + message.author.username + "#" + message.author.discriminator , message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true )
                    message.channel.send(voteEmbed).then(( msg) =>{ msg.react("✅"); msg.react("❌")});
                    setTimeout(() => { message.delete();}, 1000);
                  }
                }else{
                  message.channel.send(`❌You You do not have "Mention Everyone" permission!`) }
              }else{
                if(args[1] === null) {
                  let voteEmbed = new Discord.MessageEmbed()
                  .setColor('#2d9af8') .setTitle("📦VOTE!!") .setDescription(args[0]) .setFooter("Send vote author: " + message.author.username + "#" + message.author.discriminator , message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true )
                  message.channel.send(voteEmbed).then(( msg) =>{ msg.react("✅"); msg.react("❌")});
                  setTimeout(() => { message.delete();}, 1000);
                }else{
                  let voteEmbed = new Discord.MessageEmbed()
                  .setColor('#2d9af8') .setTitle("📦VOTE!!") .setDescription(args[0]) .setFooter("Send vote author: " + message.author.username + "#" + message.author.discriminator , message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true )
                  message.channel.send(voteEmbed).then(( msg) =>{ msg.react("✅"); msg.react("❌")});
                  setTimeout(() => { message.delete();}, 1000);
                }
            }
        }
    },
}
