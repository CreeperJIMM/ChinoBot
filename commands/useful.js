const Discord = require("discord.js")
const fs = require('fs');
module.exports = {
    "hi":{
        description: "測試",
        fun: function(bot,message) {
            message.reply("嗨嗨!")
        }
    },
    "ping":{
        description: "ping",
        fun: async function(bot,message) {
          let time = new Date()
            if(message.author.bot) return;
          message.channel.send("pong!").then(( lastMessage) => {
            let time2 = new Date()
            let time3 = (time2.getUTCMilliseconds() - time.getUTCMilliseconds())
            if(lastMessage.content === `pong!`) {
              lastMessage.edit("pong!!").then((editmessage) => {
                let time4 = new Date();let time5 = (time4.getUTCMilliseconds() - time2.getUTCMilliseconds())
              {return message.channel.send('智乃延遲: ' + (Math.round((lastMessage.createdAt - message.createdAt)) + ' ms\n\n訊息延遲: '+ time3 +' ms\n編輯延遲: '+ time5 +" ms" ))};}
          )}})
    }},
    "date":{
        description: "日期",
        fun: function(bot,p,msg) {
            var Today=new Date();
            const TimeEmbed = new Discord.MessageEmbed()
            .setTitle("今天是" + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日  星期 " + Today.getDay(),)
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
              const emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL({format: "png", dynamic: true ,size: 2048})).setTitle(member.username +" 的頭貼")
              return  message.channel.send(emb)
          }}else{
            const member=bot.users.cache.get(ag[0])
           if(member){
              const emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL({format: "png", dynamic: true ,size: 2048})).setTitle(member.username +" 的頭貼")
              message.channel.send(emb)
          }else{
            return  message.channel.send("❌找不到這個成員" + ag)}
            console.log()
            }
          }else{
          const emb=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL({format: "png", dynamic: true ,size: 2048})).setTitle(message.author.username +" 的頭貼")
          message.channel.send(emb)
          }
        }
    },
    "savatar":{
        description: "群組大頭貼",
        fun: function(bot,message) {
          if(!message.guild) return message.channel.send("❌此指令不支援私訊!");
            const avatarEmbed = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setTitle(message.guild.name + ' 的群頭貼')
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
                  message.channel.send(`❌你沒有"提及所有人"的權限!`) }
              }else{
                  {message.channel.send("<:Transparent:751597051963506698> " + ag.join(" ") )}
                  message.delete();
            }
        }
    },
    "tts": {
        description: "機器人說話(tts)",
        fun: function(bot,message,p,hi, ...ag) {
        if(!message.guild) {
          {message.channel.send(ag.join(" ") ,{tts: true})}
        }else{
        if(message.member.hasPermission(['SEND_TTS_MESSAGES'])) {
            if(message.content.includes("@")) {
              if(message.member.hasPermission(['MENTION_EVERYONE'])) {
                {message.channel.send(ag.join(" ") ,{tts: true})}
                message.delete();
           }else{
            message.channel.send(`❌你沒有"提及所有人"的權限!`)
          }
       }else{
        {message.channel.send(ag.join(" ") ,{tts: true})}
        message.delete();
       }
      }else{
        message.channel.send(`❌你沒有"發送tts訊息"的權限!`);
        }
      }}
    },
    "feedback": {
      description: "意見箱",
      fun: function(bot,message,p,hi,...ag) {
        if(hi[0] != null) {
          let dbemd = new Discord.MessageEmbed()
          .setTitle(message.author.username + "#" + message.author.discriminator)
          .setDescription(hi.join(" "))
          .setColor(message.member.roles.highest.color)
          .setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
          .setTimestamp()
          try{
          bot.channels.cache.get("750279160743854091").send(dbemd)}
          catch{message.channel.send("❌訊息發送錯誤!")}
          message.channel.send("✅訊息已傳達!")

        }else(
          message.channel.send("❌請填入你要傳達的訊息> <")
        )
      }
    },
    "embed":{
      description: "鑲入",
      fun: function(bot,message,p,args) {
        if(args === null || args == "") {
          let myEmbed = new Discord.MessageEmbed()
          .setColor('#2d9af8')
          .setTitle("鑲入使用方法 "+p+"embed [1] [2] [3] [4] [5] ...")
          .setDescription(" (如果參數不需要請空格代替)\n參數對照表:\n[1] 標題 Title\n[2] 內文 Description\n[3] 作者 Author\n[4] 顏色代碼(#123456)\n[5] 圖片網址 Image(URL)")
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
    "chinocode":{
      description: "測試",
      fun: function(bot,message,p,ag , ...args2) {
        fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
          if(err) {return message.channel.send("❌執行指令發生錯誤! 請再打一次!")}
          var user = userInfo.toString();user = JSON.parse(user);
          let code = ["update4.2","chino hbd","repair"]
          let args = args2.join(" ")
          if(args == null || args == "") return message.channel.send("❌請填入有效代碼!")
          if(code.indexOf(args) == "-1") {return message.channel.send("❌無效代碼!")}else{
          fs.readFile('./code.json',function (err,userInfo2) {
            if(err) {return message.channel.send("❌執行指令發生錯誤! 請再打一次!!")};
            var data = userInfo2.toString();data = JSON.parse(data);
            ////////////////////////////
            if(args === "update4.2") {
              if(data.update42.indexOf(message.author.id) != "-1") return message.channel.send("❌你領取過這個代碼了!")
              message.channel.send("✅已成功兌換到此代碼獎勵!\n`100$`")
              user.money = user.money + 100
              var json = JSON.stringify(user);fs.writeFileSync('./users/'+ message.author.id +'.json',json);
              data.update42.push(message.author.id)
              var json2 = JSON.stringify(data);fs.writeFileSync('./code.json',json2);}
              if(args === "chino hbd") {
                if(data.chinohbd.indexOf(message.author.id) != "-1") return message.channel.send("❌你領取過這個代碼了!")
                message.channel.send("✅已成功兌換到此代碼獎勵!\n`500$` `Lv +2`\n記得祝智乃生日快樂唷!")
                user.money = user.money + 100
                user.rank = user.rank +2
                var json = JSON.stringify(user);fs.writeFileSync('./users/'+ message.author.id +'.json',json);
                data.chinohbd.push(message.author.id)
                var json2 = JSON.stringify(data);fs.writeFileSync('./code.json',json2);}
                if(args === "repair") {
                  if(data.repair.indexOf(message.author.id) != "-1") return message.channel.send("❌你領取過這個代碼了!")
                  message.channel.send("✅已成功兌換到此代碼獎勵!\n`100$`\n若有不便請見諒!")
                  user.money = user.money + 100
                  var json = JSON.stringify(user);fs.writeFileSync('./users/'+ message.author.id +'.json',json);
                  data.repair.push(message.author.id)
                  var json2 = JSON.stringify(data);fs.writeFileSync('./code.json',json2);}
        })}})
      }
  },
}