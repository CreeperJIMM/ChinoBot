const Discord = require("discord.js")
const fs =require("fs")
let daily = new Set();
module.exports= {
    "rank":{
        description: "等級查詢",
        fun: function(bot,message,a,args) {
            if(args[0] == "help") {
                let voiceEmbed = new Discord.MessageEmbed()
                .setTitle("等級訊息設置")
                .setDescription("使用 `cr!setup rank [訊息]`\n◆想使用當頻道只要不填入訊息即可\n使用 `cr!setup rank [空兩格]` 來關閉經驗值訊息\n在訊息裡面加上以下東西可以增加參數:\n- `{user}` 及提用戶\n- `{server}` 伺服器名稱\n- `{rank}` 等級")
                message.channel.send(voiceEmbed);}else{
            fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
                if(err) {return}
               else{
                var user = userInfo.toString();
                user = JSON.parse(user);
                let rankembed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle("你的等級: Level " + user.rank)
                .setDescription("經驗值: " + user.exp + "/" + (1000+10*user.rank))
                .setFooter(message.author.username + "的經驗卡  [還需要 " + ((1000+10*user.rank) - user.exp) + " 才會升下一等]")
                message.channel.send(rankembed)
               }
            })
        }}
    },
    "money":{
        description: "金錢查詢",
        fun: function(bot,message,a,args) {
            fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
                if(err) {return}
               else{
                var user = userInfo.toString();
                user = JSON.parse(user);
                fs.readFile('./user.json',function (err2,user2) {
                    if(err2) {return message.channel.send("❌讀取發生錯誤!")}
                    var users = user2.toString();users = JSON.parse(users);
                if(users.daily.indexOf(message.author.id) != "-1") {var today = "✅已領取!"}else{var today = "❌未領取! 請打`cr!daily` 來領取!"}
                let rankembed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle("你的金錢: " + user.money + "$")
                .setDescription("今日薪水: " + today)
                .setFooter(message.author.username + "的錢包uwu")
                message.channel.send(rankembed)
               }
            )}})
        }
    },
    "daily":{
        description: "金錢查詢",
        fun: function(bot,message,a,args) {
            fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
                if(err) {return message.channel.send("❌讀取發生錯誤! 請重試一遍!")}
               else{
                fs.readFile('./user.json',function (err2,user2) {
                    if(err2) {return message.channel.send("❌讀取發生錯誤!")}
                    var users = user2.toString();users = JSON.parse(users);
                if(users.daily.indexOf(message.author.id) != "-1") {return message.channel.send("❌你已經領過了!! 很貪心喔uwu")}else{
                users.daily.push(message.author.id);var str2 = JSON.stringify(users);setTimeout(() => {fs.writeFileSync('./user.json',str2)}, 1000);
                var user = userInfo.toString();
                user = JSON.parse(user);
                let tody = 50
                user.work++
                let tod = new Date()
                user.worktoal = {time: user.worktoal.time,work: user.worktoal.work}
                if(user.worktoal.time == 30 || user.worktoal.time == 31) {if(tod.getUTCDate() != 1 || tod.getUTCDate() != 31) user.worktoal.work = 0}else{if(tod.getUTCDate()-1 != user.worktoal.time) user.worktoal.work = 0}
                user.worktoal = {time: tod.getUTCDate() ,work: (user.worktoal.work)+1}
                user.money = user.money + tody + ((user.worktoal.work)*2)
                var str = JSON.stringify(user);
                if(user.adv.indexOf("daily") == "-1") {user.adv.push("daily");message.author.send("🏅**獲得成就!!**  領薪水!");var str = JSON.stringify(user);}
                setTimeout(() => {
                    fs.writeFileSync('./users/'+ message.author.id +'.json',str);}, 2000); 
                let rankembed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle("✅你已領取你的每日50薪資!")
                .setDescription("你已連續簽到 "+user.worktoal.work+" 天\n所以你能領到額外的 "+(user.worktoal.work)*2+"$ \n記得常來咖啡店工作阿uwu")
                .setFooter(message.author.username + "💰發薪水囉!")
                message.channel.send(rankembed)
                
               }})}
            })
        }
    },
    "levels": {
        description: "排行",
        fun: function(bot,message,a,args) { 
            var list = new Array();
            let rankfiles = fs.readdirSync("./users/")
             for (let file of rankfiles) {
                fs.readFile(`./users/${file}`,function (err,userInfo) {
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                if(user.rank > 0) {
                if(user.exp < 10) {
                        var exp = "000"+ user.exp}
                    else if(user.exp < 100) {
                    var exp = "00"+ user.exp}
                    else if(user.exp <1000) {
                        var exp = "0" + user.exp}
                        else{var exp = user.exp}
                if(user.rank < 10) {
                        var rank = "00"+ user.rank}
                    else if(user.rank < 100) {
                        var rank = "0"+ user.rank}
                    else{var rank = "" + user.rank}
                    setTimeout(() => {
                        list.push(rank +" | "+ exp +" | "+ user.name )
                        list.sort(function(a, b) {
                            return a > b;
                        })
                    }, 50);
                }})
            }
            setTimeout(() => {
                list.sort();
                list.reverse();
                list.splice(30);
                  }, 500);
            setTimeout(() => {
            let levelembed = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setTitle("🏆 等級排行榜     (前30名)")
            .setDescription("等級| 經驗值 |  成員\n ```js\n"+list.join("\n") + "\n```")
            .setFooter("此為全部群排名")
            message.channel.send(levelembed)
        }, 700);
        }
    },
    "moneys": {
        description: "排行",
        fun: function(bot,message,a,args) { 
            var list = new Array();
            let rankfiles = fs.readdirSync("./users/")
             for (let file of rankfiles) {
                fs.readFile(`./users/${file}`,function (err,userInfo) {
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    if(user.money > 15) {
                    if(user.money < 10) {
                        var money = "0000"+ user.money}
                    else if(user.money < 100) {
                    var money = "000"+ user.money}
                    else if(user.money <1000) {
                        var money = "00" + user.money}
                    else if(user.money <10000) {
                        var money = "0" + user.money}
                        else{var money = user.money}
                    list.push(money +" $| "+ user.name )
                    list.sort(function(a, b) {
                        return a > b;
                    });
                }})
            }
            setTimeout(() => {
                list.sort();
                list.reverse();
                list.splice(30);
                  }, 500);
            setTimeout(() => {
            let levelembed = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setTitle("💸 金錢排行榜     (前30名)")
            .setDescription("```js\n"+list.join("\n")+"\n```")
            .setFooter("此為全部群排名")
            message.channel.send(levelembed)
        }, 600);
    }},
    "moneyadd": {
        description: "增加金錢",
        fun: function(bot,message,a,args) { 
            if(message.author.id !== '546144403958398988') return;
            fs.readFile('./users/'+ args[0] +'.json',function (err,userInfo) {
                if(err) {return message.channel.send("❌沒有這個用戶資料")}
               else{
                var user = userInfo.toString();
                user = JSON.parse(user);
                user.money = (user.money + parseInt(args[1]))
                var str = JSON.stringify(user);
                message.channel.send("你讓用戶 " + user.name + "的金錢增加了 `" + args[1] + "`\n現在他有 `" + user.money + "`$ 了")
                fs.writeFileSync('./users/'+ args[0] +'.json',str)
            }})
        }
    },
    "moneyremove": {
        description: "減少金錢",
        fun: function(bot,message,a,args) { 
            if(message.author.id !== '546144403958398988') return;
            fs.readFile('./users/'+ args[0] +'.json',function (err,userInfo) {
                if(err) {return message.channel.send("❌沒有這個用戶資料")}
               else{
                var user = userInfo.toString();
                user = JSON.parse(user);
                user.money = (user.money - parseInt(args[1]))
                var str = JSON.stringify(user);
                message.channel.send("你讓用戶 " + user.name + "的金錢減少了 `" + args[1] + "`\n現在他變成 `" + user.money + "`$ 了")
                fs.writeFileSync('./users/'+ args[0] +'.json',str)
            }})
        }
    },
    "moneyset": {
        description: "設置金錢",
        fun: function(bot,message,a,args) { 
            if(message.author.id !== '546144403958398988') return;
            fs.readFile('./users/'+ args[0] +'.json',function (err,userInfo) {
                if(err) {return message.channel.send("❌沒有這個用戶資料")}
               else{
                var user = userInfo.toString();
                user = JSON.parse(user);
                user.money = parseInt(args[1])
                var str = JSON.stringify(user);
                message.channel.send("你將用戶 " + user.name + "的金錢調成 `" + args[1] + "`$")
                fs.writeFileSync('./users/'+ args[0] +'.json',str)
            }})
        }
    },
    "language": {
        description: "設置語言",
        fun: function(bot,message,a,args) {
            if(args[0] == "zh_TW") {
                fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
                    if(err) {return message.channel.send("❌寫入發生錯誤!")}
                   else{
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    user.language = "zh_TW"
                    var str = JSON.stringify(user);
                    message.channel.send("你的語言已設置成 `中文(繁體)`")
                    fs.writeFileSync('./users/'+ message.author.id +'.json',str)
            }})}else if(args[0] == "en_US") {
                fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
                    if(err) {return message.channel.send("❌Write Error!")}
                   else{
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    user.language = "en_US"
                    var str = JSON.stringify(user);
                    message.channel.send("Your language is set to `English`")
                    fs.writeFileSync('./users/'+ message.author.id +'.json',str)
            }})}else{
                let langembed = new Discord.MessageEmbed()
                .setTitle("以下為語言設置參數")
                .setDescription("The following are the language setting parameters")
                .addField("中文(繁體)","`zh_TW`")
                .addField("English","`en_US`")
                .setFooter("◆本翻譯不是100%準確.\nThis translation is not 100% accurate.\n◆如果選擇英文版可能有指令無法使用!\nIf you choose the English version, smoe command maybe can't used!")
                .setTimestamp()
                message.channel.send(langembed)
            }
        }
    },
    "pay": {
        description: "給予金錢",
        fun: function(bot,message,a,args) { 
            if(!message.guild) return message.channel.send("❌無法在私訊給予金錢!")
            if(args[0] == null) {message.channel.send("❌你必須提及成員或填入ID!")}
            else if(args[1] == null || args[1] == "") {message.channel.send("❌你必須填入金錢!")}else{
            if(isNaN(args[1])) return message.channel.send("❌你填入的必須為數字!")
            if(!args[1].indexOf("-")) return message.channel.send("❌必須為正數!")
            if(!args[1].indexOf(".")) return message.channel.send("❌必須為整數!")
            args[0] = Math.round(args[0])
            fs.readFile('./users/'+ message.author.id +'.json',function (err2,userInfo2) {
                if(message.mentions.users.size){
                    let member=message.mentions.users.first()
                if(member){
                    fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                    if(err) {return message.channel.send("❌沒有這個用戶資料")}
                    if(err2) {return message.channel.send("❌無法讀取Json資料")}
                   else{
                    if(member.id === message.author.id) return message.channel.send("❌你不能給予自己!")
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    user.money = (user.money + parseInt(args[1]))
                    var str = JSON.stringify(user);
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < args[1]) return message.channel.send("❌你貌似沒有足夠的金錢給予!")
                    user2.money = (user2.money - parseInt(args[1]))
                    var str2 = JSON.stringify(user2);
                    message.channel.send("你將你的 `" + args[1] + "`$ 給了 **" + user.name + "**\n現在你變成 `" + user2.money + "`$ \n" + user.name + " 現在有 `" + user.money + "` $")
                    fs.writeFileSync('./users/'+ member.id +'.json',str)
                    fs.writeFileSync('./users/'+ message.author.id +'.json',str2)
                }
                })}}else{
            fs.readFile('./users/'+ args[0] +'.json',function (err,userInfo) {
                if(err) {return message.channel.send("❌沒有這個用戶資料")}
                if(err2) {return message.channel.send("❌無法讀取Json資料")}
               else{
                if(args[0] === message.author.id) return message.channel.send("❌你不能給予自己!")
                var user = userInfo.toString();
                user = JSON.parse(user);
                user.money = (user.money + parseInt(args[1]))
                var str = JSON.stringify(user);
                fs.writeFileSync('./users/'+ args[0] +'.json',str)
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                user2.money = (user2.money - parseInt(args[1]))
                var str2 = JSON.stringify(user2);
                message.channel.send("你將你的 `" + args[1] + "`$ 給了 **" + user.name + "**\n現在你變成 `" + user2.money + "`$ \n" + user.name + " 現在有 `" + user.money + "` $")
                fs.writeFileSync('./users/'+ message.author.id +'.json',str2)
            }})
        }})}
    }},
    "marry": {
        description: "結婚系統",
        fun: async function(bot,message2,a,args) {
        if(!message2.guild) return message2.channel.send("❌請在伺服器裡面使用此指令!")
        fs.readFile('./users/'+ message2.author.id +'.json',function (err2,userInfo2) {
            if(err2) {return message2.channel.send("❌讀取資料錯誤!")}
            var user2 = userInfo2.toString();
            user2 = JSON.parse(user2);
            let mary = [user2.marry]
            if(mary == "[object Object]" || mary == "") {
        if(args[0] == ``) {message2.channel.send("❌你必須提及成員或填入ID!")}else{
            if(message2.mentions.users.size){
                let member=message2.mentions.users.first()
            if(member){
                if(member.id === message2.author.id) {return message2.channel.send("❌你不能跟自己結婚!")}
                message2.channel.send("🔄處理中").then((message) => {
                    fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                        if(err) {return message.channel.send("❌沒有這個成員or這個成員沒有資料")}else{
                        var user = userInfo.toString();
                        user = JSON.parse(user);
                        let mary2 = [user.marry]
                        if(mary2 == "[object Object]" || mary2 == "") {
                    let marry = new Discord.MessageEmbed()
                    .setTitle("請對象在20秒內")
                    .setDescription("輸入 `yes` 結婚\n輸入 `no` 取消")
                    message.edit("<@" + member.id + "> ")
                message.channel.send(marry).then((message) => {
                        const filter = answer => {
                            return [`yes`].includes(answer.content) && answer.author.id === member.id;}
                        const filter2 = answer => {
                            return [`no`].includes(answer.content) && answer.author.id === member.id;}
                message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
                    .then(() => {
                    let marry2 = new Discord.MessageEmbed().setTitle("✅操作完成")
                    message.edit(marry2);
                    let marry1 = new Discord.MessageEmbed().setTitle("🎉恭喜結婚!").setDescription(user2.name + "💕" + user.name).setFooter("💖祝你們長長久久,永不分離!").setTimestamp()
                    message.channel.send(marry1);
                    user.marry = message2.author.id
                    var str = JSON.stringify(user);
                    fs.writeFileSync('./users/'+ member.id +'.json',str)
                    user2.marry = member.id
                    var str2 = JSON.stringify(user2);
                    fs.writeFileSync('./users/'+ message2.author.id +'.json',str2)
                    }).catch(() => {
                        let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                        message.edit(marry2)});
                message.channel.awaitMessages(filter2, { max: 2, time: 20000, errors: ['time'] })
                    .then(() => {
                        let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                        message.edit(marry2)}).catch(() => {
                            let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                            message.edit(marry2);
                        });
               })}else{message.edit("❌對方已經有人了:(")}
            }})})}}else{
        message2.channel.send("🔄處理中").then((message) => {
        if(isNaN(args[0]) === true) {return message2.channel.send("❌請填入ID!")}
        const member=bot.users.cache.get(args[0])
        if(member) {if(member.id === message2.author.id) return message2.channel.send("❌你不能跟自己結婚!")}
        fs.readFile('./users/'+ args[0] +'.json',function (err,userInfo) {
            if(err) {return message.channel.send("❌沒有這個成員or這個成員沒有資料")}else{
            var user = userInfo.toString();
            user = JSON.parse(user);
            let mary2 = [user.marry]
            if(mary2 == "[object Object]" || mary2 == "") {
        let marry = new Discord.MessageEmbed()
        .setTitle("請對象在20秒內")
        .setDescription("輸入 `yes` 結婚\n輸入 `no` 取消")
        message.edit("<@" + args[0] + "> ")
        message.channel.send(marry).then((message) => {
            const filter = answer => {
                return [`yes`].includes(answer.content) && answer.author.id === args[0];}
            const filter2 = answer => {
                return [`no`].includes(answer.content) && answer.author.id === args[0];}
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
        .then(() => {
        let marry2 = new Discord.MessageEmbed().setTitle("✅操作完成")
        message.edit(marry2);
        let marry1 = new Discord.MessageEmbed().setTitle("🎉恭喜結婚!").setDescription(user2.name + "💕" + user.name).setFooter("💖祝你們長長久久,永不分離!").setTimestamp()
        message.channel.send(marry1);
        user.marry = message2.author.id
        var str = JSON.stringify(user);
        fs.writeFileSync('./users/'+ args[0] +'.json',str)
        user2.marry = args[0]
        var str2 = JSON.stringify(user2);
        fs.writeFileSync('./users/'+ message2.author.id +'.json',str2)
        }).catch(() => {
            let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
            message.edit(marry2)});
    message.channel.awaitMessages(filter2, { max: 2, time: 20000, errors: ['time'] })
        .then(() => {
            let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
            message.edit(marry2)}).catch(() => {
                let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                message.edit(marry2);
            });
    })}
    else{message.edit("❌對方已經有人了:(")}
}})})}}}
    else{message2.channel.send("❌你已經有人了! 貪心喔 多妻uwu!")
}
})}},
    "divorce": {
    description: "離婚系統",
    fun: async function(bot,message2,a,args) {
    fs.readFile('./users/'+ message2.author.id +'.json',function (err2,userInfo2) {
        var user2 = userInfo2.toString();
        user2 = JSON.parse(user2);
        if(err2) {return message2.channel.send("❌讀取資料錯誤!")}
        let mary = [user2.marry]
        if(mary != "[object Object]" || mary != "") {
            fs.readFile('./users/'+ user2.marry +'.json',function (err,userInfo) {
                if(err) {return message2.channel.send("❌沒有這個成員or這個成員沒有資料")}else{
                var other = user2.marry
                var user = userInfo.toString();
                user = JSON.parse(user);
                let marry = new Discord.MessageEmbed()
                .setTitle("你要確定欸!!")
                .setDescription("輸入 `yes` 離婚\n輸入 `no` 取消")
                message2.channel.send(marry).then((message) => {
                    const filter = answer => {
                        answer.author.id === message2.author.id;
                        return [`yes`].includes(answer.content);}
                    const filter2 = answer => {
                        answer.author.id === message2.author.id;
                        return [`no`].includes(answer.content);}
            message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
                .then(() => {
                let marry2 = new Discord.MessageEmbed().setTitle("✅操作完成")
                message.edit(marry2);
                let marry1 = new Discord.MessageEmbed().setTitle("💔已離婚!").setDescription(user2.name + "💔" + user.name).setFooter("希望你們之後可以遇到更好的 :((  ").setTimestamp()
                message.channel.send(marry1);
                user.marry = ""
                var str = JSON.stringify(user);
                fs.writeFileSync('./users/'+ other +'.json',str)
                user2.marry = ""
                var str2 = JSON.stringify(user2);
                fs.writeFileSync('./users/'+ message2.author.id +'.json',str2)
                }).catch(() => {
                    let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                    message.edit(marry2)});
            message.channel.awaitMessages(filter2, { max: 2, time: 10000, errors: ['time'] })
                .then(() => {
                    let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                    message.edit(marry2)}).catch(() => {
                        let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                        message.edit(marry2);
                    });})}})}
else{message2.channel.send("❌你沒有結婚!")
}
})}},
"pet": {
    description: "寵物系統",
    fun: async function(bot,message2,a,args) {
        if(!message2.guild) return message2.channel.send("❌請在伺服器裡面使用此指令!")
        if(args[0] === "add") {
            fs.readFile('./users/'+ message2.author.id +'.json',function (err2,userInfo2) {
                if(err2) {return message2.channel.send("❌讀取資料錯誤!")}
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
            if(args[1] == ``) {message2.channel.send("❌你必須提及成員或填入ID!")}else{
                if(message2.mentions.users.size){
                    let member=message2.mentions.users.first()
                if(member){
                    if(member.id === message2.author.id) {return message2.channel.send("❌你不能養自己!")}
                    if(user2.pet.indexOf(member.id) != -1) {return message2.channel.send("❌你已經認養這個寵物了!")}
                    message2.channel.send("🔄處理中").then((message) => {
                        fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                            if(err) {return message.channel.send("❌沒有這個成員or這個成員沒有資料")}else{
                            var user = userInfo.toString();
                            user = JSON.parse(user);
                        let marry = new Discord.MessageEmbed()
                        .setTitle("請寵物在20秒內")
                        .setDescription("輸入 `yes` 領養\n輸入 `no` 取消")
                        message.edit("<@" + member.id + "> ")
                    message.channel.send(marry).then((message) => {
                            const filter = answer => {
                                return [`yes`].includes(answer.content) && answer.author.id === member.id;}
                            const filter2 = answer => {
                                return [`no`].includes(answer.content) && answer.author.id === member.id;}
                    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
                        .then(() => {
                        let marry2 = new Discord.MessageEmbed().setTitle("✅操作完成")
                        message.edit(marry2);
                        let marry1 = new Discord.MessageEmbed().setTitle("🎉恭喜領養!").setDescription(user2.name + "🔗" + user.name).setFooter("🔰要時常照顧寵物唷!").setTimestamp()
                        message.channel.send(marry1);
                        user.host.push(message2.author.id)
                        user.hostname = user.hostname + message2.author.username + "#" + message2.author.discriminator+"\n"
                        var str = JSON.stringify(user);
                        fs.writeFileSync('./users/'+ member.id +'.json',str)
                        user2.pet.push(member.id)
                        user2.petname = user2.petname + member.username + "#" + member.discriminator+"\n"
                        var str2 = JSON.stringify(user2);
                        fs.writeFileSync('./users/'+ message2.author.id +'.json',str2)
                        }).catch(() => {
                            let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                            message.edit(marry2)});
                    message.channel.awaitMessages(filter2, { max: 2, time: 20000, errors: ['time'] })
                        .then(() => {
                            let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                            message.edit(marry2)}).catch(() => {
                                let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                                message.edit(marry2);
                            });
                   })
                }})})}}else{
            message2.channel.send("🔄處理中").then((message) => {
            if(isNaN(args[1]) === true) {return message2.channel.send("❌請填入ID!")}
            const member=bot.users.cache.get(args[1])
            if(member) {if(member.id === message2.author.id) return message2.channel.send("❌你不能養自己!")}
            if(user2.pet.indexOf(member.id) != -1) {return message2.channel.send("❌你已經認養這個寵物了!")}
            fs.readFile('./users/'+ args[1] +'.json',function (err,userInfo) {
                if(err) {return message.channel.send("❌沒有這個成員or這個成員沒有資料")}else{
                var user = userInfo.toString();
                user = JSON.parse(user);
            let marry = new Discord.MessageEmbed()
            .setTitle("請寵物在20秒內")
            .setDescription("輸入 `yes` 領養\n輸入 `no` 取消")
            message.edit("<@" + args[1] + "> ")
            message.channel.send(marry).then((message) => {
                const filter = answer => {
                    return [`yes`].includes(answer.content) && answer.author.id === args[1];}
                const filter2 = answer => {
                    return [`no`].includes(answer.content) && answer.author.id === args[1];}
        message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
            .then(() => {
            let marry2 = new Discord.MessageEmbed().setTitle("✅操作完成")
            message.edit(marry2);
            let marry1 = new Discord.MessageEmbed().setTitle("🎉恭喜領養!").setDescription(user2.name + "🔗" + user.name).setFooter("🔰要時常照顧寵物唷!").setTimestamp()
            message.channel.send(marry1);
            user.host.push(message2.author.id)
            user.hostname = user.hostname + message2.author.username + "#" + message2.author.discriminator + "\n"
            var str = JSON.stringify(user);
            fs.writeFileSync('./users/'+ args[1] +'.json',str)
            user2.pet.push(args[1])
            user2.petname = user2.petname + member.username + "#" + member.discriminator+ "\n"
            var str2 = JSON.stringify(user2);
            fs.writeFileSync('./users/'+ message2.author.id +'.json',str2)
            }).catch(() => {
                let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                message.edit(marry2)});
        message.channel.awaitMessages(filter2, { max: 2, time: 20000, errors: ['time'] })
            .then(() => {
                let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                message.edit(marry2)}).catch(() => {
                    let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                    message.edit(marry2);
                });
        })}
    })})}
        }})}else if(args[0] === "remove") {
            fs.readFile('./users/'+ message2.author.id +'.json',function (err2,userInfo2) {
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(err2) {return message2.channel.send("❌讀取資料錯誤!")}
                        if(args[1] == ``) {message2.channel.send("❌你必須提及成員或填入ID!")}else{
                            if(message2.mentions.users.size){
                            const member=message2.mentions.users.first()
                            if(member){
                            let id = member.id
                            if(id === message2.author.id) {return message2.channel.send("❌你不能棄養自己!")}
                            if(user2.pet.indexOf(id) === -1) {return message2.channel.send("❌沒有這個寵物!")}
                                fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                                    if(err) {return message2.channel.send("❌沒有這個成員or這個成員沒有資料")}else{
                                    var user = userInfo.toString();
                                    user = JSON.parse(user);
                            if(user2.pet.indexOf(member.id) != "-1") {
                                message2.channel.send("🔄處理中").then((message) => {
                                    fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                                        if(err) {return message.channel.send("❌沒有這個成員or這個成員沒有資料")}else{
                                        var user = userInfo.toString();
                                        user = JSON.parse(user);
                        let marry = new Discord.MessageEmbed()
                        .setTitle("你要確定欸!!")
                        .setDescription("輸入 `yes` 棄養\n輸入 `no` 取消")
                        message2.channel.send(marry).then((message) => {
                            const filter = answer => {
                                return [`yes`].includes(answer.content) && answer.author.id === message2.author.id;}
                            const filter2 = answer => {
                                return [`no`].includes(answer.content) && answer.author.id === message2.author.id;}
                    message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
                        .then(() => {
                        let marry2 = new Discord.MessageEmbed().setTitle("✅操作完成")
                        message.edit(marry2);
                        let marry1 = new Discord.MessageEmbed().setTitle("❌已棄養!").setDescription(user2.name + "❌" + user.name).setFooter("希望能找到更好的寵物 :((  ").setTimestamp()
                        message.channel.send(marry1);
                        var array = user.host
                        var index = array.indexOf(message2.author.id)
                        if (index> -1) {array.splice(index, 1);}
                        var str2 = user.hostname
                        user.hostname = str2.replace(message2.author.username + "#" + message2.author.discriminator + "\n", '').replace(message2.author.username + "#" + message2.author.discriminator, '')
                        var str = JSON.stringify(user);
                        fs.writeFileSync('./users/'+ member.id +'.json',str)
                        var array2 = user2.pet
                        var index2 = array2.indexOf(member.id)
                        if (index2> -1) {array2.splice(index2, 1);}
                        var str2 = user2.petname
                        user2.petname = str2.replace(member.username + "#" + member.discriminator + "\n", '').replace(member.username + "#" + member.discriminator, '')
                        var str2 = JSON.stringify(user2);
                        fs.writeFileSync('./users/'+ message2.author.id +'.json',str2)
                        }).catch(() => {
                            let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                            message.edit(marry2)});
                    message.channel.awaitMessages(filter2, { max: 2, time: 10000, errors: ['time'] })
                        .then(() => {
                            let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                            message.edit(marry2)}).catch(() => {
                                let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                                message.edit(marry2);
                            });})}})})}}})}}else{
                                message2.channel.send("🔄處理中").then((message) => {
                                    if(isNaN(args[1]) === true) {return message2.channel.send("❌請填入ID!")}
                                    const member=bot.users.cache.get(args[1])
                                    if(member) {if(member.id === message2.author.id) return message2.channel.send("❌你不能棄養自己!")}
                                    if (user2.pet.indexOf(member.id) === -1) {return message2.channel.send("❌沒有這個寵物!")}
                                    fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                                        if(err) {return message.channel.send("❌沒有這個成員or這個成員沒有資料")}else{
                                        var user = userInfo.toString();
                                        user = JSON.parse(user);
                                        if(member.id === message2.author.id) {return message2.channel.send("❌你不能養自己!")}
                                        if(user2.pet.indexOf(member.id) != "-1") {
                                            message2.channel.send("🔄處理中").then((message) => {
                                                fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                                                    if(err) {return message.channel.send("❌沒有這個成員or這個成員沒有資料")}else{
                                                    var user = userInfo.toString();
                                                    user = JSON.parse(user);
                                    let marry = new Discord.MessageEmbed()
                                    .setTitle("你要確定欸!!")
                                    .setDescription("輸入 `yes` 棄養\n輸入 `no` 取消")
                                    message2.channel.send(marry).then((message) => {
                                        const filter = answer => {
                                            return [`yes`].includes(answer.content) && answer.author.id === message2.author.id;}
                                        const filter2 = answer => {
                                            return [`no`].includes(answer.content) && answer.author.id === message2.author.id;}
                                message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
                                    .then(() => {
                                    let marry2 = new Discord.MessageEmbed().setTitle("✅操作完成")
                                    message.edit(marry2);
                                    let marry1 = new Discord.MessageEmbed().setTitle("❌已棄養!").setDescription(user2.name + "❌" + user.name).setFooter("希望能找到更好的寵物 :((  ").setTimestamp()
                                    message.channel.send(marry1);
                                    var array = user.host
                                    var index = array.indexOf(message2.author.id)
                                    if (index> -1) {array.splice(index, 1);}
                                    var str2 = user.hostname
                                    user.hostname = str2.replace(message2.author.username + "#" + message2.author.discriminator + "\n", ``).replace(message2.author.username + "#" + message2.author.discriminator, '')
                                    var str = JSON.stringify(user);
                                    fs.writeFileSync('./users/'+ member.id +'.json',str)
                                    var array2 = user2.pet
                                    var index2 = array2.indexOf(member.id)
                                    if (index2> -1) {array2.splice(index2, 1);}
                                    var str2 = user2.petname
                                    user2.petname = str2.replace(member.username + "#" + member.discriminator + "\n", ``).replace(member.username + "#" + member.discriminator, '')
                                    var str2 = JSON.stringify(user2);
                                    fs.writeFileSync('./users/'+ message2.author.id +'.json',str2)
                                    }).catch(() => {
                                        let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                                        message.edit(marry2)});
                                message.channel.awaitMessages(filter2, { max: 2, time: 10000, errors: ['time'] })
                                    .then(() => {
                                        let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                                        message.edit(marry2)}).catch(() => {
                                            let marry2 = new Discord.MessageEmbed().setTitle("❌操作取消!")
                                            message.edit(marry2);
                                        })})}}
                            )})}
                        }})})}}})
        }else if(args[0] === "disconnect") {
            
        }else if(args[0] === "feed") {

        }else if(args[0] === "pat") {

        }else{
            let pethelp = new Discord.MessageEmbed().setColor( message2.member.roles.highest.color).setTitle("寵物幫助頁面").setDescription("- `add [用戶]` 新增寵物\n- `remove [寵物]` 移除寵物\n- `disconnect [主人]` 與主人斷開關係").setTimestamp()
            message2.channel.send(pethelp)
        }
    }
},
"card": {
    description: "用戶資料",
    fun: function(bot,message,a,args) {
    if(!message.guild) return message.channel.send("❌請在伺服器裡面使用此指令!")
    if(message.mentions.users.size){
        let member=message.mentions.users.first()
    if(member){
    fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
        if(err) {return message.channel.send("❌找不到成員")}
        var user = userInfo.toString();
        user = JSON.parse(user);
        let userdata = new Discord.MessageEmbed()
        .setColor( message.member.roles.highest.color)
        .setTitle("Rabbit House " + " 員工識別卡")
        .setDescription(member.username+" "+member.id)
        .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}))
        .addField("工作資料", "金錢: " + user.money + "\n等級/經驗值: " + user.rank + " / " + user.exp)
        .addField("互動次數","智乃: "+user.chino +" 次\n心愛: "+user.cocoa +" 次\n提比: "+user.tippy +" 次\n其他: "+user.other +" 次")
        .addField("累計工作 " + user.work + " 次 "+" \n連續工作 " + user.worktoal.work + " 天","首次工作 " + user.time)
        .setFooter("識別卡   ▋▏▎▍▋▍▋▏▏▍▋▏▍▍▋▏▋▍▉▏▍")
        .setTimestamp()
        message.channel.send(userdata)
})}}else{
    if(args[0] != null) {
    let member=bot.users.cache.get(args[0])
    if(member) {
        fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
            if(err) {return message.channel.send("❌找不到成員")}
            var user = userInfo.toString();
            user = JSON.parse(user);
            let userdata = new Discord.MessageEmbed()
            .setColor( message.member.roles.highest.color)
            .setTitle("Rabbit House " + " 員工識別卡")
            .setDescription(member.username+" "+member.id)
            .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}))
            .addField("工作資料", "金錢: " + user.money + "\n等級/經驗值: " + user.rank + " / " + user.exp)
            .addField("互動次數","智乃: "+user.chino +" 次\n心愛: "+user.cocoa +" 次\n提比: "+user.tippy +" 次\n其他: "+user.other +" 次")
            .addField("累計工作 " + user.work + " 次 "+" \n連續工作 " + user.worktoal.work + " 天","首次工作 " + user.time)
            .setFooter("識別卡   ▋▏▎▍▋▍▋▏▏▍▋▏▍▍▋▏▋▍▉▏▍")
            .setTimestamp()
            message.channel.send(userdata)
    }
)}}else{
    fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
        if(err) {return message.channel.send("❌找不到成員")}
        var user = userInfo.toString();
        user = JSON.parse(user);
        let userdata = new Discord.MessageEmbed()
        .setColor( message.member.roles.highest.color)
        .setTitle("Rabbit House " + " 員工識別卡")
        .setDescription(message.author.username+" "+message.author.id)
        .setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}))
        .addField("工作資料", "金錢: " + user.money + "\n等級/經驗值: " + user.rank + " / " + user.exp)
        .addField("互動次數","智乃: "+user.chino +" 次\n心愛: "+user.cocoa +" 次\n提比: "+user.tippy +" 次\n其他: "+user.other +" 次")
        .addField("累計工作 " + user.work + " 次 "+" \n連續工作 " + user.worktoal.work + " 天","首次工作 " + user.time)
        .setFooter("識別卡  ▋▏▎▍▋▍▋▏▏▍▋▏▍▍▋▏▋▍▉▏▍")
        .setTimestamp()
        message.channel.send(userdata)
})}}
}},
"giveall": {
    description: "更新",
    fun: function(bot,message,args) { 
        if(message.author.id !== '546144403958398988') return;
        let rankfiles = fs.readdirSync("./users/")
        for (let file of rankfiles) {
            fs.readFile('./users/'+file ,function (err,userInfo) {
                var user = userInfo.toString();
                user = JSON.parse(user);
                let money = user.money
                let marry = user.marry
                let adv = user.adv
                  var obj = {
                    name: user.name,
                    guild: user.guild,
                    language: user.language,
                    money: money,
                    usemoney: 0,
                    rank: user.rank,
                    guildrank: 0,
                    exp: user.exp,
                    guildxep: 0,
                    marry: marry,
                    host: [],
                    hostname: "",
                    pet: [],
                    petname: "",
                    sex: {},
                    age: {},
                    chino: user.chino,
                    cocoa: user.cocoa,
                    tippy: user.tippy,
                    other: user.other,
                    work: user.work,
                    bank: 0,
                    adv: adv,
                    item: [],
                    bag: [],
                    time: user.time,
                    ver: `4.1`,
                  };
                 var json = JSON.stringify(obj);
                 fs.writeFileSync('./users/'+file,json);
                })
        }
        message.channel.send("已成功更新所有成員Json!")}
    },
    "givepet": {
        description: "更新",
        fun: function(bot,message,a,args) { 
            if(message.author.id !== '546144403958398988') return;
            let up = 0
            let rankfiles = fs.readdirSync("./users/")
            for (let file of rankfiles) {
                fs.readFile('./users/'+file ,function (err,userInfo) {
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    let money = user.money
                    let marry = user.marry
                    let adv = user.adv
                      var obj = {
                        name: user.name,
                        guild: user.guild,
                        language: user.language,
                        money: money,
                        usemoney: 0,
                        rank: user.rank,
                        guildrank: 0,
                        exp: user.exp,
                        guildxep: 0,
                        marry: marry,
                        host: user.host,
                        hostname: user.hostname,
                        pet: user.pet,
                        petname: user.petname,
                        sex: {},
                        age: {},
                        chino: user.chino,
                        cocoa: user.cocoa,
                        tippy: user.tippy,
                        other: user.other,
                        work: user.work,
                        bank: 0,
                        adv: adv,
                        item: [],
                        bag: [],
                        time: user.time,
                        ver: `3.8.5`,
                      };
                     var json = JSON.stringify(obj);
                     fs.writeFileSync('./users/'+file,json);
                     up++
                    
                    })
            }
            message.channel.send("已成功更新所有成員Json!" + up)}
        },
        "updateall2": {
            description: "更新",
            fun: function(bot,message,a,args) { 
                if(message.author.id !== '546144403958398988') return;
                let up = 0
                let rankfiles = fs.readdirSync("./users/")
                for (let file of rankfiles) {
                    fs.readFile('./users/'+file ,function (err,userInfo) {
                        var user = userInfo.toString();
                        user = JSON.parse(user);
                        let money = user.money
                        let marry = user.marry
                        let adv = user.adv
                          var obj = {
                            name: user.name,
                            guild: user.guild,
                            language: user.language,
                            money: money,
                            usemoney: 0,
                            rank: user.rank,
                            guildrank: 0,
                            exp: user.exp,
                            guildxep: 0,
                            marry: marry,
                            host: user.host,
                            hostname: user.hostname,
                            pet: user.pet,
                            petname: user.petname,
                            sex: {},
                            age: {},
                            chino: user.chino,
                            cocoa: user.cocoa,
                            tippy: user.tippy,
                            other: user.other,
                            work: user.work,
                            worktoal:{time: 7,work: 1},
                            picture: {love: [],report: [],share: []},
                            bank: 0,
                            adv: adv,
                            item: [],
                            bag: [],
                            time: user.time,
                            ver: user.ver,
                          };
                         var json = JSON.stringify(obj);
                         fs.writeFileSync('./users/'+file,json);
                         up+1
                        })
                }
                message.channel.send("已成功更新所有成員Json!" + up)}
            },
    "permissions": {
        description: "權限",
        fun: function(bot,message,a,args) {
            access(bot,message,args)
       }
    },
    "permission": {
        description: "權限",
        fun: function(bot,message,a,args) {
            access(bot,message,args)
       }
    },
    "perm": {
        description: "權限",
        fun: function(bot,message,a,args) {
            access(bot,message,args)
       }
    },
    "adv": {
        description: "成就",
        fun: function(bot,message,a,args) { 
                fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
                  if(err) {return}else{var user = userInfo.toString();user = JSON.parse(user);
                    var adv = new Array();
                    if(user.adv.indexOf("notfound") == "-1") {"無"}else{adv.push("[ 好像打錯了...(˘•ω•˘) ] - 打錯指令\n")}
                    if(user.adv.indexOf("speed") != "-1") adv.push("[ 打太快惹>_< ] - 打指令太快\n")
                    if(user.adv.indexOf("chino") != "-1") adv.push("[ 智乃初見面! ] - 打智乃指令\n")
                    if(user.adv.indexOf("chino10") != "-1") adv.push("[ 智乃熟客! ] - 打智乃指令十次\n")
                    if(user.adv.indexOf("nomoneychino") != "-1") adv.push("[ 就算沒錢我也要買智乃! ] - 沒有錢打智乃指令\n")
                    if(user.adv.indexOf("specaial") != "-1") adv.push("[ 特別服務>w< ] - 智乃Nsfw\n")
                    if(user.adv.indexOf("daily") != "-1") adv.push("[ 領薪水! ] - 領取今日金錢\n")
                    if(user.adv.indexOf("S3get") != "-1") adv.push("[ 2020新糧食! ] - 打點兔S3指令\n")
                    let advs = new Discord.MessageEmbed()
                    .setColor( message.member.roles.highest.color)
                    .setTitle(message.member.displayName + " 成就表")
                    .setDescription(message.author.username+"#"+message.author.discriminator)
                    .addField("🏅成就表","\n " + adv)
                    message.channel.send(advs)
                }})
        }}
}
async function access(bot,message,args) {
    if(!message.guild) return message.channel.send("無法在私訊讀取權限! `請在伺服器使用!`")
    if(message.mentions.users.size){
        let user=message.mentions.users.first()
        const member = message.guild.member(user);
    if(member){
    if(member.presence.member.hasPermission(['ADMINISTRATOR'])) {var admi = "✅"}else{var admi = "❌"}
    if(member.presence.member.hasPermission(['MANAGE_CHANNELS'])) {var manage = "✅"}else{var manage = "❌"}
    if(member.presence.member.hasPermission(['MANAGE_GUILD'])) {var guild = "✅"}else{var guild = "❌"}
    if(member.presence.member.hasPermission(['VIEW_AUDIT_LOG'])) {var log = "✅"}else{var log = "❌"}
    if(member.presence.member.hasPermission(['KICK_MEMBERS'])) {var kick = "✅"}else{var kick = "❌"}
    if(member.presence.member.hasPermission(['BAN_MEMBERS'])) {var ban = "✅"}else{var ban = "❌"}
    if(member.presence.member.hasPermission(['MANAGE_ROLES'])) {var role = "✅"}else{var role = "❌"}
    if(member.presence.member.hasPermission(['MANAGE_WEBHOOKS'])) {var hook = "✅"}else{var hook = "❌"}
    if(member.presence.member.hasPermission(['MENTION_EVERYONE'])) {var tag = "✅"}else{var tag = "❌"}
    if(member.presence.member.hasPermission(['MANAGE_EMOJIS'])) {var emoji = "✅"}else{var emoji = "❌"}
    if(member.presence.member.hasPermission(['CREATE_INSTANT_INVITE'])) {var inv = "✅"}else{var inv = "❌"}
    if(message.guild.owner.user.id == member.id) {var owner = "👑 是"}else{var owner = "💂‍♂️ 否"}
    let acc = new Discord.MessageEmbed()
    .setColor(member.presence.member.roles.highest.color)
    .setTitle(member.user.username +" 的權限表")
    .setDescription("最高權限: " + "<@&" + member.presence.member.roles.highest + "> \n服主: "+ owner)
    .addField("權限表", "管理者  "+admi+"\n管理伺服器  "+guild+"\n管理頻道  "+manage+"\n查看審核日記  "+log+"\n踢出成員  "+kick+"\nBan成員  "+ban+"\n更動成員身分組  "+role+"\n編輯webhooks  "+hook+"\n提及所有人  "+tag+"\n編輯表情符號  "+emoji+"\n創建連結  "+inv)
    message.channel.send(acc)
    }}else{
    if(args[0] != null) {
        let user=bot.users.cache.get(args[0])
        const member = message.guild.member(user);
        if(member) {
            if(member.presence.member.hasPermission(['ADMINISTRATOR'])) {var admi = "✅"}else{var admi = "❌"}
            if(member.presence.member.hasPermission(['MANAGE_CHANNELS'])) {var manage = "✅"}else{var manage = "❌"}
            if(member.presence.member.hasPermission(['MANAGE_GUILD'])) {var guild = "✅"}else{var guild = "❌"}
            if(member.presence.member.hasPermission(['VIEW_AUDIT_LOG'])) {var log = "✅"}else{var log = "❌"}
            if(member.presence.member.hasPermission(['KICK_MEMBERS'])) {var kick = "✅"}else{var kick = "❌"}
            if(member.presence.member.hasPermission(['BAN_MEMBERS'])) {var ban = "✅"}else{var ban = "❌"}
            if(member.presence.member.hasPermission(['MANAGE_ROLES'])) {var role = "✅"}else{var role = "❌"}
            if(member.presence.member.hasPermission(['MANAGE_WEBHOOKS'])) {var hook = "✅"}else{var hook = "❌"}
            if(member.presence.member.hasPermission(['MENTION_EVERYONE'])) {var tag = "✅"}else{var tag = "❌"}
            if(member.presence.member.hasPermission(['MANAGE_EMOJIS'])) {var emoji = "✅"}else{var emoji = "❌"}
            if(member.presence.member.hasPermission(['CREATE_INSTANT_INVITE'])) {var inv = "✅"}else{var inv = "❌"}
            if(message.guild.owner.user.id == member.id) {var owner = "👑 是"}else{var owner = "💂‍♂️ 否"}
            let acc = new Discord.MessageEmbed()
            .setColor(member.presence.member.roles.highest.color)
            .setTitle(member.user.username +" 的權限表")
            .setDescription("最高權限: " + "<@&" + member.presence.member.roles.highest + "> \n服主: "+ owner)
            .addField("權限表", "管理者  "+admi+"\n管理伺服器  "+guild+"\n管理頻道  "+manage+"\n查看審核日記  "+log+"\n踢出成員  "+kick+"\nBan成員  "+ban+"\n更動成員身分組  "+role+"\n編輯webhooks  "+hook+"\n提及所有人  "+tag+"\n編輯表情符號  "+emoji+"\n創建連結  "+inv)
            message.channel.send(acc)
        }
    }else{
        if(message.member.hasPermission(['ADMINISTRATOR'])) {var admi = "✅"}else{var admi = "❌"}
        if(message.member.hasPermission(['MANAGE_CHANNELS'])) {var manage = "✅"}else{var manage = "❌"}
        if(message.member.hasPermission(['MANAGE_GUILD'])) {var guild = "✅"}else{var guild = "❌"}
        if(message.member.hasPermission(['VIEW_AUDIT_LOG'])) {var log = "✅"}else{var log = "❌"}
        if(message.member.hasPermission(['KICK_MEMBERS'])) {var kick = "✅"}else{var kick = "❌"}
        if(message.member.hasPermission(['BAN_MEMBERS'])) {var ban = "✅"}else{var ban = "❌"}
        if(message.member.hasPermission(['MANAGE_ROLES'])) {var role = "✅"}else{var role = "❌"}
        if(message.member.hasPermission(['MANAGE_WEBHOOKS'])) {var hook = "✅"}else{var hook = "❌"}
        if(message.member.hasPermission(['MENTION_EVERYONE'])) {var tag = "✅"}else{var tag = "❌"}
        if(message.member.hasPermission(['MANAGE_EMOJIS'])) {var emoji = "✅"}else{var emoji = "❌"}
        if(message.member.hasPermission(['CREATE_INSTANT_INVITE'])) {var inv = "✅"}else{var inv = "❌"}
        if(message.guild.owner.user.id == message.author.id) {var owner = "👑 是"}else{var owner = "💂‍♂️ 否"}
        let acc = new Discord.MessageEmbed()
        .setColor(message.member.roles.highest.color)
        .setTitle(message.author.username +" 的權限表")
        .setDescription("最高權限: " + "<@&" + message.member.roles.highest + "> \n服主: "+ owner)
        .addField("權限表", "管理者  "+admi+"\n管理伺服器  "+guild+"\n管理頻道  "+manage+"\n查看審核日記  "+log+"\n踢出成員  "+kick+"\nBan成員  "+ban+"\n更動成員身分組  "+role+"\n編輯webhooks  "+hook+"\n提及所有人  "+tag+"\n編輯表情符號  "+emoji+"\n創建連結  "+inv)
        message.channel.send(acc)
    }}
}
