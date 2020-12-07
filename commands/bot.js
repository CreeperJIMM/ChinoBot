const Discord = require("discord.js")
const fs = require("fs")
module.exports= {
    "close":{
        description: "測試",
        fun: function(bot,message) {
            if (message.author.id !== '546144403958398988') return;
            message.channel.send('⛔[已強制關閉機器人]' , {tts:true}).then(() => {
                process.exit(0);})
        }
    },
    "ram": {
        description: "記憶體",
        fun: function(bot,message) {
            var os = require('os');
            var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();
            var  getpercentage = ((usedMemory/totalMemory) * 100).toFixed(2) + '%'
            let ramEmbed = new Discord.MessageEmbed()
            .setTitle("機器人內存使用量")
            .addField("記憶體使用/全部", (usedMemory/ Math.pow(1024, 3)).toFixed(2) +"GB / " + (totalMemory/ Math.pow(1024, 3)).toFixed(2) + "GB" )
            .addField("記憶體使用率(%)" , getpercentage);
             message.channel.send(ramEmbed);
        }
    },
    "cpu": {
        description: "CPU",
        fun: function(bot,message) {
            var os 	= require('os-utils');
            os.cpuFree(function(f){
            let cpuEmbed = new Discord.MessageEmbed()
            .setTitle("機器人內存使用量")
            .addField("CPU核心數", os.platform()+ " / " + os.cpuCount() )
            .addField("CPU使用/全部", (2.50 - f).toFixed(2) + "Ghz / "+ "2.50" + "Ghz" )
            .addField("CPU使用率(%)" , (((2.50 - f).toFixed(2) /2.50) *100).toFixed(2) + "%")
            .addField("系統已執行", (os.sysUptime()/60).toFixed(1) + "分鐘" )
             message.channel.send(cpuEmbed);   
            }
        )
    }
    },
    "restart": {
        description: "重啟",
        fun: function(bot,message) {
            if (message.author.id !== '546144403958398988') return;
            message.channel.send('🔁[重啟中...]' , {tts:true}).then(() => {
              process.exit(1);
          });
        }
    },
    "debug": {
        description: "紀錄",
        fun: function(bot,message) {
            if (message.author.id !== '546144403958398988') return;
            let debug = new Discord.MessageEmbed()
            .setTitle("紀錄(Log)")
            .setDescription(console.log)
            .setTimestamp()
            message.channel.send(debug)
        }
    },
    "test": {
        description: "測試",
        fun: function(bot,message) {
            if (message.author.id !== '546144403958398988') return;
            message.author.send("uwu!")
        }
    },
    "times": {
        description: "測試",
        fun: function(bot,message) {
        }
    },
    "guild": {
        description: "測試",
        fun: function(bot,message) {
            if (message.author.id !== '546144403958398988') return;
            var list = new Array();
            for(let guild_ of bot.guilds.cache.array()) {
                if(guild_.memberCount < 10) {
                    var exp = "000"+ guild_.memberCount}
                else if(guild_.memberCount < 100) {
                var exp = "00"+ guild_.memberCount}
                else if(guild_.memberCount <1000) {
                    var exp = "0" + guild_.memberCount}
                    else{var exp = guild_.memberCount}
                list.push(exp+" | "+guild_.name+" | "+guild_.id)
                list.sort(function(a, b) {return a > b;})
            }
            setTimeout(() => {
                list.sort();
                list.splice(40);
                  }, 900);
                  setTimeout(() => {
                    let levelembed = new Discord.MessageEmbed()
                    .setColor('#2d9af8')
                    .setTitle("📦所有咖啡廳☕")
                    .setDescription("群名稱| ID        |  成員數\n ```js\n"+list.join("\n") + "\n```")
                    .setFooter("此為全部群")
                    message.channel.send(levelembed)
                }, 1000);
        }
    },
    "guildleave": {
        description: "測試",
        fun: function(bot,message,p,args) {
            if(message.author.id !== '546144403958398988') return message.channel.send("❌執行發生錯誤!\n```你不是擁有者```")
            if(args == null || args == "" || args == " ") return message.channel.send("❌執行發生錯誤!\n```請填入ID```")
            message.channel.send("🔄執行動作...").then((ingmessage) => {
            var name = bot.guilds.cache.get(args[0]).name
            bot.guilds.cache.get(args[0]).leave()
            .then(() => {return ingmessage.edit("✅成功離開!" + name)})
            .catch(err => {return ingmessage.edit("❌執行發生錯誤!\n```無法離開 "+name+" 伺服器\n"+err+"```")})
            })
        }
    },
    "bot": {
        description: "測試",
        fun: function(bot,message,args) {
            fs.readFile('./server.json',function (err,userInfo) {
                if(err) {return message.channel.send("❌讀取發生錯誤!")}else{var user = userInfo.toString();user = JSON.parse(user);
            let bot = new Discord.MessageEmbed()
            .setColor('#2d9af8').setTitle("☕智乃機器人列表")
            .setDescription("機器人名稱  |  用戶數  |  伺服器數  |  狀態  |  前綴  |  獎勵功能  |  音樂功能  |  動態語音  |  動態文字  |  歡迎訊息  |")
            .addField("智乃小幫手#5407", user.chino.member+"  |  "+user.chino.guild+"  |  "+user.chino.status+" |  `cr!`   |  ✅  |  ✅  |  ✅  |  ✅  |  ❌  | [[邀請]](https://discord.com/oauth2/authorize?client_id=731408794948730961&scope=bot&permissions=2134900215) | [[top.gg]](https://top.gg/bot/731408794948730961)")
            .addField("智乃小幫手2#5127","(邀請這隻請打 `cr?setup normal 2` 來切換觸發機器人)\n"+ user.chino2.member+"  |  "+user.chino2.guild+"  |  "+user.chino2.status+" |  `cr?`   |  ✅  |  ❌  |  ✅  |  ✅  |  ✅  | [[邀請]](https://discord.com/oauth2/authorize?client_id=775702812348776478&scope=bot&permissions=2134900215)")
            .addField("智乃小幫手•Canary#9156", user.chinoc.member+"  |  "+user.chinoc.guild+"  |  "+user.chinoc.status+" |  `cr*`  |  ❌  |  ❌  |  ❌  |  ✅  |  ❌  |[[邀請]](https://discord.com/oauth2/authorize?client_id=747992207323168808&scope=bot&permissions=2134900215)")
            .setFooter("總共有 3 台機器人 | ●運行中 | BY 苦力怕怕#8558")
            .setTimestamp()
            message.channel.send(bot)
        }})
        }
    },
    "post": {
        description: "測試",
        fun: function(bot,message) {
            message.channel.send("<a:load:776980097054933063> 讀取公告中...").then((loadmessage) => {
            let bots = message.guild.me
            fs.readFile('./data.json',function (err, userInfo) {
                if(err) {return message.channel.send("❌讀取失敗!")}
                var user = userInfo.toString();
                user = JSON.parse(user);
                let Time = new Date()
            setTimeout(() => {
                let post = new Discord.MessageEmbed()
                .setColor('#2d9af8').setTitle("☕ 智乃公告")
                .setDescription("公告/通知/更新紀錄")
                .addField("公告","```json\n"+user.post.post+"\n```")
                .addField("通知","```json\n每天凌晨1點關機! 凌晨5點開啟\n距離1點還有 "+ (24 - Time.getHours())+" 時 "+(60 - Time.getMinutes())+" 分\n發薪水的時間也如上\n```")
                .addField("更新紀錄","```json\n"+user.post.update+"\n```")
                .setFooter("資料更新日期: "+user.post.time+" | ").setTimestamp()
                loadmessage.edit("✔讀取成功!")
                loadmessage.edit(post)
            }, 2000);
        })})}
    },
}
