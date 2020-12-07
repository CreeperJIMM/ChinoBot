const Discord = require("discord.js")
let fs =require("fs");
const { join } = require("path");
const { url } = require("inspector");
const e = require("express");
let code = new Set();
module.exports= {
    "setup":{
        description: "設置",
        fun: function(bot,message,a,args, nubmer, ...text) {
          if(!message.guild) return message.channel.send("❌請在伺服器使用此指令!")
            if(args[0] == "text") {
                text2(bot,message)
            }else if(args[0] == "voice") {
                voice(bot,message)
            }else if(args[0] == "join") {
                Join(bot,message,args, nubmer, ...text)
            }else if(args[0] == "leave") {
                leave(bot,message,args, nubmer, ...text)
            }else if(args[0] == "rank") {
                rank(bot,message,args, nubmer, ...text)
            }else if(args[0] == "language") {
                lang(bot,message,args, nubmer, ...text)
            }else if(args[0] == "lang") {
                lang(bot,message,args, nubmer, ...text)
            }else if(args[0] == "normal") {
                nor(bot,message,args, nubmer, ...text)
            }else if(args[0] == "help") {
                let sethelpEmbed = new Discord.MessageEmbed()
                .setTitle("Setup 使用說明")
                if(message.guild.members.cache.get("651095740390834176")) {sethelpEmbed.setDescription("❌本伺服器擁有防炸機器人 <@651095740390834176> \n請將本機器人加入白名單後使用以下指令!\n→ 使用 `s!whitelist add @智乃小幫手#5407` 加入白名單.")}
                sethelpEmbed.addField("setup [參數]","`setup` - 新增新json資料\n`setup text` - 新增動態文字類別\n`setup voice` - 新增動態語音類別\n`setup join [訊息]` 加入設置\n`setup leave [訊息]` 離開設置")
                sethelpEmbed.addField("幫助指令:" , "`cr!text help` 動態文字教學 \n`cr!voice help` 動態語音教學\n`cr!join help` 加入訊息設置教學\n`cr!leave help` 離開訊息設置教學\n`cr!rank help` 升級訊息設置教學")
                sethelpEmbed.addField("其他設定","`cr!setup language [zh_TW/en_US]` 伺服器語言設定\n`cr!setup normal [1/2]` 切換常用機器人1/2 (例如經驗值的給予)")
                message.channel.send(sethelpEmbed);
            }else{
              if(!message.guild) return message.channel.send("❌你必須在伺服器使用指令！")
                fs.readFile('./guild/'+ message.guild.id +'.json',function (err) {
                    if(err) {
                      message.channel.send("🔁創建新json檔案中...")
                      var obj = {
                        name: [message.guild.name],
                        language: {},
                        snipe: [],
                        snipeid: {},
                        snipefile: {},
                        snipetime: {},
                        rank: {},
                        rank2: [],
                        join: {},
                        join2: [],
                        leave: {},
                        leave2: [],
                        text: [],
                        voice: [],
                        text2: [],
                        voice2: [],
                        kill: []
                      };
                     var json = JSON.stringify(obj);
                     message.channel.send("✅已設置基本資料!  如果需要創動態頻道&語音請打 `cr!setup help` 查看說明.")
                      fs.writeFileSync('./guild/'+ message.guild.id +'.json',json);
                    }else{message.channel.send("你已經設置過了!  請打`cr!setup help` 查看更多設置方法!")}
                })
            }
        }
    },
    "text":{
        description: "測試",
        fun: function(bot,message,a,args) {
            if(args[0] == "help") {
                let textEmbed = new Discord.MessageEmbed()
                .setTitle("甚麼是動態文字?")
                .setDescription("動態文字可以解決想創頻道一個頻道之後要刪除的煩惱\n有自己的文字頻道看起來很棒對吧?\n使用`cr!setup text` 設置!")
                .setImage('https://cdn.discordapp.com/attachments/611040945495998464/746265308083519488/a59e501bd38b6299.gif')
                message.channel.send(textEmbed);
            }
        }
    },
    "voice":{
        description: "測試",
        fun: function(bot,message,a,args) {
            if(args[0] == "help") {
                let voiceEmbed = new Discord.MessageEmbed()
                .setTitle("甚麼是動態語音?")
                .setDescription("動態語音可以創語音同樂!\n有自己的語音頻道看起來很棒對吧?\n使用`cr!setup voice` 設置!")
                .setImage('https://cdn.discordapp.com/attachments/611040945495998464/746265305042387074/1bca1519d1f116e3.gif')
                message.channel.send(voiceEmbed);
            }
        }
    },
    "join":{
      description: "測試",
      fun: function(bot,message,a,args) {
          if(args[0] == "help") {
              let voiceEmbed = new Discord.MessageEmbed()
              .setTitle("加入訊息設置")
              .setDescription("使用 `cr!setup join [訊息]`\n◆想關掉只要不填入訊息即可\n在訊息裡面加上以下東西可以增加參數:\n- `{user}` 及提用戶\n- `{server}` 伺服器名稱\n- `{member}` 伺服器總人數")
              message.channel.send(voiceEmbed);
          }
      }
  },
  "leave":{
    description: "測試",
    fun: function(bot,message,a,args) {
        if(args[0] == "help") {
            let voiceEmbed = new Discord.MessageEmbed()
            .setTitle("離開訊息設置")
            .setDescription("使用 `cr!setup leave [訊息]`\n◆想關掉只要不填入訊息即可\n在訊息裡面加上以下東西可以增加參數:\n- `{user}` 及提用戶\n- `{server}` 伺服器名稱\n- `{member}` 伺服器總人數")
            message.channel.send(voiceEmbed);
            }
        }
    },
    "ind":{
        description: "測試",
        fun: function(bot,message) {
          if(!message.guild) return message.channel.send("❌請在伺服器裡使用此指令!")
            if(!code.has(message.author.id)) {message.channel.send("❌你沒有通過驗證! 請打 `cr!code` 來獲取驗證再使用此指令.")}else{
            fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(err) {
                  message.channel.send("❌你還沒有設置設定!! 使用`cr!setup`") }else{
                if(user.text2.indexOf(message.channel.id) != "-1") {
                  message.channel.send("🔁創建中")
                let name = message.author.username;
                let gid = message.channel.parentID
                message.channel.clone({name: name + " 的頻道"} , {type: 'text'}, {reason: '請使用 cr!clo 關閉' })
                .then(Channel => {
                  code.delete(message.author.id)
                  Channel.setParent(gid , { lockPermissions: true })
                  let id = Channel.id
                  setTimeout(() => {
                    Channel.createOverwrite(message.guild.me ,{
                      SEND_MESSAGES: true,
                      MANAGE_CHANNELS: true,
                      VIEW_CHANNEL: true})
                    Channel.createOverwrite(message.author, {
                        SEND_MESSAGES: true,
                        MANAGE_CHANNELS: true,
                        VIEW_CHANNEL: true})}, 2000);
                  message.channel.send("✅你已經創了個人頻道! <#"+ id + ">")
                  Channel.send("<@" + message.author.id + "> 這裡是你的個人頻道! 請使用`cr!clo` 關閉!\n\n你可以使用以下參數! `cr!set [參數]`\n- `name [名稱]` 重新命名頻道\n- `self / open` 設置讀取權限\n- `nsfw` 設置為限制級頻道")
                  user.text.push(Channel.id)
                  var str = JSON.stringify(user);
                  fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
                if(err) { message.channel.send("❌創建失敗!")}
        })}else{message.channel.send("❌你還沒設置動態文字頻道!")}}});
        }}
    },
    "clo":{
        description: "測試",
        fun: function(bot,message) {
          if(!message.guild) return message.channel.send("❌請在伺服器裡使用此指令!")
          if(!message.guild.me.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send("❌我沒有權限可以執行指令!")
          if(!message.member.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send("❌你不是這頻道的擁有者!")
            fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
                if(err) {
                  message.channel.send("❌你還沒有設置設定!! 使用`cr!setup`")
                }else{
                  var user = userInfo.toString();
                  user = JSON.parse(user);
                  if(user.text.indexOf(message.channel.id) != "-1") {message.channel.send("🔁正在關閉個人頻道...")
                  setTimeout(function(){ message.channel.delete() } ,1200);
                  var array = user.text
                  var index = array.indexOf(message.channel.id)
                  if (index> -1) {array.splice(index, 1);}
                  var str = JSON.stringify(user);
                  fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
                }else{
                    message.channel.send("❌此頻道不是個人頻道！")
                  }
            }
        })}
    },
    "set":{
      description: "測試",
      fun: function(bot,message,a,args,number , ...text) {
        if(!message.guild) return message.channel.send("❌請在伺服器裡使用此指令!")
          fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
            var user = userInfo.toString();
            user = JSON.parse(user);
                if(user.text.indexOf(message.channel.id) != "-1") {
                  if(!message.guild.me.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send("❌我沒有權限可以執行指令!")
                  if(!message.member.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send("❌你不是這頻道的擁有者!")
                  if(args[0] == "name") {
                    message.channel.setName(text.join(" ")).then(() => {
                    message.channel.send("✅已將頻道命名為 "+ text.join(" "))}).catch("❌命名失敗!")
                  }else if(args[0] == "self") {
                    if(!message.member.guild.me.hasPermission(['MANAGE_ROLES'])) {return message.channel.send(`❌請給予智乃小幫手"管理身分組"權限!`)}
                    message.channel.createOverwrite(message.author, {
                      SEND_MESSAGES: true,
                      MANAGE_CHANNELS: true,
                      VIEW_CHANNEL: true})
                      message.channel.createOverwrite(message.guild.me ,{
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true})
                    message.channel.createOverwrite(message.guild.roles.everyone ,{
                      SEND_MESSAGES: false,
                      VIEW_CHANNEL: false})
                    message.channel.send("✅已設置為私人頻道!")
                  }else if(args[0] == "open") {
                    if(!message.member.guild.me.hasPermission(['MANAGE_ROLES'])) {return message.channel.send(`❌請給予智乃小幫手"管理身分組"權限!`)}
                    message.channel.createOverwrite(message.author, {
                      SEND_MESSAGES: null,
                      MANAGE_CHANNELS: true,
                      VIEW_CHANNEL: null})
                    message.channel.createOverwrite(message.guild.roles.everyone ,{
                      SEND_MESSAGES: null,
                      VIEW_CHANNEL: null})
                      message.channel.createOverwrite(message.guild.me ,{
                        SEND_MESSAGES: null,
                        VIEW_CHANNEL: null})
                    message.channel.send("✅已設置為公開頻道!")
                  }else if(args[0] == "nsfw") {
                    if(!message.channel.nsfw) {message.channel.setNSFW(true,"動態權限設置")}else{message.channel.setNSFW(false,"動態權限設置")}
                    message.channel.send("✅已設置!")
                  }else{message.channel.send("請填入以下參數! `cr!set [參數]`\n- `name [名稱]` 重新命名頻道\n- `self / open` 設置讀取權限\n- `nsfw` 設置為限制級頻道")}
              }else{
                  message.channel.send("❌此頻道不是個人頻道！")
                }
      })}
  },
    "code":{
        description: "測試",
        fun: function(bot,message) {
            fs.readFile('./data.json',function (err, userInfo) {
                if(err) {return message.channel.send("❌嘗試生成發生錯誤!");}
                var user = userInfo.toString();
                user = JSON.parse(user);
                user.code = "CR" + Math.round(Math.random()*10) + Math.round(Math.random()*10) + Math.round(Math.random()*10) + Math.round(Math.random()*10)
              let codeEmbed = new Discord.MessageEmbed()
              .setColor('#2d9af8') .setTitle("請打 `cr!get [驗證碼]` 來獲取驗證") .setDescription(user.code)
              message.channel.send(codeEmbed)
              var str = JSON.stringify(user);
              fs.writeFileSync('./data.json', str )
            })
        }
    },
    "get":{
        description: "測試",
        fun: function(bot,message,a,args) {
            fs.readFile('./data.json',function (err, userInfo) {
                if(err) {return message.channel.send("❌嘗試讀取發生錯誤!");}
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(user.code.indexOf(args[0]) != "-1") {
                user.code = "CR" + Math.round(Math.random()*10) + Math.round(Math.random()*10) + Math.round(Math.random()*10) + Math.round(Math.random()*10)
              let codeEmbed = new Discord.MessageEmbed()
              .setColor('#2d9af8') .setTitle("✅你已通過驗證! 你可以打一些需要驗證的指令了!") .setDescription("備註: 每使用一次就需要再驗證一次")
              message.channel.bulkDelete(3)
              message.channel.send(codeEmbed)
              code.add(message.author.id);
              var str = JSON.stringify(user);
              fs.writeFileSync('./data.json', str );
      }else{
       message.channel.send("❌驗證碼錯誤!")
        }})}
    },
    "snipes":{
      description: "最後訊息",
      fun: function(bot,message,args) {
        if(!message.guild) return message.channel.send("❌此指令不支援私訊!");
        if(!message.member.hasPermission(['MENTION_EVERYONE'])) if(message.author.id == '546144403958398988') {}else{return message.channel.send("❌你沒有足夠的權限去察看這個.")}
        fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
          if(err) {return message.channel.send("❌此伺服器不支援最後訊息")}
          var user = userInfo.toString();
          user = JSON.parse(user);
          var text = JSON.stringify(user.snipe);var text2 = text.toString();text2 = JSON.parse(text2);
          var textid = JSON.stringify(user.snipeid);var textid2 = textid.toString();textid2 = JSON.parse(textid2);
          var texttime = JSON.stringify(user.snipetime);var texttime2 = texttime.toString();texttime2 = JSON.parse(texttime2);
          var textfile = JSON.stringify(user.snipefile);var textfile2 = textfile.toString();textfile2 = JSON.parse(textfile2);
          if(text2.t1 == "[object Object]" || text2.t1 == "") return message.channel.send("❌找不到本伺服器的最後訊息!")
          const member=bot.users.cache.get(textid2.t1)
          const member2=bot.users.cache.get(textid2.t2)
          const member3=bot.users.cache.get(textid2.t3)
          const member4=bot.users.cache.get(textid2.t4)
          const member5=bot.users.cache.get(textid2.t5)
          const member6=bot.users.cache.get(textid2.t6)
          const member7=bot.users.cache.get(textid2.t7)
          const member8=bot.users.cache.get(textid2.t8)
          const member9=bot.users.cache.get(textid2.t9)
          const member10=bot.users.cache.get(textid2.t10)
          if(member) {
            let snipe = new Discord.MessageEmbed()
            .setColor(message.member.roles.highest.color)
            .setAuthor(member.username + "#" + member.discriminator, member.displayAvatarURL({format: "webp", dynamic: true ,size: 512}))
            .setFooter(texttime2.t1)
           var file = JSON.stringify(textfile2.t1)
           var file2 = file.toString()
           file2 = JSON.parse(file2);
             if(file2.file != "無") snipe.setImage(file2.file)
              snipe.setDescription(text2.t1)
              if(member2) {snipe.addField("最後前2則刪除訊息" +" - " + member2.username + "#" + member2.discriminator, text2.t2 +"\n"+texttime2.t2)}
              if(member3) {snipe.addField("最後前3則刪除訊息" +" - " + member3.username + "#" + member3.discriminator, text2.t3+"\n"+texttime2.t3)}
              if(member4) {snipe.addField("最後前4則刪除訊息" +" - "+ member4.username + "#" + member4.discriminator, text2.t4+"\n"+texttime2.t4)}
              if(member5) {snipe.addField("最後前5則刪除訊息" +" - "+ member5.username + "#" + member5.discriminator, text2.t5+"\n"+texttime2.t5)}
              if(member6) {snipe.addField("最後前6則刪除訊息" +" - "+ member6.username + "#" + member6.discriminator, text2.t6+"\n"+texttime2.t6)}
              if(member7) {snipe.addField("最後前7則刪除訊息" +" - "+ member7.username + "#" + member7.discriminator, text2.t7+"\n"+texttime2.t7)}
              if(member8) {snipe.addField("最後前8則刪除訊息" +" - "+ member8.username + "#" + member8.discriminator, text2.t8+"\n"+texttime2.t8)}
              if(member9) {snipe.addField("最後前9則刪除訊息" +" - "+ member9.username + "#" + member9.discriminator, text2.t9+"\n"+texttime2.t9)}
              if(member10) {snipe.addField("最後前10則刪除訊息" +" - "+ member10.username + "#" + member10.discriminator, text2.t10+"\n"+texttime2.t10)}
              if(file2.file != "無") {
                snipe.addField("\n\n📎最後前1則刪除附件 \n", `[${file2.name}](${file2.file})`)}
            message.channel.send(snipe)}})
      }
    },
    "snipe":{
      description: "最後訊息",
      fun: function(bot,message,a,args) {
        if(!message.guild) return message.channel.send("❌此指令不支援私訊!");
        if(args[0] == " " || args[0] == null) {
          fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
            if(err) {return message.channel.send("❌此伺服器不支援最後訊息")}
            var user = userInfo.toString();
            user = JSON.parse(user);
            var text = JSON.stringify(user.snipe);var text2 = text.toString();text2 = JSON.parse(text2);
            var textid = JSON.stringify(user.snipeid);var textid2 = textid.toString();textid2 = JSON.parse(textid2);
            var texttime = JSON.stringify(user.snipetime);var texttime2 = texttime.toString();texttime2 = JSON.parse(texttime2);
            var textfile = JSON.stringify(user.snipefile);var textfile2 = textfile.toString();textfile2 = JSON.parse(textfile2);
            if(text2.t1 == "[object Object]" || text2.t1 == "") return message.channel.send("❌找不到本伺服器的最後訊息!")
            const member=bot.users.cache.get(textid2.t1)
            if(member) {
              let snipe = new Discord.MessageEmbed()
              .setColor(message.member.roles.highest.color)
              .setAuthor(member.username + "#" + member.discriminator, member.displayAvatarURL({format: "webp", dynamic: true ,size: 512}))
              .setFooter(texttime2.t1)
             var file = JSON.stringify(textfile2.t1)
             var file2 = file.toString()
             file2 = JSON.parse(file2);
               if(file2.file != "無") snipe.setImage(file2.file)
                snipe.setDescription(text2.t1)
                if(file2.file != "無") {
                  snipe.addField("\n📎附件 \n", `[${file2.name}](${file2.file})`)}
              message.channel.send(snipe)}})
          }else{
          if(isNaN(args[0]) === true) {return message.channel.send("❌請填入數字")}
          if(args[0] > 10) {return message.channel.send("❌請小於10")}
          fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
            if(err) {return message.channel.send("❌此伺服器不支援最後訊息")}
            var user = userInfo.toString();
            user = JSON.parse(user);
            var text = JSON.stringify(user.snipe);var text2 = text.toString();text2 = JSON.parse(text2);
            var textid = JSON.stringify(user.snipeid);var textid2 = textid.toString();textid2 = JSON.parse(textid2);
            var texttime = JSON.stringify(user.snipetime);var texttime2 = texttime.toString();texttime2 = JSON.parse(texttime2);
            var textfile = JSON.stringify(user.snipefile);var textfile2 = textfile.toString();textfile2 = JSON.parse(textfile2);
            if(args[0] == "1") {var text0 = text2.t1}else if(args[0] == "2") {var text0 = text2.t2}else if(args[0] == "3") {var text0 = text2.t3}else if(args[0] == "4") {var text0 = text2.t4}else if(args[0] == "5") {var text0 = text2.t5}else if(args[0] == "6") {var text0 = text2.t6}else if(args[0] == "7") {var text0 = text2.t7}else if(args[0] == "8") {var text0 = text2.t8}else if(args[0] == "9") {var text0 = text2.t9}else if(args[0] == "10") {var text0 = text2.t10}      
            if(args[0] == "1") {var text1 = textid2.t1}else if(args[0] == "2") {var text1 = textid2.t2}else if(args[0] == "3") {var text1 = textid2.t3}else if(args[0] == "4") {var text1 = textid2.t4}else if(args[0] == "5") {var text1 = textid2.t5}else if(args[0] == "6") {var text1 = textid2.t6}else if(args[0] == "7") {var text1 = textid2.t7}else if(args[0] == "8") {var text1 = textid2.t8}else if(args[0] == "9") {var text1 = textid2.t9}else if(args[0] == "10") {var text1 = textid2.t10} 
            if(args[0] == "1") {var text22 = texttime2.t1}else if(args[0] == "2") {var text22 = texttime2.t2}else if(args[0] == "3") {var text22 = texttime2.t3}else if(args[0] == "4") {var text22 = texttime2.t4}else if(args[0] == "5") {var text22 = texttime2.t5}else if(args[0] == "6") {var text22 = texttime2.t6}else if(args[0] == "7") {var text22 = texttime2.t7}else if(args[0] == "8") {var text22 = texttime2.t8}else if(args[0] == "9") {var text22 = texttime2.t9}else if(args[0] == "10") {var text22 = texttime2.t10} 
            if(args[0] == "1") {var text3 = textfile2.t1}else if(args[0] == "2") {var text3 = textfile2.t2}else if(args[0] == "3") {var text3 = textfile2.t3}else if(args[0] == "4") {var text3 = textfile2.t4}else if(args[0] == "5") {var text3 = textfile2.t5}else if(args[0] == "6") {var text3 = textfile2.t6}else if(args[0] == "7") {var text3 = textfile2.t7}else if(args[0] == "8") {var text3 = textfile2.t8}else if(args[0] == "9") {var text3 = textfile2.t9}else if(args[0] == "10") {var text3 = textfile2.t10}
            if(text0 == "[object Object]" || text0 == " " || text0 == null) return message.channel.send("❌找不到最後第" +args[0]+"則訊息!")
            if(text1 == "[object Object]" || text1 == " "|| text1 == null) return message.channel.send("❌找不到最後第" +args[0]+"則訊息!")
            if(text22 == "[object Object]" || text22 == " "|| text22 == null) return message.channel.send("❌找不到最後第" +args[0]+"則訊息!")
            const member=bot.users.cache.get(text1)
            if(member) {
              let snipe = new Discord.MessageEmbed()
              .setColor(message.member.roles.highest.color)
              .setAuthor(member.username + "#" + member.discriminator, member.displayAvatarURL({format: "webp", dynamic: true ,size: 512}))
              .setFooter(text22)
             var file = JSON.stringify(text3)
             var file2 = file.toString()
             file2 = JSON.parse(file2);
               if(file2.file != "無") snipe.setImage(file2.file)
                snipe.setDescription(text0)
                if(file2.file != "無") {
                  snipe.addField("\n📎附件 \n", `[${file2.name}](${file2.file})`)}
              message.channel.send(snipe)
            }})}
          }
    },
    "server":{
      description: "伺服器資料",
      fun: function(bot,message,args) {
        if(!message.guild) return message.channel.send("❌此指令不支援私訊!");
        fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
          if(err) {return message.channel.send("❌此伺服器沒有json資料! 使用 `cr!setup` 創建!")}
          var user = userInfo.toString();
          user = JSON.parse(user);
          let args = message.channel.guild.createdAt.toUTCString().split(" ")
          if(args[2] == "Jan") {var mon = "1月"}else if(args[2] == "Feb") {var mon = "2月"}else if(args[2] == "Mar") {var mon = "3月"}else if(args[2] == "Apr") {var mon = "4月"}else if(args[2] == "May") {var mon = "5月"}else if(args[2] == "Jun") {var mon = "6月"}else if(args[2] == "Jul") {var mon = "7月"}else if(args[2] == "Aug") {var mon = "8月"}else if(args[2] == "Sep") {var mon = "9月"}else if(args[2] == "Oct") {var mon = "10月"}else if(args[2] == "Nov") {var mon = "11月"}else if(args[2] == "Dec") {var mon = "12月"};if(args[0] == "Mon,") {var week = "星期一"}else if(args[0] == "Tue,") {var week = "星期二"}else if(args[0] == "Wed,") {var week = "星期三"}else if(args[0] == "Thu,") {var week = "星期四"}else if(args[0] == "Fri,") {var week = "星期五"}else if(args[0] == "Sat,") {var week = "星期六"}else if(args[0] == "Sun,") {var week = "星期日"}
          let hor = message.channel.guild.createdAt.getUTCHours(8);let H = (hor+8) + args[4].substring(2);let time = args[3] + " " + H + " " + mon + " " + args[1] +"日 "+week + " UTC+8"
          var text = JSON.stringify(user.snipe);var text2 = text.toString();text2 = JSON.parse(text2);
          var textid = JSON.stringify(user.snipeid);var textid2 = textid.toString();textid2 = JSON.parse(textid2);
          if(text2.t1 == "[object Object]" || text2.t1 == "" || text2.t1 == null) {var snipe = "沒有"}else{var snipe = text2.t1}
          let server = new Discord.MessageEmbed()
          .setColor(message.member.roles.highest.color)
          .setTitle( message.guild.name + " 咖啡廳")
          .setDescription("ID:  " + message.guild.id)
          if(user.language.lan) {if(user.language.lan == "zh_TW") {server.addField("語言", "繁體中文",true)}else if(user.language.lan == "en_US") {server.addField("語言", "English",true)}}else{server.addField("語言", "預設(中文)",true)}
          server.addField("上個訊息"," <@" + textid2.t1 + "> \n◆"+snipe,true)
          server.addField("顧客人數", message.guild.memberCount,true)
          server.addField("店長"," <@" + message.guild.owner.user.id + "> \n◆" + `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,false)
          if(user.language.run) {if(user.language.run == "1") {server.addField("機器人觸發", "智乃小幫手#5407",true)}else if(user.language.run == "2") {server.addField("機器人觸發", "智乃小幫手#5127",true)}}else{server.addField("機器人觸發", "預設",true)}
          server.addField("加入訊息"," <#" + user.join + "> \n◆"+user.join2,false)
          server.addField("離開訊息"," <#" + user.leave + "> \n◆"+user.leave2,false)
          server.addField("升級訊息", "◆"+user.rank2,true)
          server.addField("開店日期", time)
          message.channel.send(server)
        })
      }
    },
}
async function lang(bot,message,args,number, ...text) {
  if(!message.guild) return message.channel.send("❌此指令不支援私訊")
  if(!message.guild.me.hasPermission(['MANAGE_GUILD'])) return message.channel.send("❌你沒有權限使用此指令! `管理伺服器`")
  fs.readFile('./guild/'+message.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
    if(args[1] === "" || args[1] === null) return message.channel.send("❌請填入參數! `[zh_TW / en_US]`")
    if(args[1] === "zh_TW") {
      let nor2 = ser.language.run
    ser.language = {lan: "zh_TW",run: nor2}
    var str = JSON.stringify(ser);fs.writeFileSync('./guild/'+ message.guild.id +'.json', str)
    message.channel.send("✅伺服器已設置成中文")
  }else if(args[1] === "en_US") {
    let nor2 = ser.language.run
    ser.language = {lan: "en_US",run: nor2}
    var str = JSON.stringify(ser);fs.writeFileSync('./guild/'+ message.guild.id +'.json', str)
    message.channel.send("✅Has been set to English in guild.")
  }else{message.channel.send("❌參數有誤!")}
  })
}
async function nor(bot,message,args,number, ...text) {
  if(!message.guild) return message.channel.send("❌此指令不支援私訊")
  if(!message.guild.me.hasPermission(['MANAGE_GUILD'])) return message.channel.send("❌你沒有權限使用此指令! `管理伺服器`")
  fs.readFile('./guild/'+message.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
    if(args[1] === "" || args[1] === null) return message.channel.send("❌請填入參數! `[1 / 2]`")
    if(args[1] === "1") {
      let lan2 = ser.language.lan
      ser.language = {lan: lan2,run: 1}
      var str = JSON.stringify(ser);fs.writeFileSync('./guild/'+ message.guild.id +'.json', str)
      message.channel.send("✅本伺服器由 `智乃小幫手#5407` 觸發特定代碼")
    }else if(args[1] === "2") {
      let lan2 = ser.language.lan
      ser.language = {lan: lan2,run: 2}
      var str = JSON.stringify(ser);fs.writeFileSync('./guild/'+ message.guild.id +'.json', str)
      message.channel.send("✅本伺服器由 `智乃小幫手2#5127` 觸發特定代碼")
    }else{message.channel.send("❌參數有誤!")}
  })
}
async function text2(bot,message) {
    if(!code.has(message.author.id)) {message.channel.send("❌你沒有通過驗證! 請打 `cr!code` 來獲取驗證再使用此指令.")}else{
    if(message.member.hasPermission(['MANAGE_CHANNELS'])) {
        if(message.guild.me.hasPermission(['MANAGE_CHANNELS'])) {
          code.delete(message.author.id)
      fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
        if(err) {
          message.channel.send("你還沒有設置設定!! 使用`cr!setup`")
        }else{message.channel.send("🔁創建中")
        message.guild.channels.create("動態文字頻道" , {type: 'category', reason: '' })
        .then(Channel => {
          let gid = Channel.id
          message.guild.channels.create("新增頻道" , {type: 'text', reason: '請使用 cr!clo 關閉' })
          .then(c => {
          c.setParent(gid , { lockPermissions: false })
            let id = c.id
          message.channel.send("✅你已經創建了動態頻道! <#"+ id + ">")
          c.send("<@" + message.author.id + "> 這裡是伺服器的個人頻道! 請使用`cr!ind`開啟新的頻道!")
          var user = userInfo.toString();
          user = JSON.parse(user);
          user.text2 = []
          user.text2.push(c.id)
          var str = JSON.stringify(user);
          fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
        if(err) { message.channel.send("❌創建失敗!")}
        })})}
})}else{
  message.channel.send("❌我沒有創頻道的權限!");
}}else{
  message.channel.send("❌你沒有權限使用此指令!");
}}}
async function voice(bot,message) {
    if(!code.has(message.author.id)) {message.channel.send("❌你沒有通過驗證! 請打 `cr!code` 來獲取驗證再使用此指令.")}else{
    if(message.member.hasPermission(['MANAGE_CHANNELS'])) {
        if(message.guild.me.hasPermission(['MANAGE_CHANNELS'])) {
          code.delete(message.author.id)
      fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
        if(err) {
          message.channel.send("你還沒有設置設定!! 使用`cr!setup`")
        }else{message.channel.send("🔁創建中")
        message.guild.channels.create("動態語音頻道" , {type: 'category', reason: '' })
        .then(Channel => {
          let gid = Channel.id
          message.guild.channels.create("新增頻道" , {type: 'voice', reason: '請使用 cr!clo 關閉'})
          .then(c => {
          c.setParent(gid , { lockPermissions: false })
          c.edit({userLimit: 1})
            let id = c.id
          message.channel.send("✅你已經創建了動態頻道! <#"+ id + ">")
          var user = userInfo.toString();
          user = JSON.parse(user);
          user.voice2 = []
          user.voice2.push(c.id)
          var str = JSON.stringify(user);
          fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
        if(err) { message.channel.send("❌創建失敗!")}
    })})}
    })}else{
        message.channel.send("❌我沒有創頻道的權限!");
      }}else{
        message.channel.send("❌你沒有權限使用此指令!");
}}}
async function Join(bot,message,args, nubmer, ...text) {
  if (text.length > 100) {
    message.channel.send("字數請小於 100")
    return;}
    if(!code.has(message.author.id)) {message.channel.send("❌你沒有通過驗證! 請打 `cr!code` 來獲取驗證再使用此指令.")}else{
        if(message.member.hasPermission(['MANAGE_CHANNELS'])) {
        code.delete(message.author.id)
                fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
                  if(err) {
                    message.channel.send("❌你還沒有設置設定!! 使用`cr!setup`")
                  }else{
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    if(text.join(" ") === "" || text.join(" ") === null) {
                      user.join = []
                      user.join2 = []
                      var str = JSON.stringify(user);
                      fs.writeFileSync('./guild/'+ message.guild.id +'.json', str)
                      return message.channel.send("✅已將加入設置關閉")
                    }
                    message.channel.send("🔁正在設置歡迎訊息...")
                    user.join = []
                    user.join2 = []
                    user.join = message.channel.id
                    user.join2.push(text.join(" "))
                    var str = JSON.stringify(user);
                    fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
                    var send = text.join(" ").replace(`{member}` , + message.guild.memberCount + "").replace(`{user}` , " " + " <@" + message.author.id + "> " + "").replace(`{server}` , " " + message.guild.name + "")
                    message.channel.send("✅已成功設置歡迎訊息: " + send)
                    }}
  )}else{
    message.channel.send("❌你沒有權限使用此指令!");}}
}
async function leave(bot,message,args, nubmer, ...text) {
  if (text.length > 100) {
    message.channel.send("字數請小於 100")
    return;}
    if(!code.has(message.author.id)) {message.channel.send("❌你沒有通過驗證! 請打 `cr!code` 來獲取驗證再使用此指令.")}else{
    if(message.member.hasPermission(['MANAGE_CHANNELS'])) {
        code.delete(message.author.id)
                fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
                  if(err) {
                    message.channel.send("❌你還沒有設置設定!! 使用`cr!setup`")
                  }else{
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    if(text.join(" ") === "" || text.join(" ") === null) {
                      user.leave = []
                      user.leave2 = []
                      var str = JSON.stringify(user);
                      fs.writeFileSync('./guild/'+ message.guild.id +'.json', str)
                      return message.channel.send("✅已將離開設置關閉")
                    }
                    message.channel.send("🔁正在設置離開訊息...")
                    user.leave = []
                    user.leave2 = []
                    user.leave = message.channel.id
                    user.leave2.push(text.join(" "))
                    var str = JSON.stringify(user);
                    fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
                    var send = text.join(" ").replace(`{member}` , + message.guild.memberCount + "").replace(`{user}` , " " + " <@" + message.author.id + "> " + "").replace(`{server}` , " " + message.guild.name + "")
                    message.channel.send("✅已成功設置離開訊息: " + send)
                    }}
  )}else{
    message.channel.send("❌你沒有權限使用此指令!");}}
}
async function rank(bot,message,args, nubmer, ...text) {
  if (text.length > 100) {
    message.channel.send("字數請小於 100")
    return;}
  if(!code.has(message.author.id)) {message.channel.send("❌你沒有通過驗證! 請打 `cr!code` 來獲取驗證再使用此指令.")}else{
  if(message.member.hasPermission(['MANAGE_CHANNELS'])) {
      code.delete(message.author.id)
              fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
                if(err) {
                  message.channel.send("❌你還沒有設置設定!! 使用`cr!setup`")
                }else{
                  var user = userInfo.toString();
                  user = JSON.parse(user);
                  if(text.join(" ") === "" || text.join(" ") === null) {
                    user.rank = []
                    user.rank2 = []
                    var str = JSON.stringify(user);
                    fs.writeFileSync('./guild/'+ message.guild.id +'.json', str)
                    return message.channel.send("✅已將等級通知關閉")
                  }
                  message.channel.send("🔁正在設置升級訊息...")
                  user.rank = []
                  user.rank2 = []
                  user.rank = message.channel.id
                  user.rank2.push(text.join(" "))
                  var str = JSON.stringify(user);
                  fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
                  var send = text.join(" ").replace(`{rank}` , + "**1**" + "").replace(`{user}` , " " + " <@" + message.author.id + "> " + "").replace(`{server}` , " " + message.guild.name + "")
                  message.channel.send("✅已成功設置升級訊息: " + send)
                  }}
)}else{
  message.channel.send("❌你沒有權限使用此指令!");}}
}