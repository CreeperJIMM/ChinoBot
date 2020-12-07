const Discord = require("discord.js")
let fs =require("fs");
const { shark } = require("../commands2/rabbit");
var files = fs.readdirSync('./pitrue/');
module.exports= {
    "chino":{
        description: "智乃指令",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌你不能在私訊中使用此指令!");
            if(!msg.channel.nsfw) {
                fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                    if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < 30) {return msg.channel.send("💸看來你沒有足夠的錢點一隻智乃...")}else{
                    user2.chino++
                    user2.money = (user2.money - 30)
                    var str = JSON.stringify(user2);
                    msg.channel.send("☕你點了一隻智乃\n並花了`30`$  你剩餘 `" + user2.money + "`$")
                    fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
                fs.readFile('./data.json',function (err, userInfo) {
                 if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                 var user = userInfo.toString();
                 user = JSON.parse(user);
                 if(user.command === "true") return; 
                 user.Chino++
                 user.command = "true"
                 var Chino = user.Chino
                 var str = JSON.stringify(user);
                fs.writeFileSync('./data.json',str)
                fs.readdir("./pitrue/chino", (err, r) => {
                 let f = r[Math.floor(Math.random()*r.length)]
                 const attachment = new Discord.MessageAttachment("./pitrue/chino/"+f,f);
                 const chinoEmbed = new Discord.MessageEmbed()
                 .setColor('#2d9af8')
                 .setTitle(msg.author.username + "  你點了一隻智乃")
                 .attachFiles(attachment)
                 .setImage('attachment://'+f)
                 .setTimestamp()
                 .setFooter(`◆智乃已點了 ${Chino} 次\n圖庫BY 苦力怕怕#8558 [版權歸 【pixiv.net】\n【ご注文はうさぎですか?】 所有]`);
                 msg.channel.send(chinoEmbed).then((rp) => {report(bot,msg,f,"Chino","No",rp)});
                })})
                 if(user2.chino > 10) {chino10(bot,msg);chino(bot,msg)}else{chino(bot,msg)}
                }}})}else{
                    fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                        if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                        var user2 = userInfo2.toString();
                        user2 = JSON.parse(user2);
                        if(user2.money < 40) {msg.channel.send("💸看來你沒有足夠的錢點一隻成熟智乃...");nomoneychino(bot,msg)}else{
                        user2.chino++
                        user2.money = (user2.money - 40)
                        var str = JSON.stringify(user2);
                        msg.channel.send("☕你點了一隻成熟智乃\n並花了`40`$  你剩餘 `" + user2.money + "`$")
                        fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
                fs.readFile('./data.json',function (err, userInfo) {
                    if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    if(user.command === "true") return; 
                    user.command = "true"
                    user.Chino++
                    var Chino  = user.Chino
                    var str = JSON.stringify(user);
                   fs.writeFileSync('./data.json',str)
                   fs.readdir("./pitrue/chino/Nsfw", (err, r) => {
                    let f = r[Math.floor(Math.random()*r.length)]
                   const attachment = new Discord.MessageAttachment("./pitrue/chino/Nsfw/"+f,f);
                   const chino18Embed = new Discord.MessageEmbed()
                   .setColor('#2d9af8')
                   .setTitle(msg.author.username + "  🔞你點了一隻成熟智乃")
                   .attachFiles(attachment)
                   .setImage('attachment://'+f)
                   .setTimestamp()
                   .setFooter(`◆智乃已點了 ${Chino} 次\n圖庫BY 苦力怕怕#8558 [版權歸 【pixiv.net】\n【ご注文はうさぎですか?】 所有]`);
                   msg.channel.send(chino18Embed).then((rp) => {report(bot,msg,f,"Chino","Yes",rp)})
                   if(user2.chino > 10) {chino10(bot,msg);chino(bot,msg);specaial(bot,msg)}else{chino(bot,msg);specaial(bot,msg)}
                        })})}}}) 
            }
        }
    },
    "cocoa":{
        description: "心愛指令",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌你不能在私訊中使用此指令!");
            if(!msg.channel.nsfw) {
                fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                    if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < 30) {return msg.channel.send("💸看來你沒有足夠的錢點一隻心愛...")}else{
                    user2.cocoa++
                    user2.money = (user2.money - 30)
                    var str = JSON.stringify(user2);
                    msg.channel.send("☕你點了一隻心愛\n並花了`30`$  你剩餘 `" + user2.money + "`$")
                    fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
                fs.readFile('./data.json',function (err, userInfo) {
                    if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    if(user.command === "true") return; 
                    user.command = "true"
                    user.Cocoa++
                    var Cocoa  = user.Cocoa
                    var str = JSON.stringify(user);
                   fs.writeFileSync('./data.json',str)
                   fs.readdir("./pitrue/cocoa/", (err, r) => {
                    let f = r[Math.floor(Math.random()*r.length)]
                    const attachment = new Discord.MessageAttachment("./pitrue/cocoa/"+f,f);
                    const cocoaEmbed = new Discord.MessageEmbed()
                    .setColor('#2d9af8')
                    .setTitle(msg.author.username + "  你點了一隻心愛")
                    .attachFiles(attachment)
                    .setImage('attachment://'+f)
                    .setTimestamp()
                    .setFooter(`◆心愛已點了 ${Cocoa} 次\n圖庫BY 苦力怕怕#8558 [版權歸 【pixiv.net】\n【ご注文はうさぎですか?】 所有]`);
                    msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Cocoa","No",rp)})
              })})}}})
            }else{
                fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                    if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < 40) {return msg.channel.send("💸看來你沒有足夠的錢點一隻智乃...")}else{
                    user2.cocoa++
                    user2.money = (user2.money - 40)
                    var str = JSON.stringify(user2);
                    msg.channel.send("☕你點了一隻成熟的心愛\n並花了`40`$  你剩餘 `" + user2.money + "`$")
                    fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
                fs.readFile('./data.json',function (err, userInfo) {
                    if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    if(user.command === "true") return; 
                    user.command = "true"
                    user.Cocoa++
                    var Cocoa  = user.Cocoa
                    var str = JSON.stringify(user);
                   fs.writeFileSync('./data.json',str)
                   fs.readdir("./pitrue/cocoa/Nsfw/", (err, r) => {
                    let f = r[Math.floor(Math.random()*r.length)]
                    const attachment = new Discord.MessageAttachment("./pitrue/cocoa/Nsfw/"+f,f);
                    const chinoEmbed = new Discord.MessageEmbed()
                    .setColor('#2d9af8')
                    .setTitle(msg.author.username + "  🔞你點了一隻成熟心愛")
                    .attachFiles(attachment)
                    .setImage('attachment://'+f)
                    .setTimestamp()
                    .setFooter(`◆心愛已點了 ${Cocoa} 次\n圖庫BY 苦力怕怕#8558 [版權歸 【pixiv.net】\n【ご注文はうさぎですか?】 所有]`);
                    msg.channel.send(chinoEmbed).then((rp) => {report(bot,msg,f,"Cocoa","Yes",rp)})
                   })})}}})
            }
        }
    },
    "shark":{
        description: "鯊魚指令",
        fun: function(bot,msg) {
            shark0(bot,msg)
        }
    },
    "gura":{
        description: "鯊魚指令",
        fun: function(bot,msg) {
            shark0(bot,msg)
        }
    },
    "tippy":{
        description: "提比指令",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌你不能在私訊中使用此指令!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(user2.money < 15) {return msg.channel.send("💸看來你沒有足夠的錢點一隻提比...")}else{
                user2.tippy++
                user2.money = (user2.money - 15)
                var str = JSON.stringify(user2);
                msg.channel.send("☕你點了一隻提比\n並花了`15`$  你剩餘 `" + user2.money + "`$")
                fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
            fs.readFile('./data.json',function (err, userInfo) {
                if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(user.command === "true") return; 
                user.command = "true"
                user.Tippy++
                var Tippy = user.Tippy
                var str = JSON.stringify(user);
               fs.writeFileSync('./data.json',str)
               fs.readdir("./pitrue/tippy/", (err, r) => {
                let f = r[Math.floor(Math.random()*r.length)]
                const attachment = new Discord.MessageAttachment("./pitrue/tippy/"+f,f);
                const chinoEmbed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle(msg.author.username + "  你點了一隻提比")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆提比已點了 ${Tippy} 次\n圖庫BY 苦力怕怕#8558 [版權歸【ご注文はうさぎですか?】 所有]`);
                msg.channel.send(chinoEmbed).then((rp) => {report(bot,msg,f,"Tippy","No",rp)})
               })})
        }}})}
    },
    "other":{
        description: "分享餐!",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌你不能在私訊中使用此指令!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(user2.money < 35) {return msg.channel.send("💸看來你沒有足夠的錢點一盒分享餐...")}else{
                user2.other++
                user2.money = (user2.money - 35)
                var str = JSON.stringify(user2);
                msg.channel.send("☕你點了一盒分享餐\n並花了`35`$  你剩餘 `" + user2.money + "`$")
                fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
            fs.readFile('./data.json',function (err, userInfo) {
                if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(user.command === "true") return; 
                user.command = "true"
                user.Other++
                var Other = user.Other
                var str = JSON.stringify(user);
               fs.writeFileSync('./data.json',str)
               fs.readdir("./pitrue/other/", (err, r) => {
                let f = r[Math.floor(Math.random()*r.length)]
                const attachment = new Discord.MessageAttachment("./pitrue/other/"+f,f);
                const cocoaEmbed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle(msg.author.username + "  你點了一盒分享餐")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆分享餐已點了 ${Other} 次\n圖庫BY 苦力怕怕#8558 [版權歸 【pixiv.net】\n【ご注文はうさぎですか?】 所有]`);
                msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Other","No",rp)})
          })})
        }}})}
    },
    "fubuki":{
        description: "狐狸",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌你不能在私訊中使用此指令!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(user2.money < 25) {return msg.channel.send("💸看來你沒有足夠的錢點白上吹雪(狐狸)...")}else{
                user2.other++
                user2.money = (user2.money - 25)
                var str = JSON.stringify(user2);
                msg.channel.send("☕你點了一隻白上吹雪\n並花了`25`$  你剩餘 `" + user2.money + "`$")
                fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
            fs.readFile('./data.json',function (err, userInfo) {
                if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(user.command === "true") return; 
                user.command = "true"
                user.Fubuki++
                var Other = user.Fubuki
                var str = JSON.stringify(user);
               fs.writeFileSync('./data.json',str)
               fs.readdir("./pitrue/fubuki/", (err, r) => {
                let f = r[Math.floor(Math.random()*r.length)]
                const attachment = new Discord.MessageAttachment("./pitrue/fubuki/"+f,f);
                const cocoaEmbed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle(msg.author.username + "  你點了一隻白上吹雪(狐狸)")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆白上已點了 ${Other} 次\n圖庫BY 苦力怕怕#8558 [版權歸 【pixiv.net】所有]`);
                msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Fubuki","No",rp)})
          })})
        }}})}
    },
    "chen":{
        description: "八雲橙!",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌你不能在私訊中使用此指令!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(user2.money < 25) {return msg.channel.send("💸看來你沒有足夠的錢點八雲 橙(小喵)...")}else{
                user2.other++
                user2.money = (user2.money - 25)
                var str = JSON.stringify(user2);
                msg.channel.send("☕你點了一隻八雲 橙\n並花了`25`$  你剩餘 `" + user2.money + "`$")
                fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
            fs.readFile('./data.json',function (err, userInfo) {
                if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(user.command === "true") return; 
                user.command = "true"
                user.Chen++
                var Other = user.Chen
                var str = JSON.stringify(user);
               fs.writeFileSync('./data.json',str)
               fs.readdir("./pitrue/chen/", (err, r) => {
                let f = r[Math.floor(Math.random()*r.length)]
                const attachment = new Discord.MessageAttachment("./pitrue/chen/"+f,f);
                const cocoaEmbed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle(msg.author.username + "  你點了一隻八雲 橙(小喵)")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆橙已點了 ${Other} 次\n圖庫BY 苦力怕怕#8558 [版權歸 【pixiv.net】所有]`);
                msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Chen","No",rp)})
          })})
        }}})}
    },
    "peko":{
        description: "兔子!",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌你不能在私訊中使用此指令!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(user2.money < 25) {return msg.channel.send("💸看來你沒有足夠的錢點兔子Pekora...")}else{
                user2.other++
                user2.money = (user2.money - 25)
                var str = JSON.stringify(user2);
                msg.channel.send("☕你點了一隻兔子Pekora\n並花了`25`$  你剩餘 `" + user2.money + "`$")
                fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
            fs.readFile('./data.json',function (err, userInfo) {
                if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(user.command === "true") return; 
                user.command = "true"
                user.peko++
                var Other = user.peko
                var str = JSON.stringify(user);
               fs.writeFileSync('./data.json',str)
               fs.readdir("./pitrue/peko/", (err, r) => {
                let f = r[Math.floor(Math.random()*r.length)]
                const attachment = new Discord.MessageAttachment("./pitrue/peko/"+f,f);
                const cocoaEmbed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle(msg.author.username + "  你點了一隻兔子Pekora")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆兔子Pekora已點了 ${Other} 次\n圖庫BY 苦力怕怕#8558 [版權歸 【pixiv.net】所有]`);
                msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Pekora","No",rp)})
          })})
        }}})}
    },
    "S1":{
        description: "點兔第一季",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌你不能在私訊中使用此指令!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(user2.money < 15) {return msg.channel.send("💸看來你沒有足夠的錢點一隻智乃...")}else{
                user2.money = (user2.money - 25)
                var str = JSON.stringify(user2);
                msg.channel.send("☕你點了第一季點兔\n並花了`25`$  你剩餘 `" + user2.money + "`$")
                fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
            fs.readFile('./data.json',function (err, userInfo) {
                if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(user.command === "true") return; 
                user.command = "true"
                user.S1++
                var S1 = user.S1
                var str = JSON.stringify(user);
               fs.writeFileSync('./data.json',str)
               fs.readdir("./pitrue/S1/", (err, r) => {
                let f = r[Math.floor(Math.random()*r.length)]
                const attachment = new Discord.MessageAttachment("./pitrue/S1/"+f,f);
                const cocoaEmbed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle(msg.author.username + "  你點了第一季的點兔")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆第一季已點了 ${S1} 次\n圖庫BY 苦力怕怕#8558 [版權歸【ご注文はうさぎですか?】 所有]`);
                msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Rabbit_S1","No",rp)})
          })})
        }}})}
    },
    "S2":{
        description: "點兔第二季",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌你不能在私訊中使用此指令!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(user2.money < 15) {return msg.channel.send("💸看來你沒有足夠的錢點第二季點兔...")}else{
                user2.money = (user2.money - 25)
                var str = JSON.stringify(user2);
                msg.channel.send("☕你點了第二季點兔\n並花了`25`$  你剩餘 `" + user2.money + "`$")
                fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
            fs.readFile('./data.json',function (err, userInfo) {
                if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(user.command === "true") return; 
                user.command = "true"
                user.S2++
                var S2 = user.S2
                var str = JSON.stringify(user);
               fs.writeFileSync('./data.json',str)
               fs.readdir("./pitrue/S2/", (err, r) => {
                let f = r[Math.floor(Math.random()*r.length)]
                const attachment = new Discord.MessageAttachment("./pitrue/S2/"+f,f);
                const cocoaEmbed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle(msg.author.username + "  你點了第二季的點兔")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆第二季已點了 ${S2} 次\n圖庫BY 苦力怕怕#8558 [版權歸【ご注文はうさぎですか?】 所有]`);
                msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Rabbit_S2","No",rp)})
               })})
        }}})}
    },
        "S3":{
            description: "點兔第三季",
            fun: function(bot,msg) {
                if(!msg.guild) return msg.channel.send("❌你不能在私訊中使用此指令!");
                fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                    if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < 5) {return msg.channel.send("💸看來你沒有足夠的錢點第三季點兔...")}else{
                    user2.money = (user2.money - 5)
                    var str = JSON.stringify(user2);
                    msg.channel.send("☕你點了第三季點兔\n並花了`5`$  你剩餘 `" + user2.money + "`$")
                    fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
                fs.readFile('./data.json',function (err, userInfo) {
                    if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    if(user.command === "true") return; 
                    user.command = "true"
                    user.S3++
                    var S3 = user.S3
                    var str = JSON.stringify(user);
                   fs.writeFileSync('./data.json',str)
                   fs.readdir("./pitrue/S3/", (err, r) => {
                    let f = r[Math.floor(Math.random()*r.length)]
                    const attachment = new Discord.MessageAttachment("./pitrue/S3/"+f,f);
                    const cocoaEmbed = new Discord.MessageEmbed()
                    .setColor('#2d9af8')
                    .setTitle(msg.author.username + "  你點了第三季的點兔")
                    .attachFiles(attachment)
                    .setImage('attachment://'+f)
                    .setTimestamp()
                    .setFooter(`◆第三季已點了 ${S3} 次\n圖庫BY 苦力怕怕#8558 [版權歸【ご注文はうさぎですか?】 所有]`);
                    msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Rabbit_S3","No")})
                    S3_(bot,msg)
                   })})
            }}})}
    },
    "data": {
        description: "點兔資料",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌你不能在私訊中使用此指令!");
            fs.readFile('./data.json',function (err, userInfo) {
                if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(user.command === "true") return; 
                user.command = "true"
                var Chino = user.Chino
                var Cocoa = user.Cocoa
                var Tippy = user.Tippy
                var Other = user.Other
                var S1 = user.S1
                var S2 = user.S2
                var S3 = user.S3
                var shark = user.Shark
                var fubuki = user.Fubuki
                var chen = user.Chen
                var peko = user.peko
                const dataEmbed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle("觸圖功能指令使用累計:")
                .addField("<:Chino:744450248826683423> 智乃已點了", Chino +"次")
                .addField("<:Cocoa:744450249115828244> 心愛已點了", Cocoa +"次")
                .addField("<:Tippy:744450249384394842> 提比已點了", Tippy +"次")
                .addField("<a:hug:744450397892247572> 分享餐已點了", Other +"次")
                .addField("<a:cocoa_t:744450249917202453> 第一季已點了", S1 +"次")
                .addField("<a:chino_jump:744450251427151883> 第二季已點了" , S2 +"次")
                .addField("<a:chino_jump:744450251427151883> 第三季已點了" , S3 +"次")
                .addField("<:Gura:769464703281790976> 鯊魚Gura已點了", shark+ "次")
                .addField("<:Fubuki:779931176516452382> 白上吹雪已點了", fubuki+ "次")
                .addField("<:Chen:779931175451885568> 八雲橙已點了", chen+ "次")
                .addField("<:peko:782496601355845642> 兔兔已點了", peko+ "次")
                .setTimestamp()
                .setFooter("點兔指令總共使用了 " + (Chino+Cocoa+Tippy+Other+S1+S2+S3) + " 次\nVtuber指令總共使用了 "+(shark+fubuki+peko)+" 次" )
                msg.channel.send(dataEmbed); 
            })
        }
    }
}
async function shark0(bot,msg) {
    if(!msg.guild) return msg.channel.send("❌你不能在私訊中使用此指令!");
    if(!msg.channel.nsfw) {
        fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
            if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
            var user2 = userInfo2.toString();
            user2 = JSON.parse(user2);
            if(user2.money < 30) {return msg.channel.send("💸看來你沒有足夠的錢點一隻鯊鯊...")}else{
            user2.money = (user2.money - 30)
            var str = JSON.stringify(user2);
            msg.channel.send("☕你點了一隻鯊鯊\n並花了`30`$  你剩餘 `" + user2.money + "`$")
            fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
        fs.readFile('./data.json',function (err, userInfo) {
         if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
         var user = userInfo.toString();
         user = JSON.parse(user);
         if(user.command === "true") return; 
         user.Shark++
         user.command = "true"
         var Shark = user.Shark
         var str = JSON.stringify(user);
        fs.writeFileSync('./data.json',str)
        fs.readdir("./pitrue/Gawr", (err, r) => {
         let f = r[Math.floor(Math.random()*r.length)]
         const attachment = new Discord.MessageAttachment("./pitrue/Gawr/"+f,f);
         const chinoEmbed = new Discord.MessageEmbed()
         .setColor('#2d9af8')
         .setTitle(msg.author.username + "  你點了一隻鯊鯊 Shark~")
         .attachFiles(attachment)
         .setImage('attachment://'+f)
         .setTimestamp()
         .setFooter(`◆鯊鯊已點了 ${Shark} 次\n圖庫BY 苦力怕怕#8558 [圖庫由 【pixiv.net】 支援]`);
         msg.channel.send(chinoEmbed).then((rp) => {
            report(bot,msg,f,"Shark","No",rp)
         })})})
        }}})}else{
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("看起來你沒有身分證...\n我可以幫你辦一張(´・ω・)"); setTimeout(() => {msg.channel.send("好了\n不過我想你應該沒有錢...下次再來吧> <")}, 2000);}else{
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(user2.money < 40) {msg.channel.send("💸看來你沒有足夠的錢點一隻成熟鯊鯊...");nomoneychino(bot,msg)}else{
                user2.money = (user2.money - 40)
                var str = JSON.stringify(user2);
                msg.channel.send("☕你點了一隻成熟鯊鯊\n並花了`40`$  你剩餘 `" + user2.money + "`$")
                fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
        fs.readFile('./data.json',function (err, userInfo) {
            if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
            var user = userInfo.toString();
            user = JSON.parse(user);
            if(user.command === "true") return;
            user.Shark++
            user.command = "true"
            var Shark = user.Shark
            var str = JSON.stringify(user);
           fs.writeFileSync('./data.json',str)
           fs.readdir("./pitrue/Gawr/Nsfw", (err, r) => {
            let f = r[Math.floor(Math.random()*r.length)]
           const attachment = new Discord.MessageAttachment("./pitrue/Gawr/Nsfw/"+f,f);
           const chino18Embed = new Discord.MessageEmbed()
           .setColor('#2d9af8')
           .setTitle(msg.author.username + "  🔞你點了一隻成熟鯊鯊 Shark~")
           .attachFiles(attachment)
           .setImage('attachment://'+f)
           .setTimestamp()
           .setFooter(`◆鯊魚已點了 ${Shark} 次\n圖庫BY 苦力怕怕#8558 [圖庫由 【pixiv.net】 支援]`);
           msg.channel.send(chino18Embed).then((rp) => {report(bot,msg,f,"Shark","Yes",rp)})
                })})}}}) 
    }
}
async function chino(bot,message) {
    fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
      if(err) {return}else{var user = userInfo.toString();user = JSON.parse(user);
        if(user.adv.indexOf("chino") == "-1") {user.adv.push("chino");message.author.send("🏅**獲得成就!!**  智乃初見面!");var str = JSON.stringify(user);fs.writeFileSync('./users/'+ message.author.id +'.json',str)}}})
}
async function chino10(bot,message) {
    fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
      if(err) {return}else{var user = userInfo.toString();user = JSON.parse(user);
        if(user.adv.indexOf("chino10") == "-1") {user.adv.push("chino10");message.author.send("🏅**獲得成就!!**  智乃熟客!");var str = JSON.stringify(user);fs.writeFileSync('./users/'+ message.author.id +'.json',str)}}})
}
async function nomoneychino(bot,message) {
    fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
      if(err) {return}else{var user = userInfo.toString();user = JSON.parse(user);
        if(user.adv.indexOf("nomoneychino") == "-1") {user.adv.push("nomoneychino");message.author.send("🏅**獲得成就!!**  就算沒錢我也要買智乃!");var str = JSON.stringify(user);fs.writeFileSync('./users/'+ message.author.id +'.json',str)}}})
}
async function specaial(bot,message) {
    fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
      if(err) {return}else{var user = userInfo.toString();user = JSON.parse(user);
        if(user.adv.indexOf("specaial") == "-1") {user.adv.push("specaial");message.author.send("🏅**獲得成就!!**  特別服務>w<");var str = JSON.stringify(user);fs.writeFileSync('./users/'+ message.author.id +'.json',str)}}})
}
async function S3_(bot,message) {
    fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
      if(err) {return}else{var user = userInfo.toString();user = JSON.parse(user);
        if(user.adv.indexOf("S3get") == "-1") {user.adv.push("S3get");message.author.send("🏅**獲得成就!!**  2020新糧食!");var str = JSON.stringify(user);fs.writeFileSync('./users/'+ message.author.id +'.json',str)}}})
}
async function report(bot,message,number,spot,r18,draw) {
    draw.react("💣").then(() => {draw.react("💟")}).then(() => {draw.react("🔃")}).catch((error) => {message.channel.send("❌圖片上傳發生錯誤! `"+error+"`")})
    fs.readFile('report.json',function (err,userInfo) {
        if(err) {return}else{var user = userInfo.toString();user = JSON.parse(user);
        fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo2) {
            if(err) return;
            var user2 = userInfo2.toString();user2 = JSON.parse(user2);
            const filter = (reaction, user) => {
                return ['💣','💟','🔃'].includes(reaction.emoji.name) && user.id === message.author.id;};
                draw.awaitReactions(filter, { max: 1, time: 10000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.name === '💣') {
                        let dr = new Discord.MessageEmbed().setColor("#d31b1b").setTitle(message.author.username +" 你點了一個 "+spot).setDescription("  /////此畫作已被刪除/////").setFooter("[這圖片將會被加入report區,並接受審核]\n畫作: "+number).setTimestamp()
                        draw.delete();
                        draw.channel.send(dr)
                    user.report.push(number)
                    var str = JSON.stringify(user);fs.writeFileSync('report.json',str)
                    user2.picture.report.push(number)
                    var str2 = JSON.stringify(user2);fs.writeFileSync('./users/'+ message.author.id +'.json',str2)
                    }else if(reaction.emoji.name === '💟') {
                        message.reply("❤已加入收藏!")
                        user.love.push(number)
                        var str = JSON.stringify(user);fs.writeFileSync('report.json',str)
                        user2.picture.love.push(number)
                        var str2 = JSON.stringify(user2);fs.writeFileSync('./users/'+ message.author.id +'.json',str2)
                }else if(reaction.emoji.name === '🔃') {
                    var Attachment = (draw.attachments).array();
                    Attachment.forEach(function(attachment) {
                      var file = attachment.proxyURL
                      var filename = attachment.name
                      if(r18 == "Yes") {var r18Y = "R18"}else if(r18 == "No") {var r18Y = "Normal"}else{var r18Y = "Unknown"}
                      let share = new Discord.MessageEmbed().setTitle("🔃分享給其他人").setDescription("[點擊下面圖片名稱獲取圖片連結]").addField("["+spot+"] ["+r18Y+"] ["+number+"]", `[${filename}](${file})`).setTimestamp().setFooter(message.author.username,message.author.displayAvatarURL())
                      message.channel.send(share)
                      user2.picture.share.push(number)
                      var str2 = JSON.stringify(user2);fs.writeFileSync('./users/'+ message.author.id +'.json',str2)
                    })
                }
            }).catch(collected => {return;})
        })
        }})
}
