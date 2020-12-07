const Discord = require("discord.js")
let fs =require("fs")
let daily = new Set();
module.exports= {
    "rank":{
        description: "等級查詢",
        fun: function(bot,message,a,args) {
            if(args[0] == "help") {
                let voiceEmbed = new Discord.MessageEmbed()
                .setTitle("Level message settings help")
                .setDescription("Use `cr!setup rank [message]`\n◆If you want to use Current channel, just don’t fill in the message\n◆Use `cr!setup rank close` to close the level up message\nAdd the following things to the message to add parameters:\n- `{user}` mention users\n- `{server}` Server name\n- `{rank}` levels")
                message.channel.send(voiceEmbed);}else{
            fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
                if(err) {return}
               else{
                var user = userInfo.toString();
                user = JSON.parse(user);
                let rankembed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle("You level: Level " + user.rank)
                .setDescription("exp: " + user.exp + "/" + (1000+10*user.rank))
                .setFooter(message.author.username + " 's rank card  [need " + ((1000+10*user.rank) - user.exp) + " exp to next level]")
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
                .setTitle("Yous money: " + user.money + "$")
                .setDescription("Today's salary: " + today)
                .setFooter(message.author.username + " 's wallet uwu")
                message.channel.send(rankembed)
               }
            )}})
        }
    },
    "daily":{
        description: "金錢查詢",
        fun: function(bot,message,a,args) {
            fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
                if(err) {return message.channel.send("❌load error! try again.")}
               else{
                fs.readFile('./user.json',function (err2,user2) {
                    if(err2) {return message.channel.send("❌load error!")}
                    var users = user2.toString();users = JSON.parse(users);
                if(users.daily.indexOf(message.author.id) != "-1") {return message.channel.send("❌You have already received!")}else{
                users.daily.push(message.author.id);var str2 = JSON.stringify(users);setTimeout(() => {fs.writeFileSync('./user.json',str2)}, 1000);
                var user = userInfo.toString();
                user = JSON.parse(user);
                let tody = 50
                user.work++
                let tod = new Date()
                user.worktoal = {time: user.worktoal.time,work: user.worktoal.work}
                if(user.worktoal.time == 30 || user.worktoal.time == 31) {if(tod.getUTCDate() != 1 || tod.getUTCDate() != 31) user.worktoal.work = 0}else{if(tod.getUTCDate()+1 != user.worktoal.time) user.worktoal.work = 0}
                user.worktoal = {time: tod.getUTCDate() ,work: (user.worktoal.work)+1}
                user.money = user.money + tody + ((user.worktoal.work)*2)
                var str = JSON.stringify(user);
                setTimeout(() => {
                    fs.writeFileSync('./users/'+ message.author.id +'.json',str);}, 2000); 
                let rankembed = new Discord.MessageEmbed()
                .setColor('#2d9af8')
                .setTitle("✅You have received your daily salary of 50!")
                .setDescription("You have continuously checked in "+user.worktoal.work+" day\nSo you can receive additional "+(user.worktoal.work)*2+"$\nRemember to come to the coffee shop often to work! uwu")
                .setFooter(message.author.username + "💰Payroll!")
                message.channel.send(rankembed)
               }}
            )}})
        }
    },
    "levels": {
        description: "排行",
        fun: function(bot,message,args) { 
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
                  }, 600);
            setTimeout(() => {
            let levelembed = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setTitle("🏆 Rank ranking")
            .setDescription("Rank|     exp    |   user\n ```js\n"+list.join("\n") + "\n```")
            .setFooter("This is the ranking of all guilds")
            message.channel.send(levelembed)
        }, 800);
        }
    },
    "moneys": {
        description: "排行",
        fun: function(bot,message,args) { 
            var list = new Array();
            let rankfiles = fs.readdirSync("./users/")
             for (let file of rankfiles) {
                fs.readFile(`./users/${file}`,function (err,userInfo) {
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    if(user.money > 15) {
                        if(user.money < 10) {
                            var money = "000"+ user.money}
                        else if(user.money < 100) {
                        var money = "00"+ user.money}
                        else if(user.money <1000) {
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
                  }, 600);
            setTimeout(() => {
            let levelembed = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setTitle("💸 Money ranking")
            .setDescription("```js\n"+list.join("\n")+"\n```")
            .setFooter("This is the ranking of all guilds")
            message.channel.send(levelembed)
        }, 800);
    }},
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
                message.channel.send(langembed)
            }
        }
    },
    "pay": {
        description: "給予金錢",
        fun: function(bot,message,a,args) { 
            if(!message.guild) return message.channel.send("❌This command can't use in DM!")
            if(args[0] == null) {message.channel.send("❌You must fill in the mentioned member OR fill in ID!")}
            else if(args[1] == null || args[1] == "") {message.channel.send("❌You must fill in money!")}else{
            if(isNaN(args[1])) return message.channel.send("❌What you fill in must be a number!");
            if(!args[1].indexOf("-")) return message.channel.send("❌Must be positive!")
            if(!args[1].indexOf(".")) return message.channel.send("❌Must be an integer!")
            args[0] = Math.round(args[0])
            fs.readFile('./users/'+ message.author.id +'.json',function (err2,userInfo2) {
                if(message.mentions.users.size){
                    let member=message.mentions.users.first()
                if(member){
                    fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                    if(err) {return message.channel.send("❌No such user profile")}
                    if(err2) {return message.channel.send("❌Unable to read Json data")}
                   else{
                    if(member.id === message.author.id) return message.channel.send("❌You can't give yourself!")
                    var user = userInfo.toString();
                    user = JSON.parse(user);
                    user.money = (user.money + parseInt(args[1]))
                    var str = JSON.stringify(user);
                    var user2 = userInfo2.toString();
                    user2 = JSON.parse(user2);
                    if(user2.money < args[1]) return message.channel.send("❌It looks like you don't have enough money to give!")
                    user2.money = (user2.money - parseInt(args[1]))
                    var str2 = JSON.stringify(user2);
                    message.channel.send("You will pay **"+ user.name +"** your `" + args[1]+ "` \nNow you become `" + user2.money + "`$ \n" + user.name + " There are `" + user.money + "` $")
                    fs.writeFileSync('./users/'+ member.id +'.json',str)
                    fs.writeFileSync('./users/'+ message.author.id +'.json',str2)
                }
                })}}else{
            fs.readFile('./users/'+ args[0] +'.json',function (err,userInfo) {
                if(err) {return message.channel.send("❌No such user profile")}
                if(err2) {return message.channel.send("❌Unable to read Json data")}
               else{
                if(args[0] === message.author.id) return message.channel.send("❌You can't give to yourself!")
                var user = userInfo.toString();
                user = JSON.parse(user);
                user.money = (user.money + parseInt(args[1]))
                var str = JSON.stringify(user);
                fs.writeFileSync('./users/'+ args[0] +'.json',str)
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                user2.money = (user2.money - parseInt(args[1]))
                var str2 = JSON.stringify(user2);
                message.channel.send("You will pay **"+ user.name +"** your `"+ args[1]+"` \nNow you become `" + user2.money + "`$ \n" + user.name + " There are `" + user.money + "` $")
                fs.writeFileSync('./users/'+ message.author.id +'.json',str2)
            }})
        }})}
    }},
    "marry": {
        description: "結婚系統",
        fun: function(bot,message2,a,args) {
        if(!message2.guild) return message2.channel.send("❌This command can't use in DM!")
        fs.readFile('./users/'+ message2.author.id +'.json',function (err2,userInfo2) {
            if(err2) {return message2.channel.send("❌Error reading data!")}
            var user2 = userInfo2.toString();
            user2 = JSON.parse(user2);
            let mary = [user2.marry]
            if(mary == "[object Object]" || mary == "") {
        if(args[0] == ``) {message2.channel.send("❌You must mention the member or fill in the ID!")}else{
            if(message2.mentions.users.size){
                let member=message2.mentions.users.first()
            if(member){
                if(member.id === message2.author.id) {return message2.channel.send("❌You can't marry yourself!")}
                message2.channel.send("🔄Processing...").then((message) => {
                    fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                        if(err) {return message.channel.send("❌No such member or no information of this member!")}else{
                        var user = userInfo.toString();
                        user = JSON.parse(user);
                        let mary2 = [user.marry]
                        if(mary2 == "[object Object]" || mary2 == "") {
                    let marry = new Discord.MessageEmbed()
                    .setTitle("Ask the subject within 20 seconds")
                    .setDescription("Enter `yes` marry.\nEnter `no` cancel.")
                    message.edit("<@" + member.id + "> ")
                    message.channel.send(marry).then((message) => {
                        const filter = answer => {
                            return [`yes`].includes(answer.content) &&answer.author.id === member.id;}
                        const filter2 = answer => {
                            return [`no`].includes(answer.content) && answer.author.id === member.id;}
                    message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
                    .then(() => {
                    let marry2 = new Discord.MessageEmbed().setTitle("✅Operation complete.")
                    message.edit(marry2);
                    let marry1 = new Discord.MessageEmbed().setTitle("🎉Congratulations on getting married!").setDescription(user2.name + "💕" + user.name).setFooter("💖Wish you a long time and never separate!").setTimestamp()
                    message.channel.send(marry1);
                    user.marry = message2.author.id
                    var str = JSON.stringify(user);
                    fs.writeFileSync('./users/'+ member.id +'.json',str)
                    user2.marry = member.id
                    var str2 = JSON.stringify(user2);
                    fs.writeFileSync('./users/'+ message2.author.id +'.json',str2)
                }).catch(() => {
                        let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                        message.edit(marry2)});
                    message.channel.awaitMessages(filter2, { max: 2, time: 20000, errors: ['time'] })
                    .then(() => {
                        let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                        message.edit(marry2)}).catch(() => {
                            let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                            message.edit(marry2);
                        });
               })}else{message.edit("❌The other party already has someone :(")}
            }})})}}else{
        message2.channel.send("🔄Processing...").then((message) => {
        if(isNaN(args[0]) === true) {return message2.channel.send("❌Please fill in ID!")}
        const member=bot.users.cache.get(args[0])
        if(member) {if(member.id === message2.author.id) return message2.channel.send("❌你不能跟自己結婚!")}
        fs.readFile('./users/'+ args[0] +'.json',function (err,userInfo) {
            if(err) {return message.channel.send("❌No such member or no information of this member!")}else{
            var user = userInfo.toString();
            user = JSON.parse(user);
            let mary2 = [user.marry]
            if(mary2 == "[object Object]" || mary2 == "") {
        let marry = new Discord.MessageEmbed()
        .setTitle("Ask the subject within 20 seconds")
        .setDescription("Enter `yes` marry.\nEnter `no` cancel.")
        message.edit("<@" + args[0] + "> ")
        message.channel.send(marry).then((message) => {
            const filter = answer => {
                return [`yes`].includes(answer.content) &&answer.author.id === args[0];}
            const filter2 = answer => {
                return [`no`].includes(answer.content) && answer.author.id === args[0];}
        message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
        .then(() => {
        let marry2 = new Discord.MessageEmbed().setTitle("✅Operation complete!")
        message.edit(marry2);
        let marry1 = new Discord.MessageEmbed().setTitle("🎉Congratulations on getting married!").setDescription(user2.name + "💕" + user.name).setFooter("💖Wish you a long time and never separate!").setTimestamp()
        message.channel.send(marry1);
        user.marry = message2.author.id
        var str = JSON.stringify(user);
        fs.writeFileSync('./users/'+ args[0] +'.json',str)
        user2.marry = args[0]
        var str2 = JSON.stringify(user2);
        fs.writeFileSync('./users/'+ message2.author.id +'.json',str2)
    }).catch(() => {
            let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
            message.edit(marry2)});
        message.channel.awaitMessages(filter2, { max: 2, time: 10000, errors: ['time'] })
        .then(() => {
            let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
            message.edit(marry2)}).catch(() => {
                let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                message.edit(marry2);
            });
    })}
    else{message.edit("❌The other party already has someone :(")}
}})})}}}
    else{message2.channel.send("❌You already have someone! Greedy,polygamous!!  uwu!")
}
})}},
    "divorce": {
    description: "離婚系統",
    fun: function(bot,message2,args) {
    fs.readFile('./users/'+ message2.author.id +'.json',function (err2,userInfo2) {
        var user2 = userInfo2.toString();
        user2 = JSON.parse(user2);
        if(err2) {return message2.channel.send("❌Error reading data!")}
        let mary = [user2.marry]
        if(mary != "[object Object]" || mary != "") {
            fs.readFile('./users/'+ user2.marry +'.json',function (err,userInfo) {
                if(err) {return message2.channel.send("❌No such member or no information of this member!")}else{
                var other = user2.marry
                var user = userInfo.toString();
                user = JSON.parse(user);
                let marry = new Discord.MessageEmbed()
                .setTitle("You have to be sure!!")
                .setDescription("Enter `yes` divorce.\nEnter `no` cancel.")
                message2.channel.send(marry).then((message) => {
                    const filter = answer => {
                        answer.author.id === message2.author.id;
                        return [`yes`].includes(answer.content);}
                    const filter2 = answer => {
                        answer.author.id === message2.author.id;
                        return [`no`].includes(answer.content);}
                message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
                .then(() => {
                let marry2 = new Discord.MessageEmbed().setTitle("✅Operation complete.")
                message.edit(marry2);
                let marry1 = new Discord.MessageEmbed().setTitle("💔Divorced!").setDescription(user2.name + "💔" + user.name).setFooter("Hope you can meet better :((  ").setTimestamp()
                message.channel.send(marry1);
                user.marry = ""
                var str = JSON.stringify(user);
                fs.writeFileSync('./users/'+ other +'.json',str)
                user2.marry = ""
                var str2 = JSON.stringify(user2);
                fs.writeFileSync('./users/'+ message2.author.id +'.json',str2)
            }).catch(() => {
                    let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                    message.edit(marry2)});
                message.channel.awaitMessages(filter2, { max: 2, time: 10000, errors: ['time'] })
                .then(() => {
                    let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                    message.edit(marry2)}).catch(() => {
                        let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                        message.edit(marry2);
                    });})}})}
else{message2.channel.send("❌You are not married!")
}
})}},
"pet": {
    description: "寵物系統",
    fun: async function(bot,message2,a,args) {
        if(!message2.guild) return message2.channel.send("❌This command can't use in DM!")
        if(args[0] === "add") {
            fs.readFile('./users/'+ message2.author.id +'.json',function (err2,userInfo2) {
                if(err2) {return message2.channel.send("❌Error reading data!")}
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
            if(args[1] == ``) {message2.channel.send("❌You must mention the member or fill in the ID!")}else{
                if(message2.mentions.users.size){
                    let member=message2.mentions.users.first()
                if(member){
                    if(member.id === message2.author.id) {return message2.channel.send("❌You can't support yourself!")}
                    if(user2.pet.indexOf(member.id) != -1) {return message2.channel.send("❌You have adopted this pet!")}
                    message2.channel.send("🔄Processing").then((message) => {
                        fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                            if(err) {return message.channel.send("❌No such member or no information of this member")}else{
                            var user = userInfo.toString();
                            user = JSON.parse(user);
                        let marry = new Discord.MessageEmbed()
                        .setTitle("Please pet within 20 seconds")
                        .setDescription("enter `yes` Adopt\nenter `no` cancel")
                        message.edit("<@" + member.id + "> ")
                    message.channel.send(marry).then((message) => {
                            const filter = answer => {
                                return [`yes`].includes(answer.content) && answer.author.id === member.id;}
                            const filter2 = answer => {
                                return [`no`].includes(answer.content) && answer.author.id === member.id;}
                    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
                        .then(() => {
                        let marry2 = new Discord.MessageEmbed().setTitle("✅Operation complete")
                        message.edit(marry2);
                        let marry1 = new Discord.MessageEmbed().setTitle("🎉Congratulations on adoption!").setDescription(user2.name + "🔗" + user.name).setFooter("🔰Always take care of pets!").setTimestamp()
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
                            let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                            message.edit(marry2)});
                    message.channel.awaitMessages(filter2, { max: 2, time: 20000, errors: ['time'] })
                        .then(() => {
                            let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                            message.edit(marry2)}).catch(() => {
                                let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                                message.edit(marry2);
                            });
                   })
                }})})}}else{
            message2.channel.send("🔄Processing").then((message) => {
            if(isNaN(args[1]) === true) {return message2.channel.send("❌Please fill in ID!")}
            const member=bot.users.cache.get(args[1])
            if(member) {if(member.id === message2.author.id) return message2.channel.send("❌You can't support yourself!")}
            if(user2.pet.indexOf(member.id) != -1) {return message2.channel.send("❌You have adopted this pet!")}
            fs.readFile('./users/'+ args[1] +'.json',function (err,userInfo) {
                if(err) {return message.channel.send("❌There is no such member or this member has no profile")}else{
                var user = userInfo.toString();
                user = JSON.parse(user);
            let marry = new Discord.MessageEmbed()
            .setTitle("Please pet within 20 seconds")
            .setDescription("enter `yes` Adopt\nenter `no` cancel")
            message.edit("<@" + args[1] + "> ")
            message.channel.send(marry).then((message) => {
                const filter = answer => {
                    return [`yes`].includes(answer.content) && answer.author.id === args[1];}
                const filter2 = answer => {
                    return [`no`].includes(answer.content) && answer.author.id === args[1];}
        message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
            .then(() => {
            let marry2 = new Discord.MessageEmbed().setTitle("✅Operation complete")
            message.edit(marry2);
            let marry1 = new Discord.MessageEmbed().setTitle("🎉Congratulations on adoption!").setDescription(user2.name + "🔗" + user.name).setFooter("🔰Take care of your pets from time to time!").setTimestamp()
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
                let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                message.edit(marry2)});
        message.channel.awaitMessages(filter2, { max: 2, time: 20000, errors: ['time'] })
            .then(() => {
                let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                message.edit(marry2)}).catch(() => {
                    let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                    message.edit(marry2);
                });
        })}
    })})}
        }})}else if(args[0] === "remove") {
            fs.readFile('./users/'+ message2.author.id +'.json',function (err2,userInfo2) {
                var user2 = userInfo2.toString();
                user2 = JSON.parse(user2);
                if(err2) {return message2.channel.send("❌Error reading data!")}
                        if(args[1] == ``) {message2.channel.send("❌You must mention the member or fill in the ID!")}else{
                            if(message2.mentions.users.size){
                            const member=message2.mentions.users.first()
                            if(member){
                            let id = member.id
                            if(id === message2.author.id) {return message2.channel.send("❌You can't abandon yourself!")}
                            if(user2.pet.indexOf(id) === -1) {return message2.channel.send("❌No pet!")}
                                fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                                    if(err) {return message2.channel.send("❌No such member or no information of this member")}else{
                                    var user = userInfo.toString();
                                    user = JSON.parse(user);
                            if(user2.pet.indexOf(member.id) != "-1") {
                                message2.channel.send("🔄處理中").then((message) => {
                                    fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                                        if(err) {return message.channel.send("❌No such member or no information of this member")}else{
                                        var user = userInfo.toString();
                                        user = JSON.parse(user);
                        let marry = new Discord.MessageEmbed()
                        .setTitle("You have to be sure!!")
                        .setDescription("enter `yes` Abandoned\n輸入 `no` cancel")
                        message2.channel.send(marry).then((message) => {
                            const filter = answer => {
                                return [`yes`].includes(answer.content) && answer.author.id === message2.author.id;}
                            const filter2 = answer => {
                                return [`no`].includes(answer.content) && answer.author.id === message2.author.id;}
                    message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
                        .then(() => {
                        let marry2 = new Discord.MessageEmbed().setTitle("✅Operation complete")
                        message.edit(marry2);
                        let marry1 = new Discord.MessageEmbed().setTitle("❌Abandoned!").setDescription(user2.name + "❌" + user.name).setFooter("Hope to find a better pet :((  ").setTimestamp()
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
                            let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                            message.edit(marry2)});
                    message.channel.awaitMessages(filter2, { max: 2, time: 10000, errors: ['time'] })
                        .then(() => {
                            let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                            message.edit(marry2)}).catch(() => {
                                let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                                message.edit(marry2);
                            });})}})})}}})}}else{
                                message2.channel.send("🔄Processing").then((message) => {
                                    if(isNaN(args[1]) === true) {return message2.channel.send("❌Please fill in the ID!")}
                                    const member=bot.users.cache.get(args[1])
                                    if(member) {if(member.id === message2.author.id) return message2.channel.send("❌You can't abandon yourself!")}
                                    if (user2.pet.indexOf(member.id) === -1) {return message2.channel.send("❌No such pet!")}
                                    fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                                        if(err) {return message.channel.send("❌No such member or no information of this member")}else{
                                        var user = userInfo.toString();
                                        user = JSON.parse(user);
                                        if(member.id === message2.author.id) {return message2.channel.send("❌You can't support yourself!")}
                                        if(user2.pet.indexOf(member.id) != "-1") {
                                            message2.channel.send("🔄Processing").then((message) => {
                                                fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
                                                    if(err) {return message.channel.send("❌No such member or no information of this member")}else{
                                                    var user = userInfo.toString();
                                                    user = JSON.parse(user);
                                    let marry = new Discord.MessageEmbed()
                                    .setTitle("You have to be sure!!")
                                    .setDescription("enter `yes` Abandoned\nenter `no` cancel")
                                    message2.channel.send(marry).then((message) => {
                                        const filter = answer => {
                                            return [`yes`].includes(answer.content) && answer.author.id === message2.author.id;}
                                        const filter2 = answer => {
                                            return [`no`].includes(answer.content) && answer.author.id === message2.author.id;}
                                message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
                                    .then(() => {
                                    let marry2 = new Discord.MessageEmbed().setTitle("✅Operation complete")
                                    message.edit(marry2);
                                    let marry1 = new Discord.MessageEmbed().setTitle("❌Abandoned!").setDescription(user2.name + "❌" + user.name).setFooter("Hope to find a better pet:((  ").setTimestamp()
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
                                        let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                                        message.edit(marry2)});
                                message.channel.awaitMessages(filter2, { max: 2, time: 10000, errors: ['time'] })
                                    .then(() => {
                                        let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                                        message.edit(marry2)}).catch(() => {
                                            let marry2 = new Discord.MessageEmbed().setTitle("❌Operation canceled!")
                                            message.edit(marry2);
                                        })})}}
                            )})}
                        }})})}}})
        }else if(args[0] === "disconnect") {
            
        }else if(args[0] === "feed") {

        }else if(args[0] === "pat") {

        }else{
            let pethelp = new Discord.MessageEmbed().setColor( message2.member.roles.highest.color).setTitle("Pet Help Page").setDescription("- `add [user]` Add pet\n- `remove [寵物]` Remove pet\n- `disconnect [host]` Disconnect from the owner").setTimestamp()
            message2.channel.send(pethelp)
        }
    }
},
"card": {
    description: "用戶資料",
    fun: function(bot,message,a,args) {
    if(message.mentions.users.size){
        let member=message.mentions.users.first()
    if(member){
    fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
        if(err) {return message.channel.send("❌No member found!")}
        var user = userInfo.toString();
        user = JSON.parse(user);
        let userdata = new Discord.MessageEmbed()
        .setColor( message.member.roles.highest.color)
        .setTitle("Rabbit House " + " Employee identification card")
        .setDescription(member.username+" "+member.id)
        .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}))
        .addField("work document", "Money: " + user.money + "\nLevel/Exp: " + user.rank + " / " + user.exp)
        .addField("Interactions","Chino: "+user.chino +" Times\nCocoa: "+user.cocoa +" Times\nTippy: "+user.tippy +" Times\nOther: "+user.other +" Times")
        .addField("Cumulative work " + user.work + " Times "+" \nContinuously working " + user.worktoal.work + " day","First job " + user.time)
        .setFooter("Identification card   ▋▏▋▍▋▏▏▍▋▏▍▍▋▏▋▍▉▏▍")
        .setTimestamp()
        message.channel.send(userdata)
})}}else{
    if(args[0] != null) {
    let member=bot.users.cache.get(args[0])
    if(member) {
        fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
            if(err) {return message.channel.send("❌No member found!")}
            var user = userInfo.toString();
            user = JSON.parse(user);
            let userdata = new Discord.MessageEmbed()
            .setColor( message.member.roles.highest.color)
            .setTitle("Rabbit House " + " Employee identification card")
            .setDescription(member.username+" "+member.id)
            .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}))
            .addField("work document", "Money: " + user.money + "\nLevel/Exp: " + user.rank + " / " + user.exp)
            .addField("Interactions","Chino: "+user.chino +" Times\nCocoa: "+user.cocoa +" Times\nTippy: "+user.tippy +" Times\nOther: "+user.other +" Times")
            .addField("Cumulative work " + user.work + " Times "+"\n Continuously working " + user.worktoal.work + " day","First job " + user.time)
            .setFooter("Identification card   ▋▏▋▍▋▏▏▍▋▏▍▍▋▏▋▍▉▏▍")
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
        .setTitle("Rabbit House " + " Employee identification card")
        .setDescription(message.author.username+" "+message.author.id)
        .setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}))
        .addField("work document", "Money: " + user.money + "\nLevel/Exp: " + user.rank + " / " + user.exp)
        .addField("Interactions","Chino: "+user.chino +" Times\nCocoa: "+user.cocoa +" Times\nTippy: "+user.tippy +" Times\nOther: "+user.other +" Times")
        .addField("Cumulative work " + user.work + " Times "+"\n Continuously working " + user.worktoal.work + " day","First job " + user.time)
        .setFooter("Identification card  ▋▏▋▍▋▏▏▍▋▏▍▍▋▏▋▍▉▏▍")
        .setTimestamp()
        message.channel.send(userdata)
})}}
}},
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
}
}
async function access(bot,message,args) {
    if(!message.guild) return message.channel.send("Can't read access! `Please use this command in guild!`")
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
    if(message.guild.owner.user.id == member.id) {var owner = "👑 Yes"}else{var owner = "💂‍♂️ No"}
    let acc = new Discord.MessageEmbed()
    .setColor(member.presence.member.roles.highest.color)
    .setTitle(member.user.username +" Permission table")
    .setDescription("Highest authority: " + "<@&" + member.presence.member.roles.highest + "> \nOwner: "+ owner)
    .addField("Permissions table", "Manager  "+admi+"\nManagement server  "+guild+"\nManage channels  "+manage+"\nView audit diary  "+log+"\nKicke member  "+kick+"\nBan member  "+ban+"\nChange role "+role+"\nedit webhooks  "+hook+"\nMention everyone  "+tag+"\nEdit emoji  "+emoji+"\nCreate link  "+inv)
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
            if(message.guild.owner.user.id == member.id) {var owner = "👑 Yes"}else{var owner = "💂‍♂️ No"}
            let acc = new Discord.MessageEmbed()
            .setColor(member.presence.member.roles.highest.color)
            .setTitle(member.user.username +" Permission table")
            .setDescription("Highest authority: " + "<@&" + member.presence.member.roles.highest + "> \nOwner: "+ owner)
            .addField("Permissions table", "Manager  "+admi+"\nManagement server  "+guild+"\nManage channels  "+manage+"\nView audit diary  "+log+"\nKicke member  "+kick+"\nBan member  "+ban+"\nChange role "+role+"\nedit webhooks  "+hook+"\nMention everyone  "+tag+"\nEdit emoji  "+emoji+"\nCreate link  "+inv)
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
        if(message.guild.owner.user.id == message.author.id) {var owner = "👑 Yes"}else{var owner = "💂‍♂️ No"}
        let acc = new Discord.MessageEmbed()
        .setColor(message.member.roles.highest.color)
        .setTitle(message.author.username +" Permission table")
        .setDescription("Highest authority: " + "<@&" + message.member.roles.highest + "> \nOwner: "+ owner)
        .addField("Permissions table", "Manager  "+admi+"\nManagement server  "+guild+"\nManage channels  "+manage+"\nView audit diary  "+log+"\nKicke member  "+kick+"\nBan member  "+ban+"\nChange role "+role+"\nedit webhooks  "+hook+"\nMention everyone  "+tag+"\nEdit emoji  "+emoji+"\nCreate link  "+inv)
        message.channel.send(acc)
    }}
}
