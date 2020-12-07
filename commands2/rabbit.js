const Discord = require("discord.js")
let fs =require("fs")
var files = fs.readdirSync('./pitrue/');
module.exports= {
    "chino":{
        description: "智乃指令",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌You can't use this command in DM!");
            if(!msg.channel.nsfw) {
                fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                    if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can help you get one(´・ω・)"); setTimeout(() => {msg.channel.send("All right\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < 30) {return msg.channel.send("💸Looks like you don’t have enough money to order a Chino...")}else{
                    user2.chino++
                    user2.money = (user2.money - 30)
                    var str = JSON.stringify(user2);
                    msg.channel.send("☕You ordered a Chino\nAnd spent `30`$  You left `" + user2.money + "`$")
                    fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
                fs.readFile('./data.json',function (err, userInfo) {
                 if(err){console.log("error!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
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
                 .setTitle(msg.author.username + "  You Ordered a Chino")
                 .attachFiles(attachment)
                 .setImage('attachment://'+f)
                 .setTimestamp()
                 .setFooter(`◆Chino has been ordered for ${Chino} time.\nGallery BY 苦力怕怕#8558 [Copyright Belongs To【pixiv.net】\n【ご注文はうさぎですか?】]`);
                 msg.channel.send(chinoEmbed).then((rp) => {report(bot,msg,f,"Chino","No",rp)});})})
            }}})}else{
                fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can help you get one(´・ω・)"); setTimeout(() => {msg.channel.send("All right\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < 40) {return msg.channel.send("💸Looks like you don’t have enough money to order a Chino...")}else{
                    user2.chino++
                    user2.money = (user2.money - 40)
                    var str = JSON.stringify(user2);
                    msg.channel.send("☕You ordered a mature Chino\nAnd spent `40`$  You left `" + user2.money + "`$")
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
                   .setTitle(msg.author.username + "  🔞You Ordered a matrue Chino")
                   .attachFiles(attachment)
                   .setImage('attachment://'+f)
                   .setTimestamp()
                   .setFooter(`◆Chino has been ordered for ${Chino} time.\nGallery BY 苦力怕怕#8558 [Copyright Belongs To【pixiv.net】\n【ご注文はうさぎですか?】]`);
                   {msg.channel.send(chino18Embed).then((rp) => {report(bot,msg,f,"Chino","Yes",rp)})};
            })}) 
            }}})}
        }
    },
    "cocoa":{
        description: "心愛指令",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌You can't use this command in DM!");
            if(!msg.channel.nsfw) {
                fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                    if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can help you get one(´・ω・)"); setTimeout(() => {msg.channel.send("All right\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                        var user2 = userInfo2.toString();
                        user2 = JSON.parse(user2);
                        if(user2.money < 30) {return msg.channel.send("💸Looks like you don’t have enough money to order a Cocoa...")}else{
                        user2.cocoa++
                        user2.money = (user2.money - 30)
                        var str = JSON.stringify(user2);
                        msg.channel.send("☕You ordered a Cocoa\nAnd spent `30`$  You left `" + user2.money + "`$")
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
                    .setTitle(msg.author.username + "  You Ordered a Cocoa")
                    .attachFiles(attachment)
                    .setImage('attachment://'+f)
                    .setTimestamp()
                    .setFooter(`◆Cocoa has been ordered for ${Cocoa} time.\nGallery BY 苦力怕怕#8558 [Copyright Belongs To【pixiv.net】\n【ご注文はうさぎですか?】]`);
                    {msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Cocoa","No",rp)})};
              })})}}})
            }else{
                fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                    if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can help you get one(´・ω・)"); setTimeout(() => {msg.channel.send("All right\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                        var user2 = userInfo2.toString();
                        user2 = JSON.parse(user2);
                        if(user2.money < 40) {return msg.channel.send("💸Looks like you don’t have enough money to order a Cocoa...")}else{
                        user2.cocoa++
                        user2.money = (user2.money - 40)
                        var str = JSON.stringify(user2);
                        msg.channel.send("☕You ordered a mature Cocoa\nAnd spent `40`$  You left `" + user2.money + "`$")
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
                    .setTitle(msg.author.username + "  🔞You Ordered a matrue Cocoa")
                    .attachFiles(attachment)
                    .setImage('attachment://'+f)
                    .setTimestamp()
                    .setFooter(`◆Cocoa has been ordered for ${Cocoa} time.\nGallery BY 苦力怕怕#8558 [Copyright Belongs To【pixiv.net】\n【ご注文はうさぎですか?】]`);
                    {msg.channel.send(chinoEmbed).then((rp) => {report(bot,msg,f,"Cocoa","Yes",rp)})}; 
                   })})
            }}})}
        }
    },
    "fubuki":{
        description: "狐狸",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌You can't use this command in DM!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can help you get one(´・ω・)"); setTimeout(() => {msg.channel.send("All right\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(user2.money < 25) {return msg.channel.send("💸Looks like you don’t have enough money to order a Fubuki")}else{
                user2.other++
                user2.money = (user2.money - 25)
                var str = JSON.stringify(user2);
                msg.channel.send("☕You Ordered a Fubuki\nAnd spent `25`$  You left `" + user2.money + "`$")
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
                .setTitle(msg.author.username + "  You Ordered a Fubuki")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆Fubuki has been ordered for ${Other} time.\nGallery BY 苦力怕怕#8558 [Copyright Belongs To【pixiv.net】`);
                {msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Fubuki","No",rp)})};
          })})
        }}})}
    },
    "chen":{
        description: "八雲橙!",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌You can't use this command in DM!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can help you get one(´・ω・)"); setTimeout(() => {msg.channel.send("All right\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(user2.money < 25) {return msg.channel.send("💸Looks like you don’t have enough money to order a Chen")}else{
                user2.other++
                user2.money = (user2.money - 25)
                var str = JSON.stringify(user2);
                msg.channel.send("☕You Ordered a Chen\nAnd spent `25`$  You left `" + user2.money + "`$")
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
                .setTitle(msg.author.username + "  You Ordered a Chen")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆Chen has been ordered for ${Other} time.\nGallery BY 苦力怕怕#8558 [Copyright Belongs To【pixiv.net】`);
                {msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Chen","No",rp)})};
          })})
        }}})}
    },
    "peko":{
        description: "兔子peko!",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌You can't use this command in DM!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can help you get one(´・ω・)"); setTimeout(() => {msg.channel.send("All right\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(user2.money < 25) {return msg.channel.send("💸Looks like you don’t have enough money to order a Pekora")}else{
                user2.other++
                user2.money = (user2.money - 25)
                var str = JSON.stringify(user2);
                msg.channel.send("☕You Ordered a Pekora\nAnd spent `25`$  You left `" + user2.money + "`$")
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
                .setTitle(msg.author.username + "  You Ordered a Pekora")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆Pekora has been ordered for ${Other} time.\nGallery BY 苦力怕怕#8558 [Copyright Belongs To【pixiv.net】`);
                {msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Peko","No",rp)})};
          })})
        }}})}
    },
    "shark":{
        description: "Shark Command",
        fun: function(bot,msg) {
            shark0(bot,msg)
        }
    },
    "gura":{
        description: "Shark Command",
        fun: function(bot,msg) {
            shark0(bot,msg)
        }
    },
    "tippy":{
        description: "提比指令",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌You can't use this command in DM!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can help you get one(´・ω・)"); setTimeout(() => {msg.channel.send("All right\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < 15) {return msg.channel.send("💸Looks like you don’t have enough money to order a Tippy...")}else{
                    user2.tippy++
                    user2.money = (user2.money - 15)
                    var str = JSON.stringify(user2);
                    msg.channel.send("☕You ordered a Tippy\nAnd spent `15`$  You left `" + user2.money + "`$")
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
                .setTitle(msg.author.username + "  You Ordered a Tippy")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆Tippy has been ordered for ${Tippy} time.\nGallery BY 苦力怕怕#8558 [Copyright Belongs To【ご注文はうさぎですか?】]`);
                {msg.channel.send(chinoEmbed).then((rp) => {report(bot,msg,f,"Tippy","No",rp)})};
               })})
        }}})}
    },
    "other":{
        description: "分享餐!",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌You can't use this command in DM!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can help you get one(´・ω・)"); setTimeout(() => {msg.channel.send("All right\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < 35) {return msg.channel.send("💸Looks like you don’t have enough money to order a share meal...")}else{
                    user2.other++
                    user2.money = (user2.money - 35)
                    var str = JSON.stringify(user2);
                    msg.channel.send("☕You ordered a Share meal\nAnd spent `35`$  You left `" + user2.money + "`$")
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
                .setTitle(msg.author.username + "  You Ordered a share meal")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆Other has been ordered for ${Other} time.\nGallery BY 苦力怕怕#8558 [Copyright Belongs To【pixiv.net】\n【ご注文はうさぎですか?】]`);
                {msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Other","No",rp)})};
          })})
        }}})}
    },
    "S1":{
        description: "點兔第一季",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌You can't use this command in DM!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can help you get one(´・ω・)"); setTimeout(() => {msg.channel.send("All right\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < 25) {return msg.channel.send("💸Looks like you don’t have enough money to order a S1 rabbit...")}else{
                    user2.money = (user2.money - 25)
                    var str = JSON.stringify(user2);
                    msg.channel.send("☕You ordered a S1 rabbit\nAnd spent `25`$  You left `" + user2.money + "`$")
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
                .setTitle(msg.author.username + "  You Ordered a S1 rabbit")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆S1 has been ordered for ${S1} time.\nGallery BY 苦力怕怕#8558 [Copyright Belongs To【ご注文はうさぎですか?】]`);
                {msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Rabbit_S1","No",rp)})};
          })})
        }}})}
    },
    "S2":{
        description: "點兔第二季",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌You can't use this command in DM!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can help you get one(´・ω・)"); setTimeout(() => {msg.channel.send("All right\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < 25) {return msg.channel.send("💸Looks like you don’t have enough money to order a S2 rabbit...")}else{
                    user2.money = (user2.money - 25)
                    var str = JSON.stringify(user2);
                    msg.channel.send("☕You ordered a S2 rabbit\nAnd spent `25`$  You left `" + user2.money + "`$")
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
                .setTitle(msg.author.username + "  You Ordered a S2 rabbit")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆S2 has been ordered for ${S2} time.\nGallery BY 苦力怕怕#8558 [Copyright Belongs To【ご注文はうさぎですか?】]`);
                {msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Rabbit_S2","No",rp)})};
               })})
        }}})}
    },
    "S3":{
        description: "點兔第三季",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌You can't use this command in DM!");
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can help you get one(´・ω・)"); setTimeout(() => {msg.channel.send("All right\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < 5) {return msg.channel.send("💸Looks like you don’t have enough money to order a S3 rabbit...")}else{
                    user2.money = (user2.money - 5)
                    var str = JSON.stringify(user2);
                    msg.channel.send("☕You ordered a S3 rabbit\nAnd spent `5`$  You left `" + user2.money + "`$")
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
                .setTitle(msg.author.username + "  You Ordered a S3 rabbit")
                .attachFiles(attachment)
                .setImage('attachment://'+f)
                .setTimestamp()
                .setFooter(`◆S2 has been ordered for ${S3} time.\nGallery BY 苦力怕怕#8558 [Copyright Belongs To【ご注文はうさぎですか?】]`);
                {msg.channel.send(cocoaEmbed).then((rp) => {report(bot,msg,f,"Rabbit_S3","No",rp)})};
               })})
        }}})}
    },
    "data": {
        description: "點兔資料",
        fun: function(bot,msg) {
            if(!msg.guild) return msg.channel.send("❌You can't use this command in DM!");
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
                .setTitle("Rabbit function command usage statistics:")
                .addField("<:Chino:744450248826683423> Chino command used", Chino +"次")
                .addField("<:Cocoa:744450249115828244> Cocoa command used", Cocoa +"次")
                .addField("<:Tippy:744450249384394842> Tippy command used", Tippy +"次")
                .addField("<a:hug:744450397892247572> Other command used", Other +"次")
                .addField("<a:cocoa_t:744450249917202453> S1 command used", S1 +"次")
                .addField("<a:chino_jump:744450251427151883> S2 command used" , S2 +"次")
                .addField("<a:chino_jump:744450251427151883> S3 command used" , S3 +"次")
                .addField("<:Gura:769464703281790976> Gura command used", shark+ "次")
                .addField("<:Fubuki:779931176516452382> Fubuki command used", fubuki+ "次")
                .addField("<:Chen:779931175451885568> Chen command used", chen+ "次")
                .addField("<:peko:782496601355845642> Pekora command used", peko+ "次")
                .setTimestamp()
                .setFooter("All rabbit command used " + (Chino+Cocoa+Tippy+Other+S1+S2) + " times\nAll Vtuber command used"+(shark+fubuki+peko)+" tims" )
                msg.channel.send(dataEmbed); 
            })
        }
    }
}
async function shark0(bot,msg) {
    if(!msg.guild) return msg.channel.send("❌You can't use this command in DM!");
    if(!msg.channel.nsfw) {
        fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
            if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can get one for you (´・ω・)"); setTimeout(() => {msg.channel. send("Okay\nBut I think you should have no money... come back next time> <")}, 2000);}else{
            var user2 = userInfo2.toString();
            user2 = JSON.parse(user2);
            if(user2.money <30) {return msg.channel.send("💸It seems that you don’t have enough money to order a shark...")}else{
            user2.money = (user2.money-30)
            var str = JSON.stringify(user2);
            msg.channel.send("☕You ordered a shark\nand spent `30`$ you have remaining `" + user2.money + "`$")
            fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
        fs.readFile('./data.json',function (err, userInfo) {
         if(err){console.log("error!",err); bot.channels.cache.get(`746185201675141241`).send(`error!` + err);}
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
         .setTitle(msg.author.username + "You ordered a Gura. Shark~")
         .attachFiles(attachment)
         .setImage('attachment://'+f)
         .setTimestamp()
         .setFooter(`◆Shark has clicked ${Shark} times\nGallery BY Coolie afraid#8558 [Supported by danbooru.donmai.us/]`);
         msg.channel.send(chinoEmbed).then((rp) => {report(bot,msg,f,"Shark","No",rp)});})})
        }}})}else{
            fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
                if(err) {msg.channel.send("It looks like you don't have an ID card...\nI can get one for you (´・ω・)"); setTimeout(() => {msg.channel. send("Okay\nBut I think you should have no money... come back next time> <")}, 2000);}else{
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(user2.money <40) {msg.channel.send("💸It seems that you don't have enough money to order a mature shark...");nomoneychino(bot,msg)}else{
                user2.chino++
                user2.money = (user2.money-40)
                var str = JSON.stringify(user2);
                msg.channel.send("☕You ordered a mature shark\nand spent `40`$ you have remaining `" + user2.money + "`$")
                fs.writeFileSync('./users/'+ msg.author.id +'.json',str)
        fs.readFile('./data.json',function (err, userInfo) {
            if(err){console.log("error!",err); bot.channels.cache.get(`746185201675141241`).send(`error!` + err);}
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
           .setTitle(msg.author.username + "🔞You ordered a mature Gura. Shark~")
           .attachFiles(attachment)
           .setImage('attachment://'+f)
           .setTimestamp()
           .setFooter(`◆Shark has ordered ${Shark} times\nGallery BY Coolie Scared#8558 [Supported by danbooru.donmai.us/]`);
           {msg.channel.send(chino18Embed).then((rp) => {report(bot,msg,f,"Shark","Yes",rp)})};
                })})}}})
    }
}

