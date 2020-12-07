const Discord = require("discord.js")
const { version } = require('../config.json')
const fs =require("fs")
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
    if(member){
      const presence = `${member.presence.status}`
      const Bott = `${member.bot}`
    if(Bott === "true") {var Bot = "Yes"}else if(Bott === "false") {var Bot = "No"}
    if(presence === "online") {var online = "<a:online:732819208991408199> Online"}else if(presence === "idle") {var online = "<a:afk:732819258274480229> AFK"}else if(presence === "dnd") {var online = "<a:dnd:732819300104142899> dnd"}else if(presence === "offline") {var online = "<a:offline:732819336535736381> offline"}
    fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
        if(err) {  
    const infoEmbed = new Discord.MessageEmbed()
      .setColor( message.member.roles.highest.color )
      .setTitle("Name " + member.username + "#" + member.discriminator ,true)
      .setDescription("ID:  " + member.id ,true )
      .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
      .addField("Bot" , Bot ,true )
      .addField("Status", online ,true)
      .addField("Join date", `${message.guild.joinedAt.toUTCString()}`, false)
      .addField("Create date", `${member.createdAt.toUTCString()}`, true)
      {message.channel.send(infoEmbed)}}else{
        var user = userInfo.toString();
        user = JSON.parse(user);
        let mary = [user.marry]
        if(mary != "[object Object]" || mary != "") {
            const member=bot.users.cache.get(user.marry)
            if(member) {
            var mary2 = member.username+"#" + member.discriminator}else{var mary2 = "single"}}else{var mary2 = "single"}
        const infoEmbed = new Discord.MessageEmbed()
        .setColor( message.member.roles.highest.color )
        .setTitle("Name " + member.username + "#" + member.discriminator ,true)
        .setDescription("ID:  " + member.id ,true )
        .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
        .addField("Bot" , Bot ,true )
        .addField("Status", online ,true)
        .addField("Join date", `${message.guild.joinedAt.toUTCString()}`, false)
        .addField("Create date", `${member.createdAt.toUTCString()}`, true)
        .addField("Money($)", user.money , false)
        .addField("Emotional state", mary2 ,true)
        {message.channel.send(infoEmbed)}
      }}
)}}else{
    const member=bot.users.cache.get(args[0])
        if(member){
          const presence = `${member.presence.status}`
          const Bott = `${member.bot}`
        if(Bott === "true") {var Bot = "Yes"}else if(Bott === "false") {var Bot = "No"}
        if(presence === "online") {var online = "<a:online:732819208991408199> Online"}else if(presence === "idle") {var online = "<a:afk:732819258274480229> AFK"}else if(presence === "dnd") {var online = "<a:dnd:732819300104142899> dnd"}else if(presence === "offline") {var online = "<a:offline:732819336535736381> offline"}
        fs.readFile('./users/'+ member.id +'.json',function (err,userInfo) {
            if(err) {  
        const infoEmbed = new Discord.MessageEmbed()
          .setColor(message.member.roles.highest.color )
          .setTitle("Name " + member.username + "#" + member.discriminator ,true)
          .setDescription("ID:  " + member.id ,true )
          .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
          .addField("Bot" , Bot ,true )
          .addField("Status", online ,true)
          .addField("Join date", `${message.guild.joinedAt.toUTCString()}`, false)
          .addField("Create date", `${member.createdAt.toUTCString()}`, true)
          {message.channel.send(infoEmbed)}}else{
            var user = userInfo.toString();
            user = JSON.parse(user);
            let mary = [user.marry]
            if(mary != "[object Object]" || mary != "") {
                const member=bot.users.cache.get(user.marry)
                if(member) {
                var mary2 = member.username+"#" + member.discriminator}else{var mary2 = "single"}}else{var mary2 = "single"}
            const infoEmbed = new Discord.MessageEmbed()
            .setColor( message.member.roles.highest.color )
            .setTitle("Name " + member.username + "#" + member.discriminator ,true)
            .setDescription("ID:  " + member.id ,true )
            .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
            .addField("Bot" , Bot ,true )
            .addField("Status", online ,true)
            .addField("Join date", `${message.guild.joinedAt.toUTCString()}`, false)
            .addField("Create date", `${member.createdAt.toUTCString()}`, true)
            .addField("Money($)", user.money , false)
            .addField("Emotional state", mary2 ,true)
            {message.channel.send(infoEmbed)}
          }}
    )}
}}else{
    if(Bott === "true") {var Bot = "Yes"}else if(Bott === "false") {var Bot = "No"}
    if(presence === "online") {var online = "<a:online:732819208991408199> Online"}else if(presence === "idle") {var online = "<a:afk:732819258274480229> AFK"}else if(presence === "dnd") {var online = "<a:dnd:732819300104142899> dnd"}else if(presence === "offline") {var online = "<a:offline:732819336535736381> offline"}
    fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
        if(err) {    
    const infoEmbed = new Discord.MessageEmbed()
      .setColor(message.member.roles.highest.color )
      .setTitle("Name " + message.author.username + "#" + message.author.discriminator ,true)
      .setDescription("ID:  " + message.author.id ,true )
      .setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
      .addField("Bot" , Bot ,true )
      .addField("Status", online ,true)
      .addField("Role", message.member.roles.highest , false)
      .addField("Join date", `${message.member.joinedAt.toUTCString()}`, false)
      .addField("Create date", `${message.author.createdAt.toUTCString()}`, true)
      {message.channel.send(infoEmbed)}}else{
        var user = userInfo.toString();
        user = JSON.parse(user);
        let mary = [user.marry]
        if(mary != "[object Object]" || mary != "") {
            const member=bot.users.cache.get(user.marry)
            if(member) {
            var mary2 = member.username+"#" + member.discriminator}else{var mary2 = "single"}}else{var mary2 = "single"}
        const infoEmbed = new Discord.MessageEmbed()
        .setColor( message.member.roles.highest.color )
        .setTitle("Name " + message.author.username + "#" + message.author.discriminator ,true)
        .setDescription("ID:  " + message.author.id ,true )
        .setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true ,size: 512}), true)
        .addField("Bot" , Bot ,true )
        .addField("Status", online ,true)
        .addField("Join date", `${message.member.joinedAt.toUTCString()}`, false)
        .addField("Create date", `${message.author.createdAt.toUTCString()}`, true)
        .addField("Money($)", user.money , false)
        .addField("Emotional state", mary2 ,true)
        {message.channel.send(infoEmbed)}
      }}
)}};
async function server(bot,message) {
    if(!message.guild) return;
    const infoEmbed = new Discord.MessageEmbed()
    .setColor('#3aad48')
    .setTitle("Server " + message.guild.name ,true)
    .setDescription("ID:  " + message.guild.id ,true )
    .setThumbnail(message.guild.iconURL({format: "png", dynamic: true ,size: 512}), true)
    .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
    .addField("Region", `${message.guild.region}`, true)
    .addField("Avatar","  ---->" ,true)
    .addField(`Member count - ` + message.guild.memberCount,`💂‍♂️Members: ` + message.guild.members.cache.filter(member =>!member.user.bot).size + `\n` + `🤖Bots: ` + message.guild.members.cache.filter(users =>users.user.bot).size , true)
    .addField("Online count - " + message.guild.presences.cache.size,`<a:online:732819208991408199> Online: ` + message.guild.presences.cache.filter(user => user.member.presence.status === 'online').size + `\n` + `<a:afk:732819258274480229> AFK: ` + message.guild.presences.cache.filter(user => user.member.presence.status === 'idle').size+ `\n` + `<a:dnd:732819300104142899> dnd: ` + message.guild.presences.cache.filter(user => user.member.presence.status === 'dnd').size + `\n` + `<a:offline:732819336535736381> Invisible: ` + `<a:offline:732819336535736381> offline: ` + message.guild.members.cache.filter(user => user.presence.status === 'offline').size  ,true) 
    .addField("Channel count - " + message.guild.channels.cache.size, '📚Category channel: ' + message.guild.channels.cache.filter(c => c.type === "category").size + "\n" +  '📄Text channel: ' + message.guild.channels.cache.filter(c => c.type === "text").size + '\n' + '🔊Voice channel: ' + message.guild.channels.cache.filter(c => c.type === "voice").size + '\n' + '📢News channel: ' + message.guild.channels.cache.filter(c => c.type === "news").size + '\n' + '🛒Store channel: ' + message.guild.channels.cache.filter(c => c.type === "store").size  , true)
    .addField("Emoji count - " + message.guild.emojis.cache.size , "🖼Static emoji: " + message.guild.emojis.cache.filter(emojis => !emojis.animated).size + "\n" + "🎞gif emoji: " + message.guild.emojis.cache.filter(emojis => emojis.animated).size ,true)
    .addField("Subscription", "Level: " + message.guild.premiumTier + "\n" + "Boots: " + message.guild.premiumSubscriptionCount ,true)
    .addField("Role count", `${message.guild.roles.cache.size}`,true)
    .addField("Verification", message.guild.verificationLevel )
    .addField("Create date", message.channel.guild.createdAt.toUTCString() )
    await message.channel.send(infoEmbed)
}
const Open = new Date();
async function botinfo(bot,message,ag,prefix) {
    let Today=new Date();
    const member=bot.users.cache.get(message.guild.me.id)
    let day = (Today.getDate() - Open.getDate())
    if(Today.getHours() - Open.getHours() < 0 || Today.getHours() - Open.getHours() != 0) {day -1;var hour = 24 - (Today.getHours() - Open.getHours())}else{var hour = (Today.getHours() - Open.getHours())}
    const infoEmbed = new Discord.MessageEmbed()
    .setColor('#3aad48')
    .setThumbnail(member.displayAvatarURL({format: "png", dynamic: true ,size: 512}))
    .setTitle("Bot INFO " + member.username + "#" + member.discriminator  ,true)
    .setDescription("ID:  " + member.id ,true )
    .addField("Prefix", `${prefix}` ,true)
    .addField("Bot ver.", `${version}` ,true)
    .addField("Architecture", "JS(JavaScript) / Discord.js")
    .addField("node.js / discord.js ver.", "12.18.2(win7 32bit) / 12.4.1")
    .addField("AT server count", `${bot.guilds.cache.size}` ,true) 
    .addField("Start hours", day+" D "+hour+" H "+Today.getMinutes() +" M " ,true)
    .addField("Invite date", `${message.guild.me.joinedAt.toUTCString()}`)
    .addField("Create date", `${member.createdAt.toUTCString()}`, true)
    .setTimestamp()
    .setFooter("製作BY 苦力怕怕", 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png')
    {message.channel.send(infoEmbed)};
}