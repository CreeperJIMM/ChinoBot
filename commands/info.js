const Discord = require("discord.js")
const fs =require("fs")
const { version } = require('../config.json')
const { prefix } = require('../config.json');
module.exports= {
    "uinfo":{
        description: "用戶資料",
        fun: function(bot,message,a,args) {
            userinfo(bot,message,args)
        }
    },
    "ui":{
        description: "用戶資料",
        fun: function(bot,message,a,args) {
            userinfo(bot,message,args)
        }
    },
    "sinfo":{
        description: "伺服器資料",
        fun: function(bot,message,a,args) {
            server(bot,message,args)
        }
    },
    "si":{
        description: "伺服器資料",
        fun: function(bot,message,a,args) {
            server(bot,message,args)
        }
    },
    "binfo":{
        description: "機器人資料",
        fun: function(bot,message,a,args) {
            botinfo(bot,message,args)
        }
    },
    "bi":{
        description: "機器人資料",
        fun: function(bot,message,a,args) {
            botinfo(bot,message,args,a)
        }
    }
}
async function userinfo(bot,message,args) {
    if(!message.guild) return;
    const presence = `${message.author.presence.status}`
    const Bott = `${message.author.bot}`
    if(args[0] != null) {
    if(message.mentions.users.size){
        let member=message.mentions.users.first()
        const member2 = message.guild.member(member);
    if(member){
      const presence = `${member.presence.status}`
      const Bott = `${member.bot}`
    if(Bott === "true") {var Bot = "是"}else if(Bott === "false") {var Bot = "否"}
    if(presence === "online") {var online = "<a:online:772101451463393330> 上線"}else if(presence === "idle") {var online = "<a:afk:772101450833985577> 間置"}else if(presence === "dnd") {var online = "<a:dnd:772101451076993065> 請勿打擾"}else if(presence === "offline") {var online = "<a:offline:772101451266129920> 離線"}
    let args = member2.presence.guild.joinedAt.toUTCString().split(" ")
    if(args[2] == "Jan") {var mon = "1月"}else if(args[2] == "Feb") {var mon = "2月"}else if(args[2] == "Mar") {var mon = "3月"}else if(args[2] == "Apr") {var mon = "4月"}else if(args[2] == "May") {var mon = "5月"}else if(args[2] == "Jun") {var mon = "6月"}else if(args[2] == "Jul") {var mon = "7月"}else if(args[2] == "Aug") {var mon = "8月"}else if(args[2] == "Sep") {var mon = "9月"}else if(args[2] == "Oct") {var mon = "10月"}else if(args[2] == "Nov") {var mon = "11月"}else if(args[2] == "Dec") {var mon = "12月"};if(args[0] == "Mon,") {var week = "星期一"}else if(args[0] == "Tue,") {var week = "星期二"}else if(args[0] == "Wed,") {var week = "星期三"}else if(args[0] == "Thu,") {var week = "星期四"}else if(args[0] == "Fri,") {var week = "星期五"}else if(args[0] == "Sat,") {var week = "星期六"}else if(args[0] == "Sun,") {var week = "星期日"}
    let hor = member2.presence.guild.joinedAt.getUTCHours(8);let H = (hor+8) + args[4].substring(2);let time = args[3] + " " + H + " " + mon + " " + args[1] +"日 "+week + " UTC+8"
    let args2 = member2.user.createdAt.toUTCString().split(" ")
    if(args2[2] == "Jan") {var mon = "1月"}else if(args2[2] == "Feb") {var mon = "2月"}else if(args2[2] == "Mar") {var mon = "3月"}else if(args2[2] == "Apr") {var mon = "4月"}else if(args2[2] == "May") {var mon = "5月"}else if(args2[2] == "Jun") {var mon = "6月"}else if(args2[2] == "Jul") {var mon = "7月"}else if(args2[2] == "Aug") {var mon = "8月"}else if(args2[2] == "Sep") {var mon = "9月"}else if(args2[2] == "Oct") {var mon = "10月"}else if(args2[2] == "Nov") {var mon = "11月"}else if(args2[2] == "Dec") {var mon = "12月"};if(args2[0] == "Mon,") {var week = "星期一"}else if(args2[0] == "Tue,") {var week = "星期二"}else if(args2[0] == "Wed,") {var week = "星期三"}else if(args2[0] == "Thu,") {var week = "星期四"}else if(args2[0] == "Fri,") {var week = "星期五"}else if(args2[0] == "Sat,") {var week = "星期六"}else if(args2[0] == "Sun,") {var week = "星期日"}
    let hor2 = member2.user.createdAt.getUTCHours(8);let H2 = (hor2+8) + args2[4].substring(2);let time2 = args2[3] + " " + H2 + " " + mon + " " + args2[1] +"日 "+week + " UTC+8"
    fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
        if(err) {
    const infoEmbed = new Discord.MessageEmbed()
      .setColor( member2.presence.member.roles.highest.color )
      .setTitle("名稱 " + member.username + "#" + member.discriminator ,true)
      .setDescription("ID:  " + member.id ,true )
      .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
      .addField("機器人" , Bot ,true )
      .addField("狀態", online ,true)
      .addField("加入日期(上次進入)", `${time}`, false)
      .addField("創帳日期", `${time2}`, true)
      {message.channel.send(infoEmbed)}}else{
        var user = userInfo.toString();
        user = JSON.parse(user);
        let mary = [user.marry]
        if(mary != "[object Object]" || mary != "") {
            const member=bot.users.cache.get(user.marry)
            if(member) {
            var mary2 = member.username+"#" + member.discriminator}else{var mary2 = "單身"}}else{var mary2 = "單身"}
            if(user.hostname != "[object Object]" || user.hostname != "") {var host = user.hostname}else{var host = "無"}
            if(user.petname != "[object Object]" || user.petname != "") {var pet = user.petname}else{var pet = "無"}
        const infoEmbed = new Discord.MessageEmbed()
        .setColor( member2.presence.member.roles.highest.color )
        .setTitle("名稱 " + member.username + "#" + member.discriminator ,true)
        .setDescription("ID:  " + member.id ,true )
        .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
        .addField("機器人" , Bot ,true )
        .addField("狀態", online ,true)
        .addField("加入日期(上次進入)", `${time}`, false)
        .addField("創帳日期", `${time2}`, true)
        .addField("金錢($)", user.money , false)
        .addField("感情狀態", mary2 ,true)
        .addField("主人", "឵ ឵឵" + host ,false)
        .addField("寵物","឵ ឵឵" + pet ,false)
        {message.channel.send(infoEmbed)}
      }}
    )}}else{
    const member=bot.users.cache.get(args[0])
    const member2 = message.guild.member(member);
        if(member){
          const presence = `${member.presence.status}`
          const Bott = `${member.bot}`
        if(Bott === "true") {var Bot = "是"}else if(Bott === "false") {var Bot = "否"}
        if(presence === "online") {var online = "<a:online:772101451463393330> 上線"}else if(presence === "idle") {var online = "<a:afk:772101450833985577> 間置"}else if(presence === "dnd") {var online = "<a:dnd:772101451076993065> 請勿打擾"}else if(presence === "offline") {var online = "<a:offline:772101451266129920> 離線"}
        let args = member2.presence.guild.joinedAt.toUTCString().split(" ")
        if(args[2] == "Jan") {var mon = "1月"}else if(args[2] == "Feb") {var mon = "2月"}else if(args[2] == "Mar") {var mon = "3月"}else if(args[2] == "Apr") {var mon = "4月"}else if(args[2] == "May") {var mon = "5月"}else if(args[2] == "Jun") {var mon = "6月"}else if(args[2] == "Jul") {var mon = "7月"}else if(args[2] == "Aug") {var mon = "8月"}else if(args[2] == "Sep") {var mon = "9月"}else if(args[2] == "Oct") {var mon = "10月"}else if(args[2] == "Nov") {var mon = "11月"}else if(args[2] == "Dec") {var mon = "12月"};if(args[0] == "Mon,") {var week = "星期一"}else if(args[0] == "Tue,") {var week = "星期二"}else if(args[0] == "Wed,") {var week = "星期三"}else if(args[0] == "Thu,") {var week = "星期四"}else if(args[0] == "Fri,") {var week = "星期五"}else if(args[0] == "Sat,") {var week = "星期六"}else if(args[0] == "Sun,") {var week = "星期日"}
        let hor = member2.presence.guild.joinedAt.getUTCHours(8);let H = (hor+8) + args[4].substring(2);let time = args[3] + " " + H + " " + mon + " " + args[1] +"日 "+week + " UTC+8"
        let args2 = member2.user.createdAt.toUTCString().split(" ")
        if(args2[2] == "Jan") {var mon = "1月"}else if(args2[2] == "Feb") {var mon = "2月"}else if(args2[2] == "Mar") {var mon = "3月"}else if(args2[2] == "Apr") {var mon = "4月"}else if(args2[2] == "May") {var mon = "5月"}else if(args2[2] == "Jun") {var mon = "6月"}else if(args2[2] == "Jul") {var mon = "7月"}else if(args2[2] == "Aug") {var mon = "8月"}else if(args2[2] == "Sep") {var mon = "9月"}else if(args2[2] == "Oct") {var mon = "10月"}else if(args2[2] == "Nov") {var mon = "11月"}else if(args2[2] == "Dec") {var mon = "12月"};if(args2[0] == "Mon,") {var week = "星期一"}else if(args2[0] == "Tue,") {var week = "星期二"}else if(args2[0] == "Wed,") {var week = "星期三"}else if(args2[0] == "Thu,") {var week = "星期四"}else if(args2[0] == "Fri,") {var week = "星期五"}else if(args2[0] == "Sat,") {var week = "星期六"}else if(args2[0] == "Sun,") {var week = "星期日"}
        let hor2 = member2.user.createdAt.getUTCHours(8);let H2 = (hor2+8) + args2[4].substring(2);let time2 = args2[3] + " " + H2 + " " + mon + " " + args2[1] +"日 "+week + " UTC+8"
        fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
            if(err) {
        const infoEmbed = new Discord.MessageEmbed()
          .setColor(member2.presence.member.roles.highest.color)
          .setTitle("名稱 " + member.username + "#" + member.discriminator ,true)
          .setDescription("ID:  " + member.id ,true )
          .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
          .addField("機器人" , Bot ,true )
          .addField("狀態", online ,true)
          .addField("加入日期(上次進入)", `${time}`, false)
          .addField("創帳日期", `${time2}`, true)
          {message.channel.send(infoEmbed)}}else{
            var user = userInfo.toString();
            user = JSON.parse(user);
            let mary = [user.marry]
            if(mary != "[object Object]" || mary != "") {
                const member=bot.users.cache.get(user.marry)
                if(member) {
                var mary2 = member.username+"#" + member.discriminator}else{var mary2 = "單身"}}else{var mary2 = "單身"}
                if(user.hostname != "[object Object]" || user.hostname != "") {var host = user.hostname}else{var host = "無"}
                if(user.petname != "[object Object]" || user.petname != "") {var pet = user.petname}else{var pet = "無"}
            const infoEmbed = new Discord.MessageEmbed()
            .setColor(member2.presence.member.roles.highest.color)
            .setTitle("名稱 " + member.username + "#" + member.discriminator ,true)
            .setDescription("ID:  " + member.id ,true )
            .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
            .addField("機器人" , Bot ,true )
            .addField("狀態", online ,true)
            .addField("加入日期(上次進入)", `${time}`, false)
            .addField("創帳日期", `${time2}`, true)
            .addField("金錢($)", user.money , false)
            .addField("感情狀態", mary2 ,true)
            .addField("主人", "឵ ឵឵" + host ,false)
            .addField("寵物","឵ ឵឵" + pet ,false)
            {message.channel.send(infoEmbed)}
          }}
    )}else{
      return  message.channel.send("❌找不到這個成員")}
}}else{
    if(Bott === "true") {var Bot = "是"}else if(Bott === "false") {var Bot = "否"}
    if(presence === "online") {var online = "<a:online:772101451463393330> 上線"}else if(presence === "idle") {var online = "<a:afk:772101450833985577> 間置"}else if(presence === "dnd") {var online = "<a:dnd:772101451076993065> 請勿打擾"}else if(presence === "offline") {var online = "<a:offline:772101451266129920> 離線"}
    let args = message.member.joinedAt.toUTCString().split(" ")
    if(args[2] == "Jan") {var mon = "1月"}else if(args[2] == "Feb") {var mon = "2月"}else if(args[2] == "Mar") {var mon = "3月"}else if(args[2] == "Apr") {var mon = "4月"}else if(args[2] == "May") {var mon = "5月"}else if(args[2] == "Jun") {var mon = "6月"}else if(args[2] == "Jul") {var mon = "7月"}else if(args[2] == "Aug") {var mon = "8月"}else if(args[2] == "Sep") {var mon = "9月"}else if(args[2] == "Oct") {var mon = "10月"}else if(args[2] == "Nov") {var mon = "11月"}else if(args[2] == "Dec") {var mon = "12月"};if(args[0] == "Mon,") {var week = "星期一"}else if(args[0] == "Tue,") {var week = "星期二"}else if(args[0] == "Wed,") {var week = "星期三"}else if(args[0] == "Thu,") {var week = "星期四"}else if(args[0] == "Fri,") {var week = "星期五"}else if(args[0] == "Sat,") {var week = "星期六"}else if(args[0] == "Sun,") {var week = "星期日"}
    let hor = message.member.joinedAt.getUTCHours(8);let H = (hor+8) + args[4].substring(2);let time = args[3] + " " + H + " " + mon + " " + args[1] +"日 "+week + " UTC+8"
    let args2 = message.author.createdAt.toUTCString().split(" ")
    if(args2[2] == "Jan") {var mon = "1月"}else if(args2[2] == "Feb") {var mon = "2月"}else if(args2[2] == "Mar") {var mon = "3月"}else if(args2[2] == "Apr") {var mon = "4月"}else if(args2[2] == "May") {var mon = "5月"}else if(args2[2] == "Jun") {var mon = "6月"}else if(args2[2] == "Jul") {var mon = "7月"}else if(args2[2] == "Aug") {var mon = "8月"}else if(args2[2] == "Sep") {var mon = "9月"}else if(args2[2] == "Oct") {var mon = "10月"}else if(args2[2] == "Nov") {var mon = "11月"}else if(args2[2] == "Dec") {var mon = "12月"};if(args2[0] == "Mon,") {var week = "星期一"}else if(args2[0] == "Tue,") {var week = "星期二"}else if(args2[0] == "Wed,") {var week = "星期三"}else if(args2[0] == "Thu,") {var week = "星期四"}else if(args2[0] == "Fri,") {var week = "星期五"}else if(args2[0] == "Sat,") {var week = "星期六"}else if(args2[0] == "Sun,") {var week = "星期日"}
    let hor2 = message.author.createdAt.getUTCHours(8);let H2 = (hor2+8) + args2[4].substring(2);let time2 = args2[3] + " " + H2 + " " + mon + " " + args2[1] +"日 "+week + " UTC+8"
    fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
        if(err) {  
    const infoEmbed = new Discord.MessageEmbed()
      .setColor(message.member.roles.highest.color )
      .setTitle("名稱 " + message.author.username + "#" + message.author.discriminator ,true)
      .setDescription("ID:  " + message.author.id ,true )
      .setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
      .addField("機器人" , Bot ,true )
      .addField("狀態", online ,true)
      .addField("身分組", message.member.roles.highest , false)
      .addField("加入日期(第一次進入)", `${time}`, false)
      .addField("創帳日期", `${time2}`, true)
      {message.channel.send(infoEmbed)}}else{
        var user = userInfo.toString();
        user = JSON.parse(user);
        let mary = [user.marry]
        if(mary != "[object Object]" || mary != "") {
            const member=bot.users.cache.get(user.marry)
            if(member) {
            var mary2 = member.username+"#" + member.discriminator}else{var mary2 = "單身"}}else{var mary2 = "單身"}
        if(user.hostname != "[object Object]" || user.hostname != "") {var host = user.hostname}else{var host = "無"}
        if(user.petname != "[object Object]" || user.petname != "") {var pet = user.petname}else{var pet = "無"}
        const infoEmbed = new Discord.MessageEmbed()
        .setColor( message.member.roles.highest.color )
        .setTitle("名稱 " + message.author.username + "#" + message.author.discriminator ,true)
        .setDescription("ID:  " + message.author.id ,true )
        .setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
        .addField("機器人" , Bot ,true )
        .addField("狀態", online ,true)
        .addField("加入日期(第一次進入)", `${time}`, false)
        .addField("創帳日期", `${time2}`, true)
        .addField("金錢($)", user.money , false)
        .addField("感情狀態", mary2 ,true)
        .addField("主人", "឵ ឵឵" + host ,false)
        .addField("寵物","឵ ឵឵" + pet ,false)
        {message.channel.send(infoEmbed)}
      }}
)}};
async function server(bot,message) {
    if(!message.guild) return;
    let args = message.channel.guild.createdAt.toUTCString().split(" ")
    if(args[2] == "Jan") {var mon = "1月"}else if(args[2] == "Feb") {var mon = "2月"}else if(args[2] == "Mar") {var mon = "3月"}else if(args[2] == "Apr") {var mon = "4月"}else if(args[2] == "May") {var mon = "5月"}else if(args[2] == "Jun") {var mon = "6月"}else if(args[2] == "Jul") {var mon = "7月"}else if(args[2] == "Aug") {var mon = "8月"}else if(args[2] == "Sep") {var mon = "9月"}else if(args[2] == "Oct") {var mon = "10月"}else if(args[2] == "Nov") {var mon = "11月"}else if(args[2] == "Dec") {var mon = "12月"};if(args[0] == "Mon,") {var week = "星期一"}else if(args[0] == "Tue,") {var week = "星期二"}else if(args[0] == "Wed,") {var week = "星期三"}else if(args[0] == "Thu,") {var week = "星期四"}else if(args[0] == "Fri,") {var week = "星期五"}else if(args[0] == "Sat,") {var week = "星期六"}else if(args[0] == "Sun,") {var week = "星期日"}
    let hor = message.channel.guild.createdAt.getUTCHours(8);let H = (hor+8) + args[4].substring(2);let time = args[3] + " " + H + " " + mon + " " + args[1] +"日 "+week + " UTC+8"
    const infoEmbed = new Discord.MessageEmbed()
    .setColor('#3aad48')
    .setTitle("伺服器 " + message.guild.name ,true)
    infoEmbed.setDescription("ID:  " + message.guild.id ,true )
    infoEmbed.setThumbnail(message.guild.iconURL({format: "png", dynamic: true ,size: 512}), true)
    try {infoEmbed.addField("服主", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)} catch (error) {infoEmbed.addField("服主", `抓不到QWQ`, true)} 
    infoEmbed.addField("地區", `${message.guild.region}`, true)
    infoEmbed.addField("頭貼","  ---->" ,true)
    infoEmbed.addField(`所有成員 - ` + message.guild.memberCount,`💂‍♂️成員: ` + message.guild.members.cache.filter(member =>!member.user.bot).size + `\n` + `🤖機器人: ` + message.guild.members.cache.filter(users =>users.user.bot).size  , true)
    try {infoEmbed.addField("上線人數 - " + message.guild.presences.cache.size,`<a:online:772101451463393330> 線上: ` + message.guild.presences.cache.filter(user => user.member.presence.status === 'online').size + `\n` + `<a:afk:772101450833985577> 間置: ` + message.guild.presences.cache.filter(user => user.member.presence.status === 'idle').size+ `\n` + `<a:dnd:772101451076993065> 勿擾: ` + message.guild.presences.cache.filter(user => user.member.presence.status === 'dnd').size +"\n"+ `<a:offline:772101451266129920> 離線: ` + message.guild.members.cache.filter(user => user.presence.status === 'offline').size ,true) }catch{infoEmbed.addField("上線人數 -","發生錯誤！\n請稍後再試！",true)}
    infoEmbed.addField("頻道總數 - " + message.guild.channels.cache.size, '📚類別數: ' + message.guild.channels.cache.filter(c => c.type === "category").size + "\n" +  '📄文字頻道: ' + message.guild.channels.cache.filter(c => c.type === "text").size + '\n' + '🔊語音頻道: ' + message.guild.channels.cache.filter(c => c.type === "voice").size + '\n' + '📢公告頻道: ' + message.guild.channels.cache.filter(c => c.type === "news").size + '\n' + '🛒商店頻道: ' + message.guild.channels.cache.filter(c => c.type === "store").size  , true)
    infoEmbed.addField("表情總數 - " + message.guild.emojis.cache.size , "🖼靜態表情: " + message.guild.emojis.cache.filter(emojis => !emojis.animated).size + "\n" + "🎞動態表情: " + message.guild.emojis.cache.filter(emojis => emojis.animated).size ,true)
    infoEmbed.addField("加成狀態", "等級: " + message.guild.premiumTier + "\n" + "加成: " + message.guild.premiumSubscriptionCount ,true)
    infoEmbed.addField("身分組數", `${message.guild.roles.cache.size}`,true)
    infoEmbed.addField("驗證等級", message.guild.verificationLevel )
    infoEmbed.addField("創群日期", time )
    await message.channel.send(infoEmbed)
}
const Open = new Date()
async function botinfo(bot,message,ag,prefix) {
    let Today=new Date();
    const member=bot.users.cache.get(message.guild.me.id)
    const member2 = message.guild.member(member);
    let args = message.guild.me.joinedAt.toUTCString().split(" ")
    if(args[2] == "Jan") {var mon = "1月"}else if(args[2] == "Feb") {var mon = "2月"}else if(args[2] == "Mar") {var mon = "3月"}else if(args[2] == "Apr") {var mon = "4月"}else if(args[2] == "May") {var mon = "5月"}else if(args[2] == "Jun") {var mon = "6月"}else if(args[2] == "Jul") {var mon = "7月"}else if(args[2] == "Aug") {var mon = "8月"}else if(args[2] == "Sep") {var mon = "9月"}else if(args[2] == "Oct") {var mon = "10月"}else if(args[2] == "Nov") {var mon = "11月"}else if(args[2] == "Dec") {var mon = "12月"};if(args[0] == "Mon,") {var week = "星期一"}else if(args[0] == "Tue,") {var week = "星期二"}else if(args[0] == "Wed,") {var week = "星期三"}else if(args[0] == "Thu,") {var week = "星期四"}else if(args[0] == "Fri,") {var week = "星期五"}else if(args[0] == "Sat,") {var week = "星期六"}else if(args[0] == "Sun,") {var week = "星期日"}
    let hor = message.guild.me.joinedAt.getUTCHours(8);let H = (hor+8) + args[4].substring(2);let time = args[3] + " " + H + " " + mon + " " + args[1] +"日 "+week + " UTC+8"
    let args2 = member2.user.createdAt.toUTCString().split(" ")
    if(args2[2] == "Jan") {var mon = "1月"}else if(args2[2] == "Feb") {var mon = "2月"}else if(args2[2] == "Mar") {var mon = "3月"}else if(args2[2] == "Apr") {var mon = "4月"}else if(args2[2] == "May") {var mon = "5月"}else if(args2[2] == "Jun") {var mon = "6月"}else if(args2[2] == "Jul") {var mon = "7月"}else if(args2[2] == "Aug") {var mon = "8月"}else if(args2[2] == "Sep") {var mon = "9月"}else if(args2[2] == "Oct") {var mon = "10月"}else if(args2[2] == "Nov") {var mon = "11月"}else if(args2[2] == "Dec") {var mon = "12月"};if(args2[0] == "Mon,") {var week = "星期一"}else if(args2[0] == "Tue,") {var week = "星期二"}else if(args2[0] == "Wed,") {var week = "星期三"}else if(args2[0] == "Thu,") {var week = "星期四"}else if(args2[0] == "Fri,") {var week = "星期五"}else if(args2[0] == "Sat,") {var week = "星期六"}else if(args2[0] == "Sun,") {var week = "星期日"}
    let hor2 = member2.user.createdAt.getUTCHours(8);let H2 = (hor2+8) + args2[4].substring(2);let time2 = args2[3] + " " + H2 + " " + mon + " " + args2[1] +"日 "+week + " UTC+8"
    let day = (Today.getDate() - Open.getDate())
    if(Today.getHours() - Open.getHours() <0 || Today.getHours() - Open.getHours() != 0) {day -1;var hour = 24 - (Today.getHours() - Open.getHours())}else{var hour = (Today.getHours() - Open.getHours())}
    const infoEmbed = new Discord.MessageEmbed()
    .setColor('#3aad48')
    .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}))
    .setTitle("機器人資訊 " + member.username + "#" + member.discriminator ,true)
    .setDescription("ID:  " + member.id ,true )
    .addField("前綴", prefix ,true)
    .addField("機器人版本", `${version}` ,true)
    .addField("使用架構", "JS(JavaScript) / Discord.js")
    .addField("架構版本 node/discord.js", "12.18.2(win7 32bit) / 12.4.1")
    .addField("在群數", `${bot.guilds.cache.size}` ,true) 
    .addField("累計開機", day+"天"+hour + "小時" + (Today.getMinutes() - Open.getMinutes()) + "分鐘" ,true)
    .addField("受邀日期", `${time}`)
    .addField("創帳日期", `${time2}`, true)
    .setTimestamp()
    .setFooter("製作BY 苦力怕怕", 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png')
    {message.channel.send(infoEmbed)};
}