async function report(bot,message,number,spot,r18,draw) {
    draw.react("💣").then(() => {draw.react("💟")}).then(() => {draw.react("🔃")}).catch((error) => {message.channel.send("❌Picture upload error! `"+error+"`")})
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
                        let dr = new Discord.MessageEmbed().setColor("#d31b1b").setTitle(message.author.username +" You orderd a "+spot).setDescription("  /////This picture is deleted./////").setFooter("[This picture will add to report plase and accept review]\nPicture: "+number).setTimestamp()
                        draw.delete();
                        draw.channel.send(dr)
                    user.report.push(number)
                    var str = JSON.stringify(user);fs.writeFileSync('report.json',str)
                    user2.picture.report.push(number)
                    var str2 = JSON.stringify(user2);fs.writeFileSync('./users/'+ message.author.id +'.json',str2)
                    }else if(reaction.emoji.name === '💟') {
                        message.reply("❤Added to favorites!")
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
                      let share = new Discord.MessageEmbed().setTitle("🔃Share to other user").setDescription("[Click the file name to get URL]").addField("["+spot+"] ["+r18Y+"] ["+number+"]", `[${filename}](${file})`).setTimestamp().setFooter(message.author.username,message.author.displayAvatarURL())
                      message.channel.send(share)
                      user2.picture.share.push(number)
                      var str2 = JSON.stringify(user2);fs.writeFileSync('./users/'+ message.author.id +'.json',str2)
                    })
                }
            }).catch(collected => {return;})
        })
        }})
}