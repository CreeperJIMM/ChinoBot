const Discord = require("discord.js")
let fs =require("fs")
let code = new Set();
module.exports= {
    "setup":{
        description: "setup",
        fun: function(bot,message,a,args, nubmer, ...text) {
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
                .setTitle("[Setup] Help page")
                .setDescription("`setup` - create new json\n`setup text` - create new dynamic text\n`setup voice` - cerate new dynamic voice\n`setup join [message]` Join messager\n`setup leave [message]` leave messager")
                .addField("Dynamic text/voice help:" , "`cr!!text help` Dynamic text help page \n`cr!!voice help` Dynamic voice help page\n`cr!join help` Join message setting tutorial\n`cr!leave help` Leave message setting tutorial\n`cr!rank help` Level up message setting tutorial")
                sethelpEmbed.addField("Other setting","`cr!setup language [zh_TW/en_US]` Guild language set\n`cr!setup normal [1/2]` normal bot 1/2 (Ex. xep give)")
                message.channel.send(sethelpEmbed);
            }else{
              if(!message.guild) return message.channel.send("❌You have in server by command!")
                fs.readFile('./guild/'+ message.guild.id +'.json',function (err) {
                    if(err) {
                      message.channel.send("🔁Create new json file...")
                      var obj = {
                        name: [message.guild.name],
                        language: {},
                        snipe: [],
                        snipeid: {},
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
                     message.channel.send("✅Basic information has been set! Need more please pass `cr!setup help` watch Description.")
                      fs.writeFileSync('./guild/'+ message.guild.id +'.json',json);
                    }else{message.channel.send("You server been setted up! Please pass `cr!setup help` watch Description!")}
                })
            }
        }
    },
    "text":{
        description: "測試",
        fun: function(bot,message,a,args) {
            if(args[0] == "help") {
                let textEmbed = new Discord.MessageEmbed()
                .setTitle("What is 'Dynamic text'?")
                .setDescription("Dynamic text can solve the trouble of deleting a channel after creating a channel.\nHaving your own text channel looks great, right?\nUse `cr!setup text` to set!")
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
                .setTitle("What is 'Dynamic text'?")
                .setDescription("Dynamic voice can create voice and fun!\nIt looks great to have your own voice channel, right?\nUse `cr!setup voice` to set up!")
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
              .setTitle("Join message settings help")
              .setDescription("Use `cr!setup join [message]`\n◆If you want to turn it off, just don’t fill in the message\nAdd the following things in the message to add parameters:\n- `{user}` mention users\n- `{server}` Server name\n- `{member}` Total members")
              message.channel.send(voiceEmbed);
          }
      }
  },
  "leave":{
    description: "測試",
    fun: function(bot,message,a,args) {
        if(args[0] == "help") {
            let voiceEmbed = new Discord.MessageEmbed()
            .setTitle("Leave message settings help")
            .setDescription("Use `cr!setup leave [message]`\n◆If you want to turn it off, just don’t fill in the message\nAdd the following things in the message to add parameters:\n- `{user}` mention users\n- `{server}` Server name\n- `{member}` Total members")
            message.channel.send(voiceEmbed);
            }
        }
    },
    "ind":{
        description: "測試",
        fun: function(bot,message) {
            if(!code.has(message.author.id)) {message.channel.send("❌You failed verification! pass `cr!code` to get verification.")}else{
            fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(err) {
                  message.channel.send("❌You don't have set!! pass `cr!setup`") }else{
                if(user.text2.indexOf(message.channel.id) != "-1") {
                  message.channel.send("🔁Creating...")
                let name = message.author.username;
                let gid = message.channel.parentID
                message.channel.clone(name + " 's channel" , {type: 'text'}, {reason: 'Please type "cr!clo" to close!' })
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
                  message.channel.send("✅You create personal channel! <#"+ id + ">")
                  Channel.send("<@" + message.author.id + "> This is you personal channel! please pass `cr!clo` close it!\n\n`cr!set [parameter]`\n- `name [name]` rename the channel\n- `self / open` set read permission\n -`nsfw` is set as a restricted channel")
                  user.text.push(Channel.id)
                  var str = JSON.stringify(user);
                  fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
                if(err) { message.channel.send("❌Create Fail!")}
        })}else{message.channel.send("❌You don't have set Dynamic text!")}}});
        }}
    },
    "clo":{
        description: "測試",
        fun: function(bot,message) {
            fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
                if(err) {
                  message.channel.send("❌You don't have set!! pass `cr!setup`")
                }else{
                  if(!message.guild.me.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send("❌I'm can't change the channel by no permission!")
                  if(!message.member.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send("❌You are not the owner of this channel!")
                  var user = userInfo.toString();
                  user = JSON.parse(user);
                  if(user.text.indexOf(message.channel.id) != "-1") {message.channel.send("🔁Close yours channel...")
                  setTimeout(function(){ message.channel.delete() } ,1200);
                  var array = user.text
                  var index = array.indexOf(message.channel.id)
                  if (index> -1) {array.splice(index, 1);}
                  var str = JSON.stringify(user);
                  fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
                }else{
                    message.channel.send("❌This channel is not personal channel!")
                  }
            }
        })}
    },
    "set":{
      description: "Test",
      fun: function(bot,message,a,args,number, ...text) {
        if(!message.guild) return message.channel.send("❌Please use this command in the server!")
          fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
            var user = userInfo.toString();
            user = JSON.parse(user);
                if(user.text.indexOf(message.channel.id) != "-1") {
                  if(!message.guild.me.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send("❌I can't change the channel by no permission!")
                  if(!message.member.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send("❌You are not the owner of this channel!")
                  if(args[0] == "name") {
                    message.channel.setName(text.join(" ")).then(() => {
                    message.channel.send("✅The channel has been named "+ text.join(" "))}).catch("❌Name failed!")
                  }else if(args[0] == "self") {
                    if(!message.member.guild.me.hasPermission(['MANAGE_ROLES'])) {return message.channel.send(`❌Please give Zhinao the assistant "MANAGE_ROLES" permission!`)}
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
                    message.channel.send("✅ has been set as a private channel!")
                  }else if(args[0] == "open") {
                    if(!message.member.guild.me.hasPermission(['MANAGE_ROLES'])) {return message.channel.send(`❌Please give Zhinao the assistant "MANAGE_ROLES" permission!`)}
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
                    message.channel.send("✅ has been set as a public channel!")
                  }else if(args[0] == "nsfw") {
                    if(!message.channel.nsfw) {message.channel.setNSFW(true,"dynamic permission setting")}else{message.channel.setNSFW(false,"dynamic permission setting")}
                    message.channel.send("✅Already set!")
                  }else{message.channel.send("Please fill in the following parameters! `cr!set [parameter]`\n- `name [name]` rename the channel\n- `self / open` set read permission\n -`nsfw` is set as a restricted channel")}
              }else{
                  message.channel.send("❌This channel is not a personal channel!")
                }
      })}
  },
    "code":{
        description: "測試",
        fun: function(bot,message) {
            fs.readFile('./data.json',function (err, userInfo) {
                if(err) {return message.channel.send("❌generate fail!");}
                var user = userInfo.toString();
                user = JSON.parse(user);
                user.code = "CR" + Math.round(Math.random()*10) + Math.round(Math.random()*10) + Math.round(Math.random()*10) + Math.round(Math.random()*10)
              let codeEmbed = new Discord.MessageEmbed()
              .setColor('#2d9af8') .setTitle("Please pass `cr!get [Verification code]` to get Verification") .setDescription(user.code)
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
                if(err) {return message.channel.send("❌loading fail!");}
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(user.code.indexOf(args[0]) != "-1") {
                user.code = "CR" + Math.round(Math.random()*10) + Math.round(Math.random()*10) + Math.round(Math.random()*10) + Math.round(Math.random()*10)
              let codeEmbed = new Discord.MessageEmbed()
              .setColor('#2d9af8') .setTitle("✅You get Verification! You can pass Verification command!") .setDescription("P.s. one command one Verification.")
              message.channel.send(codeEmbed)
              code.add(message.author.id);
              var str = JSON.stringify(user);
              fs.writeFileSync('./data.json', str );
      }else{
       message.channel.send("❌Verification code Error!")
        }})}
      },
        "snipes":{
          description: "最後訊息",
          fun: function(bot,message,a,args) {
            if(!message.guild) return message.channel.send("❌You can't use this command in DM!");
            if(!message.member.hasPermission(['MENTION_EVERYONE'])) if(message.author.id == '546144403958398988') {}else{return message.channel.send("❌You don't have enough permissions to view this.")}
            fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
              if(err) {return message.channel.send("❌This server does not support the last message")}
              var user = userInfo.toString();
              user = JSON.parse(user);
              var text = JSON.stringify(user.snipe);var text2 = text.toString();text2 = JSON.parse(text2);
              var textid = JSON.stringify(user.snipeid);var textid2 = textid.toString();textid2 = JSON.parse(textid2);
              var texttime = JSON.stringify(user.snipetime);var texttime2 = texttime.toString();texttime2 = JSON.parse(texttime2);
              var textfile = JSON.stringify(user.snipefile);var textfile2 = textfile.toString();textfile2 = JSON.parse(textfile2);
              if(text2.t1 == "[object Object]" || text2.t1 == "") return message.channel.send("❌The last message of this server could not be found!")
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
                  if(member2) {snipe.addField("The first 2 messages are deleted "+"-" + member2.username + "#" + member2.discriminator, text2.t2 +"\n"+texttime2.t2)}
                  if(member3) {snipe.addField("The last 3 delete messages" +"-"+ member3.username + "#" + member3.discriminator, text2.t3+"\n"+texttime2.t3)}
                  if(member4) {snipe.addField("The last 4 deleted messages" +"-"+ member4.username + "#" + member4.discriminator, text2.t4+"\n"+texttime2.t4)}
                  if(member5) {snipe.addField("The last 5 delete messages" +"-"+ member5.username + "#" + member5.discriminator, text2.t5+"\n"+texttime2.t5)}
                  if(member6) {snipe.addField("The last 6 delete messages" +"-"+ member6.username + "#" + member6.discriminator, text2.t6+"\n"+texttime2.t6)}
                  if(member7) {snipe.addField("The last 7 delete messages" +"-"+ member7.username + "#" + member7.discriminator, text2.t7+"\n"+texttime2.t7)}
                  if(member8) {snipe.addField("The last 8 delete messages" +"-"+ member8.username + "#" + member8.discriminator, text2.t8+"\n"+texttime2.t8)}
                  if(member9) {snipe.addField("The last 9 delete messages" +"-"+ member9.username + "#" + member9.discriminator, text2.t9+"\n"+texttime2.t9)}
                  if(member10) {snipe.addField("The last 10 delete messages" +" - "+ member10.username + "#" + member10.discriminator, text2.t10+"\n"+texttime2.t10)}
                  if(file2.file != "無") {
                    snipe.addField("\n\n📎Remove the attachment from the first one \n", `[${file2.name}](${file2.file})`)}
                message.channel.send(snipe)}})
          }
    },
    "snipe":{
      description: "最後訊息",
      fun: function(bot,message,a,args) {
        if(!message.guild) return message.channel.send("❌You can't use this command in DM!");
        if(args[0] == " " || args[0] == null) {
          fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
            if(err) {return message.channel.send("❌This server does not support the last message")}
            var user = userInfo.toString();
            user = JSON.parse(user);
            var text = JSON.stringify(user.snipe);var text2 = text.toString();text2 = JSON.parse(text2);
            var textid = JSON.stringify(user.snipeid);var textid2 = textid.toString();textid2 = JSON.parse(textid2);
            var texttime = JSON.stringify(user.snipetime);var texttime2 = texttime.toString();texttime2 = JSON.parse(texttime2);
            var textfile = JSON.stringify(user.snipefile);var textfile2 = textfile.toString();textfile2 = JSON.parse(textfile2);
            if(text2.t1 == "[object Object]" || text2.t1 == "") return message.channel.send("❌The last message of this server could not be found!")
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
                  snipe.addField("\n📎File \n", `[${file2.name}](${file2.file})`)}
              message.channel.send(snipe)}})
          }else{
          if(isNaN(args[0]) === true) {return message.channel.send("❌Please fill in the numbers")}
          if(args[0] > 10) {return message.channel.send("❌Please be less than 10")}
          fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
            if(err) {return message.channel.send("❌This server does not support the last message")}
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
            if(text0 == "[object Object]" || text0 == " " || text0 == null) return message.channel.send("❌Can't find the last " +args[0]+" Messages!")
            if(text1 == "[object Object]" || text1 == " "|| text1 == null) return message.channel.send("❌Can't find the last " +args[0]+" Messages!")
            if(text22 == "[object Object]" || text22 == " "|| text22 == null) return message.channel.send("❌Can't find the last " +args[0]+" Messages!")
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
                  snipe.addField("\n📎File \n", `[${file2.name}](${file2.file})`)}
              message.channel.send(snipe)
            }})}
          }
    },
    "server":{
      description: "伺服器資料",
      fun: function(bot,message,a,args) {
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
          server.addField("加入訊息"," <#" + user.join + "> \n◆"+user.join2,false)
          server.addField("離開訊息"," <#" + user.leave + "> \n◆"+user.leave2,false)
          server.addField("升級訊息", "◆"+user.rank2,true)
          server.addField("開店日期", time)
          message.channel.send(server)
        })
      }
    },
}
async function lang(bot,message,a,args,number, ...text) {
  if(!message.guild) return message.channel.send("❌Can't run this command in DM")
  if(!message.guild.me.hasPermission(['MANAGE_GUILD'])) return message.channel.send("❌You don't have permission! `MANAGE_GUILD`")
  fs.readFile('./guild/'+message.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
    if(args[1] === "" || args[1] === null) return message.channel.send("❌Please type `[zh_TW / en_US]`")
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
  }else{message.channel.send("❌type has error!")}
  })
}
async function nor(bot,message,args,number, ...text) {
  if(!message.guild) return message.channel.send("❌Can't run this command in DM")
  if(!message.guild.me.hasPermission(['MANAGE_GUILD'])) return message.channel.send("❌You don't have permission! `MANAGE_GUILD`")
  fs.readFile('./guild/'+message.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
    if(args[1] === "" || args[1] === null) return message.channel.send("❌Please tpye `[1 / 2]`")
    if(args[1] === "1") {
      let lan2 = ser.language.lan
      ser.language = {lan: lan2,run: 1}
      var str = JSON.stringify(ser);fs.writeFileSync('./guild/'+ message.guild.id +'.json', str)
      message.channel.send("✅This guild has been `智乃小幫手#5407` Trigger specific code")
    }else if(args[1] === "2") {
      let lan2 = ser.language.lan
      ser.language = {lan: lan2,run: 2}
      var str = JSON.stringify(ser);fs.writeFileSync('./guild/'+ message.guild.id +'.json', str)
      message.channel.send("✅This guild has been `智乃小幫手2#5127` Trigger specific code")
    }else{message.channel.send("❌type has error!")}
  })
}
async function text2(bot,message) {
    if(!code.has(message.author.id)) {message.channel.send("❌You didn't pass the verification! Please pass `cr!code` to get verification and then use this command.")}else{
    if(message.member.hasPermission(['MANAGE_CHANNELS'])) {
        if(message.guild.me.hasPermission(['MANAGE_CHANNELS'])) {
          code.delete(message.author.id)
      fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
        if(err) {
          message.channel.send("You don't have set!! pass `cr!setup`")
        }else{message.channel.send("🔁Creating...")
        message.guild.channels.create("Dynamic text channel" , {type: 'category', reason: '' })
        .then(Channel => {
          let gid = Channel.id
          message.guild.channels.create("New channel" , {type: 'text', reason: '請使用 cr!clo 關閉' })
          .then(c => {
          c.setParent(gid , { lockPermissions: false })
            let id = c.id
          message.channel.send("✅You have been created a dynamic channel! <#"+ id + ">")
          c.send("<@" + message.author.id + "> This is server create channel! Please pass `cr!ind` open new channel!")
          var user = userInfo.toString();
          user = JSON.parse(user);
          user.text2 = []
          user.text2.push(c.id)
          var str = JSON.stringify(user);
          fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
        if(err) { message.channel.send("❌Created fail!")}
        })})}
})}else{
  message.channel.send("❌I don't have permission to create a channel!");
}}else{
  message.channel.send("❌You don't have permission `MANAGE_CHANNELS`!");
}}}
async function voice(bot,message) {
    if(!code.has(message.author.id)) {message.channel.send("❌You didn't pass the verification! Please pass `cr!code` to get verification and then use this command.")}else{
    if(message.member.hasPermission(['MANAGE_CHANNELS'])) {
        if(message.guild.me.hasPermission(['MANAGE_CHANNELS'])) {
          code.delete(message.author.id)
      fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
        if(err) {
          message.channel.send("You don't have set!! pass `cr!setup`")
        }else{message.channel.send("🔁Creating...")
        message.guild.channels.create("Dynamic voice channel" , {type: 'category', reason: '' })
        .then(Channel => {
          let gid = Channel.id
          message.guild.channels.create("Click here new channel" , {type: 'voice', reason: '請使用 cr!clo 關閉'})
          .then(c => {
          c.setParent(gid , { lockPermissions: false })
          c.edit({userLimit: 1})
            let id = c.id
          message.channel.send("✅You have been created a dynamic channel! <#"+ id + ">")
          var user = userInfo.toString();
          user = JSON.parse(user);
          user.voice2 = []
          user.voice2.push(c.id)
          var str = JSON.stringify(user);
          fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
        if(err) { message.channel.send("❌Created fail!")}
    })})}
    })}else{
        message.channel.send("❌I don't have permission to create a channel!");
      }}else{
        message.channel.send("❌You don't have permission `MANAGE_CHANNELS`!");
}}}
async function Join(bot,message,args, nubmer, ...text) {
  if (text.length > 100) {
    message.channel.send("Please be less than 100")
    return;}
    if(!code.has(message.author.id)) {message.channel.send("❌You didn't pass the verification! Please pass `cr!code` to get verification and then use this command.")}else{
        if(message.member.hasPermission(['MANAGE_CHANNELS'])) {
        code.delete(message.author.id)
                fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
                  if(err) {
                    message.channel.send("❌You don't have set!! pass `cr!setup`")
                  }else{
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    if(text.join(" ") === "" || text.join(" ") === null) {
                      user.join = []
                      user.join2 = []
                      var str = JSON.stringify(user);
                      fs.writeFileSync('./guild/'+ message.guild.id +'.json', str)
                      return message.channel.send("✅Join setting has been turned off")
                    }
                    message.channel.send("🔁Setting up welcome message...")
                    user.join = []
                    user.join2 = []
                    user.join = message.channel.id
                    user.join2.push(text.join(" "))
                    var str = JSON.stringify(user);
                    fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
                    var send = text.join(" ").replace(`{member}` , + message.guild.memberCount + "").replace(`{user}` , " " + " <@" + message.author.id + "> " + "").replace(`{server}` , " " + message.guild.name + "")
                    message.channel.send("✅Welcome message set successfully: " + send)
                    }}
  )}else{
    message.channel.send("❌You don't have permission to use this command.");}}
}
async function leave(bot,message,args, nubmer, ...text) {
  if (text.length > 100) {
    message.channel.send("Please be less than 100")
    return;}
    if(!code.has(message.author.id)) {message.channel.send("❌You didn't pass the verification! Please pass `cr!code` to get verification and then use this command.")}else{
    if(message.member.hasPermission(['MANAGE_CHANNELS'])) {
        code.delete(message.author.id)
                fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
                  if(err) {
                    message.channel.send("❌You don't have set!! pass 使用`cr!setup`")
                  }else{
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    if(text.join(" ") === "" || text.join(" ") === null) {
                      user.leave = []
                      user.leave2 = []
                      var str = JSON.stringify(user);
                      fs.writeFileSync('./guild/'+ message.guild.id +'.json', str)
                      return message.channel.send("✅Leave settings turned off")
                    }
                    message.channel.send("🔁Setting up leave message...")
                    user.leave = []
                    user.leave2 = []
                    user.leave = message.channel.id
                    user.leave2.push(text.join(" "))
                    var str = JSON.stringify(user);
                    fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
                    var send = text.join(" ").replace(`{member}` , + message.guild.memberCount + "").replace(`{user}` , " " + " <@" + message.author.id + "> " + "").replace(`{server}` , " " + message.guild.name + "")
                    message.channel.send("✅Leave message set successfully: " + send)
                    }}
  )}else{
    message.channel.send("❌You don't have permission to use this command.");}}
}
async function rank(bot,message,args, nubmer, ...text) {
  if (text.length > 100) {
    message.channel.send("Please be less than 100")
    return;}
  if(!code.has(message.author.id)) {message.channel.send("❌You didn't pass the verification! Please pass `cr!code` to get verification and then use this command.")}else{
  if(message.member.hasPermission(['MANAGE_CHANNELS'])) {
      code.delete(message.author.id)
              fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
                if(err) {
                  message.channel.send("❌You don't have set!! pass 使用`cr!setup`")
                }else{
                  if(text.join(" ") === "" || text.join(" ") === null) {
                    user.rank = []
                    user.rank2 = []
                    var str = JSON.stringify(user);
                    fs.writeFileSync('./guild/'+ message.guild.id +'.json', str)
                    return message.channel.send("✅Level notification has been turned off")
                  }
                  message.channel.send("🔁Setting up level up message...")
                  user.rank = []
                  user.rank2 = []
                  user.rank = message.channel.id
                  user.rank2.push(text.join(" "))
                  var str = JSON.stringify(user);
                  fs.writeFileSync('./guild/'+ message.guild.id +'.json', str )
                  var send = text.join(" ").replace(`{rank}` , + "**1**" + "").replace(`{user}` , " " + " <@" + message.author.id + "> " + "").replace(`{server}` , " " + message.guild.name + "")
                  message.channel.send("✅Levl up message set successfully: " + send)
                  }}
)}else{
  message.channel.send("❌You don't have permission to use this command.");}}
}