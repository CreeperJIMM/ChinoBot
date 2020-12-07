const Discord = require("discord.js")
const fs = require('fs');
module.exports = {
    "hi":{
        description: "測試",
        fun: function(bot,message) {
            message.reply("Hi!")
        }
    },
    "ping":{
        description: "ping",
        fun: function(bot,message) {
            if(message.author.bot) return;
          message.channel.send("pong!").then(( lastMessage) => {
            if(lastMessage.content === `pong!`) {
              {return message.channel.send('Chino ping: ' + (Math.round((lastMessage.createdAt - message.createdTimestamp)) + ' ms' ))};}
        })
    }},
    "date":{
        description: "日期",
        fun: function(bot,msg) {
            var Today=new Date();
            const TimeEmbed = new Discord.MessageEmbed()
            .setTitle("Today is" + Today.getFullYear()+ " Y " + (Today.getMonth()+1) + " M " + Today.getDate() + " D  Week " + Today.getDay(),)
            .addField("時間" , Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds() + ":" + Today.getMilliseconds(),)
            {msg.channel.send(TimeEmbed)};
          
        }
    },
    "avatar":{
        description: "大頭貼",
        fun: function(bot, message,p ,ag) {
            if(ag[0] != null) {
            if(message.mentions.users.size){
                let member=message.mentions.users.first()
            if(member){
              const emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL({format: "png", dynamic: true ,size: 2048})).setTitle(member.username +" 's avatar")
              return  message.channel.send(emb)
          }}else{
            const member=bot.users.cache.get(ag[0])
           if(member){
              const emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL({format: "png", dynamic: true ,size: 2048})).setTitle(member.username +" 's avatar")
              message.channel.send(emb)
          }else{
            return  message.channel.send("❌Not found this user." + ag)}
            console.log()
            }
          }else{
          const emb=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL({format: "png", dynamic: true ,size: 2048})).setTitle(message.author.username +" 's avatar")
          message.channel.send(emb)
          }
        }
    },
    "savatar":{
        description: "群組大頭貼",
        fun: function(bot,message) {
          if(!message.guild) return;
            const avatarEmbed = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setTitle(message.guild.name + " 's server avatar")
            .setImage(message.guild.iconURL({ format: "png", dynamic: true ,size: 2048}));
            {message.channel.send(avatarEmbed)};
          
        }
    },
    "say": {
        description: "機器人說話",
        fun: function(bot,message,p,hi, ...ag) {
            if(message.content.includes("@")) {
                if(message.member.hasPermission(['MENTION_EVERYONE'])) {
                  {message.channel.send("<:Transparent:751597051963506698> " + ag.join(" ") )}
                  message.delete();
                }else{
                  message.channel.send(`❌You You do not have "Mention Everyone" permission!`) }
              }else{
                  {message.channel.send("<:Transparent:751597051963506698> " + ag.join(" ") )}
                  message.delete();
            }
        }
    },
    "tts": {
        description: "機器人說話(tts)",
        fun: function(bot,message,p,hi,...ag) {
        if(message.member.hasPermission(['SEND_TTS_MESSAGES'])) {
            if(message.content.includes("@")) {
              if(message.member.hasPermission(['MENTION_EVERYONE'])) {
                {message.channel.send(ag.join(" ") ,{tts: true})}
                message.delete();
           }else{
            message.channel.send(`❌You You do not have "Mention Everyone" permission!`)
          }
       }else{
        {message.channel.send(ag.join(" ") ,{tts: true})}
        message.delete();
       }
      }else{
        message.channel.send(`❌You You do not have "Send TTS" permission!`);
        }
      }
    },
    "feedback": {
      description: "意見箱",
      fun: function(bot,message,p,hi, ...ag) {
        if(hi[0] != null) {
          let dbemd = new Discord.MessageEmbed()
          .setTitle(message.author.username + "#" + message.author.discriminator)
          .setDescription(ag.join(" "))
          .setColor(message.member.roles.highest.color)
          .setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
          .setTimestamp()
          try{
          bot.channels.cache.get("750279160743854091").send(dbemd)}
          catch{message.channel.send("❌Message send Error!")}
          message.channel.send("✅Message send!")

        }else(
          message.channel.send("❌Please fill in message > <")
        )
      }
    },
    "embed":{
      description: "鑲入",
      fun: function(bot,message,p,args) {
        if(args === null || args == "") {
          let myEmbed = new Discord.MessageEmbed()
          .setColor('#2d9af8')
          .setTitle("Embed help: "+p+"embed [1] [2] [3] [4] [5] ...")
          .setDescription(" (if some value don't use\nPlease Space it)\n參數對照表:\n[1] 標題 Title\n[2] 內文 Description\n[3] 作者 Author\n[4] 顏色代碼(#123456)\n[5] 圖片網址 Image(URL)")
          {message.channel.send(myEmbed)};
        }else{
          let myEmbed2 = new Discord.MessageEmbed()
          try {
          if(args[0] != null) myEmbed2.setTitle(args[0])
        } catch (error) {return message.channel.send("❌執行發生錯誤! "+error)}
        try{
          if(args[1] != null) myEmbed2.setDescription(args[1])
        } catch (error) {return message.channel.send("❌執行發生錯誤! "+error)}
        try{
          if(args[2] != null) myEmbed2.setAuthor(args[2])
        } catch (error) {return message.channel.send("❌執行發生錯誤! "+error)}
          if(args[4] != null) myEmbed2.setImage(args[4])
          try{
          if(args[3] != null) myEmbed2.setColor(args[3])
          myEmbed2.setTimestamp()
        } catch (error) {return message.channel.send("❌執行發生錯誤! "+error)}
          {message.channel.send(myEmbed2)};
        }
      }
    },
}