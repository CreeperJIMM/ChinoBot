const Discord = require("discord.js")
module.exports= {
    "clear":{
        description: "測試",
        fun: function(bot,message,p,args) {
          if(!message.guild) return message.channel.send("❌此指令不支援私訊!");
          if(args[0] == null) {message.channel.send("❌請填入數字")} else{
            if(message.member.hasPermission(['MANAGE_MESSAGES'])) {
            if(!message.member.guild.me.hasPermission(['MANAGE_MESSAGES'])) {return message.channel.send(`❌我不能刪除訊息;w; 權限plz .w.`)}
                message.delete()
                message.channel.bulkDelete(args[0])
                message.channel.send(`已刪除` + args[0] + `則訊息` );
          }else{
            message.channel.send(`❌你沒有"管理訊息"的權限! `)
            }
        }}
    },
    "kick":{
        description: "測試",
        fun: function(bot,message) {
          if(!message.guild) return message.channel.send("❌此指令不支援私訊!");
            if(message.member.hasPermission(['KICK_MEMBERS'])) {
                const user = message.mentions.users.first()
                if(user) {
                  const member = message.guild.member(user);
                  if(member) {
                    member.kick(`被管理員 ${member} 踢出了!`) .then(() => {
                        message.channel.send(`成功將 ${user.tag} 踢出 ${message.guild.name}!`);
                    }).catch(err => {
                      message.reply(`❌我無法將這個成員請出 ${message.guild.name} :(`)
                      console.log(err);
                    })
                  }else{
                    message.channel.send("❌找不到這個成員!")
                  }
                }else{
                  message.channel.send("❌你必須填提及要被踢出的人!")
                }
        }else{
          message.channel.send(`❌你沒有"踢出成員"的權限!`)}
        }
    },
    "ban":{
        description: "測試",
        fun: function(bot,message) {
          if(!message.guild) return message.channel.send("❌此指令不支援私訊!");
            if(message.member.hasPermission(['BAN_MEMBERS'])) {
                const user = message.mentions.users.first()
                if(user) {
                  const member = message.guild.member(user);
                  if(member) {
                    member.ban(`被管理員 ${member} 封鎖了!`) .then(() => {
                        message.channel.send(`成功將 ${user.tag} 從 ${message.guild.name} 中封鎖!`);
                    }).catch(err => {
                      message.reply(`❌我無法封鎖這個成員 :(`)
                      console.log(err);
                    })
                  }else{
                    message.channel.send("❌找不到這個成員!")
                  }
                }else{
                  message.channel.send("❌你必須填提及要被封鎖的人!")
                }
        }else{
          message.channel.send(`❌你沒有"封鎖成員"的權限!`)}
        }
    },
    "vote":{
        description: "測試",
        fun: function(bot,message,p,args) {
          if(!message.guild) return;
            if(message.content.includes("@")) {
                if(message.member.hasPermission(['MENTION_EVERYONE'])) {
                  if(args[1] === null) {
                  let voteEmbed = new Discord.MessageEmbed()
                  .setColor('#2d9af8') .setTitle("📦投票!!") .setDescription(args[0]) .setFooter("發出投票者: " + message.author.username + "#" + message.author.discriminator , message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true )
                  message.channel.send(voteEmbed).then(( msg) =>{ msg.react("✅"); msg.react("❌")});
                  setTimeout(() => { message.delete();}, 1000);
                  }else{
                    message.channel.send(args[2])
                    let voteEmbed = new Discord.MessageEmbed()
                    .setColor('#2d9af8') .setTitle("📦投票!!") .setDescription(args[0]) .setFooter("發出投票者: " + message.author.username + "#" + message.author.discriminator , message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true )
                    message.channel.send(voteEmbed).then(( msg) =>{ msg.react("✅"); msg.react("❌")});
                    setTimeout(() => { message.delete();}, 1000);
                  }
                }else{
                  message.channel.send(`❌你沒有"提及所有人"的權限!`) }
              }else{
                if(args[1] === null) {
                  let voteEmbed = new Discord.MessageEmbed()
                  .setColor('#2d9af8') .setTitle("📦投票!!") .setDescription(args[0]) .setFooter("發出投票者: " + message.author.username + "#" + message.author.discriminator , message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true )
                  message.channel.send(voteEmbed).then(( msg) =>{ msg.react("✅"); msg.react("❌")});
                  setTimeout(() => { message.delete();}, 1000);
                }else{
                  let voteEmbed = new Discord.MessageEmbed()
                  .setColor('#2d9af8') .setTitle("📦投票!!") .setDescription(args[0]) .setFooter("發出投票者: " + message.author.username + "#" + message.author.discriminator , message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true )
                  message.channel.send(voteEmbed).then(( msg) =>{ msg.react("✅"); msg.react("❌")});
                  setTimeout(() => { message.delete();}, 1000);
                }
            }
        }
    },
}
