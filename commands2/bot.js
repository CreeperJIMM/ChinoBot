const Discord = require("discord.js")
const fs = require("fs")
module.exports= {
    "close":{
        description: "測試",
        fun: function(bot,message) {
            if (message.author.id !== '546144403958398988') return;
            message.channel.send('⛔[Stop bot System]' , {tts:true}).then(() => {
                process.exit(0);})
        }
    },
    "ram": {
        description: "Ram",
        fun: function(bot,message) {
            var os = require('os');
            var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();
            var  getpercentage = ((usedMemory/totalMemory) * 100).toFixed(2) + '%'
            let ramEmbed = new Discord.MessageEmbed()
            .setTitle("Bot RAM used status:")
            .addField("Ram used/All", (usedMemory/ Math.pow(1024, 3)).toFixed(2) +"GB / " + (totalMemory/ Math.pow(1024, 3)).toFixed(2) + "GB" )
            .addField("Ram used rate(%)" , getpercentage);
             message.channel.send(ramEmbed);
        }
    },
    "cpu": {
        description: "CPU",
        fun: function(bot,message) {
            var os 	= require('os-utils');
            os.cpuFree(function(f){
            let cpuEmbed = new Discord.MessageEmbed()
            .setTitle("Bot CPU used status:")
            .addField("CPU core:", os.platform()+ " / " + os.cpuCount() )
            .addField("CPU used/All", (2.50 - f).toFixed(2) + "Ghz / "+ "2.50" + "Ghz" )
            .addField("CPU used rate(%)" , (((2.50 - f).toFixed(2) /2.50) *100).toFixed(2) + "%")
            .addField("System execution", (os.sysUptime()/60).toFixed(1) + "Min" )
             message.channel.send(cpuEmbed);   
            }
        )
    }
    },
    "restart": {
        description: "重啟",
        fun: function(bot,message) {
            if (message.author.id !== '546144403958398988') return;
            message.channel.send('🔁[Restart...]' , {tts:true}).then(() => {
              process.exit(1);
          });
        }
    },
    "bot": {
        description: "測試",
        fun: function(bot,message,args) {
            fs.readFile('./server.json',function (err,userInfo) {
                if(err) {return message.channel.send("❌Load error!")}else{var user = userInfo.toString();user = JSON.parse(user);
            let bot = new Discord.MessageEmbed()
            .setColor('#2d9af8').setTitle("☕智乃機器人列表")
            .setDescription("Bot name  |  User  |  Guild  |  Status  |  Prefix  |  Rank mode  |  Music mode  |  vsc mode  |  csc mode  |  Welcome mode  |")
            .addField("智乃小幫手#5407", user.chino.member+"  |  "+user.chino.guild+"  |  "+user.chino.status+" |  `cr!`   |  ✅  |  ✅  |  ✅  |  ✅  |  ❌  | [[Invite]](https://discord.com/oauth2/authorize?client_id=731408794948730961&scope=bot&permissions=2134900215) | [[top.gg]](https://top.gg/bot/731408794948730961)")
            .addField("智乃小幫手2#5127","(Invite this bot please type `cr?setup normal 2` to chance)\n"+ user.chino2.member+"  |  "+user.chino2.guild+"  |  "+user.chino2.status+" |  `cr?`   |  ✅  |  ❌  |  ✅  |  ✅  |  ✅  | [[Invite]](https://discord.com/oauth2/authorize?client_id=775702812348776478&scope=bot&permissions=2134900215)")
            .addField("智乃小幫手•Canary#9156", user.chinoc.member+"  |  "+user.chinoc.guild+"  |  "+user.chinoc.status+" |  `cr*`  |  ❌  |  ❌  |  ❌  |  ✅  |  ❌  |[[Invite]](https://discord.com/oauth2/authorize?client_id=747992207323168808&scope=bot&permissions=2134900215)")
            .setFooter(" 3 Bots | ●Runing | BY 苦力怕怕#8558")
            .setTimestamp()
            message.channel.send(bot)
        }})
        }
    },
    "post": {
        description: "測試",
        fun: function(bot,message) {
            message.channel.send("<a:load:776980097054933063> Load announcement...").then((loadmessage) => {
            let bots = message.guild.me
            fs.readFile('./data.json',function (err, userInfo) {
                if(err) {return message.channel.send("❌Load error!")}
                var user = userInfo.toString();
                user = JSON.parse(user);
                let Time = new Date()
            setTimeout(() => {
                let post = new Discord.MessageEmbed()
                .setColor('#2d9af8').setTitle("☕ Chino announcement")
                .setDescription("announcement/Notice/Update")
                .addField("Announcement","```json\n"+user.post.post+"\n```")
                .addField("Notice","```json\nEveryday 1 AM Close! 5 AM Open!\nStill before 1 AM have "+ (24 - Time.getHours())+" H "+(60 - Time.getMinutes())+" M\nAs above Pay day\n```")
                .addField("Update","```json\n"+user.post.update+"\n```")
                .setFooter("Update date: "+user.post.time+" | ").setTimestamp()
                loadmessage.edit("✔Load success!")
                loadmessage.edit(post)
            }, 2000);
        })})}
    },
}
