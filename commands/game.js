const Discord = require("discord.js")
const util = require('minecraft-server-util')
const osu = require('node-osu');
const osuApi = new osu.Api('f071e6d95298609bdf49f54fd4a046e5048476cd', {
  // baseUrl: sets the base api url (default: https://osu.ppy.sh/api)
  notFoundAsError: true, // Throw an error on not found instead of returning nothing. (default: true)
  completeScores: false, // When fetching scores also fetch the beatmap they are for (Allows getting accuracy) (default: false)
  parseNumeric: false // Parse numeric values into numbers/floats, excluding ids
});
module.exports= {
    "mc":{
        description: "麥塊指令",
        fun: function(bot,message,p,ag) {
            if(!ag[0]) return message.channel.send('【MC】請填IP位置')
            if(!ag[1]) {var part = 25565}else{
              var i = parseInt(ag[1]);
              var part = i}
              util.ping(ag[0], { port: part }) // port is optional, defaults to 25565
              .then((reponse) => {
                const mcEmbed = new Discord.MessageEmbed()
                .setTitle('MC伺服器狀態')
                .setDescription(reponse.description)
                .addField('IP: ', reponse.host)
                .addField('版本: ', reponse.version)
                .addField('線上人數: ', reponse.onlinePlayers)
                .addField('最大人數: ', reponse.maxPlayers)
                .addField('模組:', reponse.modInfo)
                message.channel.send(mcEmbed)
            }).catch((error) => {
              message.channel.send("❌找不到伺服器!")
              throw error;
            })
        }
    },
    "rps":{
        description: "猜拳",
        fun: function(bot,message,p,ag) {
            if(ag[0] == "r") {
            rock(bot,message,ag)
            }else if(ag[0] == "石頭") {
            rock(bot,message,ag)
            }else if(ag[0] == "p") {
            paper(bot,message,ag)
            }else if(ag[0] == "布") {
            paper(bot,message,ag)
            }else if(ag[0] == "s") {
            seasen(bot,message,ag)
            }else if(ag[0] == "剪刀") {
            seasen(bot,message,ag)
            }else{
            rps(bot,message,ag)
            }
        }
    },
    "math":{
        description: "隨機數字",
        fun: function(bot,message) {
            message.channel.send("你擲出" + Math.round(Math.random()*6) + "點!")
        }
    },
    "love":{
        description: "比率",
        fun: function(bot,message,p,ag) {
          if(ag[0] != null) {
            if(message.mentions.users.size){
              let member=message.mentions.users.first()
            if(member) {
              let f = Math.floor(Math.random()*100)
              let good1 = (Math.floor(f/10));let bad1 = 10 - good1;let good = "💖";let bad = "💔";let good2 = "";let bad2 = "";
              for(i=0;i< good1 ;i++){
                 good2 = good + good2}
              for(i=0;i< bad1 ;i++){
                 bad2 = bad + bad2}
                   let loveEmbed1 = new Discord.MessageEmbed()
                   .setColor('#2d9af8').setTitle( member.username + ' 喜歡 ' + message.author.username + " 的程度為 " + f + "%" ).setDescription((good2) + (bad2)).setDescription((good2) + (bad2)).setFooter("💕祝你們 長長久久 終身愛情!").setTimestamp()
                   return message.channel.send(loveEmbed1);
            }}else{
              const member=bot.users.cache.get(ag[0])
            if(member) {
              let f = Math.floor(Math.random()*100)
              let good1 = (Math.floor(f/10));let bad1 = 10 - good1;let good = "💖";let bad = "💔";let good2 = "";let bad2 = "";
              for(i=0;i< good1 ;i++){
                 good2 = good + good2}
              for(i=0;i< bad1 ;i++){
                 bad2 = bad + bad2}
                   let loveEmbed1 = new Discord.MessageEmbed()
                   .setColor('#2d9af8').setTitle( member.username + ' 喜歡 ' + message.author.username + " 的程度為 " + f + "%" ).setDescription((good2) + (bad2)).setFooter("💕祝你們 長長久久 終身愛情!").setTimestamp()
                   return message.channel.send(loveEmbed1);}
          }}else{
         let f = Math.floor(Math.random()*100)
         let good1 = (Math.floor(f/10));let bad1 = 10 - good1;let good = "💖";let bad = "💔";let good2 = "";let bad2 = "";
            for(i=0;i< good1 ;i++){
               good2 = good + good2}
            for(i=0;i< bad1 ;i++){
               bad2 = bad + bad2}
                 let loveEmbed1 = new Discord.MessageEmbed()
                 .setColor('#2d9af8').setTitle( '智乃喜歡 ' + message.author.username + " 的程度為 " + f + "%" ).setDescription((good2) + (bad2)).setDescription((good2) + (bad2)).setFooter("☕FBI! OPEN THE DOOR!").setTimestamp()
                 return message.channel.send(loveEmbed1);
            }
        }
    },
    "gay":{
      description: "比率",
      fun: function(bot,message,p,ag) {
        if(ag[0] != null) {
          if(message.mentions.users.size){
            let member=message.mentions.users.first()
          if(member) {
            let f = Math.floor(Math.random()*100)
            let good1 = (Math.floor(f/10));let bad1 = 10 - good1;let good = "🏳️‍🌈";let bad = "⬛";let good2 = "";let bad2 = "";
            for(i=0;i< good1 ;i++){
               good2 = good + good2}
            for(i=0;i< bad1 ;i++){
               bad2 = bad + bad2}
                 let loveEmbed1 = new Discord.MessageEmbed()
                 .setColor('#2d9af8').setTitle( member.username + " 的Gay程度為 " + f + "%" ).setDescription((good2) + (bad2)).setDescription((good2) + (bad2)).setFooter("🏳️‍🌈🟥🟧🟨🟩🟦🟪").setTimestamp()
                 return message.channel.send(loveEmbed1);
          }}else{
            const member=bot.users.cache.get(ag[0])
          if(member) {
            let f = Math.floor(Math.random()*100)
            let good1 = (Math.floor(f/10));let bad1 = 10 - good1;let good = "🏳️‍🌈";let bad = "⬛";let good2 = "";let bad2 = "";
            for(i=0;i< good1 ;i++){
               good2 = good + good2}
            for(i=0;i< bad1 ;i++){
               bad2 = bad + bad2}
                 let loveEmbed1 = new Discord.MessageEmbed()
                 .setColor('#2d9af8').setTitle( member.username + "的Gay程度為 " + f + "%" ).setDescription((good2) + (bad2)).setFooter("🏳️‍🌈🟥🟧🟨🟩🟦🟪").setTimestamp()
                 return message.channel.send(loveEmbed1);}
        }}else{
       let f = Math.floor(Math.random()*100)
       let good1 = (Math.floor(f/10));let bad1 = 10 - good1;let good = "🏳️‍🌈";let bad = "⬛";let good2 = "";let bad2 = "";
          for(i=0;i< good1 ;i++){
             good2 = good + good2}
          for(i=0;i< bad1 ;i++){
             bad2 = bad + bad2}
               let loveEmbed1 = new Discord.MessageEmbed()
               .setColor('#2d9af8').setTitle("你的Gay程度為 " + f + "%" ).setDescription((good2) + (bad2)).setDescription((good2) + (bad2)).setFooter("🏳️‍🌈🟥🟧🟨🟩🟦🟪").setTimestamp()
               return message.channel.send(loveEmbed1);
          }
      }
  },
    "pick":{
        description: "是否",
        fun: function(bot,message ,p,ag) {
            let f = Math.floor(Math.random()*6)
            if(f == 1 || f== 2) {
          let pickEmbed = new Discord.MessageEmbed()
          .setColor('#2d9af8')
          .setTitle(ag)
          .setDescription('😉是')
          message.channel.send(pickEmbed);
          }else if(f == 5 || f == 6)  {     
            let pickEmbed2 = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setTitle(ag)
            .setDescription('😒不是')
            message.channel.send(pickEmbed2);
          }else if(f == 3)  {     
            let pickEmbed2 = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setTitle(ag)
            .setDescription('🤔或許是')
            message.channel.send(pickEmbed2);
          }else if(f == 4)  {     
            let pickEmbed2 = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setTitle(ag)
            .setDescription('🤔也許不是')
            message.channel.send(pickEmbed2);
          }
        }
    },
    "osucard":{
      description: "OSU!",
      fun: function(bot,message,p ,ag) {
        if(ag == "" || ag == null) return message.channel.send("❌請填入玩家Name")
        let pickEmbed = new Discord.MessageEmbed()
        .setTitle(ag + "的OSU!戰績")
        .setImage("https://lemmmy.pw/osusig/sig.php?colour=hexf16ea9&uname="+ag+"&mode=0&pp=2&removeavmargin&flagshadow&darktriangles&opaqueavatar&onlineindicator=undefined&xpbar&xpbarhex")
        message.channel.send(pickEmbed);

    }
  },
  "osu":{
    description: "OSU!",
    fun: function(bot,message,p ,ag) {
      if(ag == "" || ag == null) return message.channel.send("❌請填入玩家Name")
      osuApi.getUser({ u: ag }).then(user => {
      let y = Math.round((user.secondsPlayed)/3600/24)
      let h = Math.round((user.secondsPlayed -y*24*3600)/3600)
      let m = Math.round((user.secondsPlayed - y*24*3600 - h*3600)/60)
      let s = Math.round((user.secondsPlayed - y*24*3600 - h*3600 - m*60))
      let pickEmbed = new Discord.MessageEmbed()
      .setTitle(user.name + " | " + user.id + " | Level " + Math.floor(user.level*10)/10)
      .setDescription("SSH - "+ user.counts.SSH + " | " + "SS - "+ user.counts.SS + " | " + "SH - "+ user.counts.SH + " | "+"S - "+ user.counts.S + " | " + "A - "+ user.counts.A)
      .setURL("https://osu.ppy.sh/users/"+user.id)
      .setColor("#ff53d0")
      .addField("國家", user.country)
      .addField("分數", user.scores.ranked + " | "+ user.scores.total)
      .addField("遊玩時數", y + "天 " + h +"時 "+m+"分 "+s+"秒")
      .addField("遊玩次數", user.counts.plays)
      .addField("排名/PP","全球 "+ user.pp.rank +" | " +"國內 "+ user.pp.countryRank + " | "+ Math.round(user.pp.raw) + "pp")
      .addField("準確率", Math.floor(user.accuracy*100)/100)
      .setFooter("加入時間 "+ user.joinDate.getUTCFullYear(8) + "/"+user.joinDate.getUTCMonth(8)+"/"+user.joinDate.getUTCDate(8)+" • "+user.joinDate.getUTCHours(8)+"時"+user.joinDate.getUTCMinutes(8)+"分"+user.joinDate.getUTCSeconds(8) +"秒")
      .setTimestamp()
      .setImage("https://lemmmy.pw/osusig/sig.php?colour=hexf16ea9&uname="+ag+"&mode=0&pp=2&removeavmargin&flagshadow&darktriangles&opaqueavatar&onlineindicator=undefined&xpbar&xpbarhex")
      message.channel.send(pickEmbed);
    }).catch((err) => {message.channel.send("❌找不到該玩家!  ||`"+err+"`||" )})
    }
}
}

async function rock(bot,message) {
    let rpsEmbed = new Discord.MessageEmbed()
    .setColor('#2d9af8')
    .setTitle(message.author.username + '  你出了石頭!')
    .setDescription('剪刀 石頭 布!!')
    .setImage( 'https://cdn.discordapp.com/attachments/611040945495998464/736510734988476416/ezgif.com-gif-maker.gif')
   message.channel.send(rpsEmbed).then ((msg) => {
   setTimeout(function(){              
    switch(Math.floor(Math.random()*3+1)) {
    case 1: //剪刀
     let rpsEmbed21 = new Discord.MessageEmbed()
     .setColor('#2d9af8')
     .setImage('https://cdn.discordapp.com/attachments/611040945495998464/736802353298276402/289100043sq324qp55p7.gif')
     .setTitle(message.author.username +'你贏了!!')
     .setDescription('再玩一次?請再打一次指令!')
    return msg.edit(rpsEmbed21);
   case 2: //石頭
       let rpsEmbed22 = new Discord.MessageEmbed()
       .setColor('#2d9af8')
       .setImage('https://cdn.discordapp.com/attachments/611040945495998464/736802360583651338/1485575148_1459752220_2015-11-14-16-43-56-21364000.gif')
       .setTitle(message.author.username +'平手!!')
       .setDescription('再玩一次?請再打一次指令!')
      return msg.edit(rpsEmbed22);
   case 3: //布
         let rpsEmbed23 = new Discord.MessageEmbed()
         .setColor('#2d9af8')
         .setImage('https://cdn.discordapp.com/attachments/611040945495998464/736802363691499570/D8WgK8I.png')
         .setTitle(message.author.username +'你輸了:((')
         .setDescription('再玩一次?請再打一次指令!')
        return msg.edit(rpsEmbed23);
}}, 2500)})
}
async function paper(bot,message) {
    let rpsEmbed = new Discord.MessageEmbed()
    .setColor('#2d9af8')
    .setTitle(message.author.username + '  你出了布!')
    .setDescription('剪刀 石頭 布!!')
    .setImage( 'https://cdn.discordapp.com/attachments/611040945495998464/736510734988476416/ezgif.com-gif-maker.gif')
   message.channel.send(rpsEmbed).then ((msg) => {
   setTimeout(function(){
    switch(Math.floor(Math.random()*3+1)) {
      case 1: //剪刀
        let rpsEmbed31 = new Discord.MessageEmbed()
       .setColor('#2d9af8')
       .setImage('https://cdn.discordapp.com/attachments/611040945495998464/736802353298276402/289100043sq324qp55p7.gif')
       .setTitle(message.author.username +'你輸了:((')
       .setDescription('再玩一次?請再打一次指令!')
      return msg.edit(rpsEmbed31);
     case 2: //石頭
         let rpsEmbed32 = new Discord.MessageEmbed()
         .setColor('#2d9af8')
         .setImage('https://cdn.discordapp.com/attachments/611040945495998464/736802360583651338/1485575148_1459752220_2015-11-14-16-43-56-21364000.gif')
         .setTitle(message.author.username +'你贏了!!')
         .setDescription('再玩一次?請再打一次指令!')
        return msg.edit(rpsEmbed32);
     case 3: //布
           let rpsEmbed33 = new Discord.MessageEmbed()
           .setColor('#2d9af8')
           .setImage('https://cdn.discordapp.com/attachments/611040945495998464/736802363691499570/D8WgK8I.png')
           .setTitle(message.author.username +'平手!!')
           .setDescription('再玩一次?請再打一次指令!')
          return msg.edit(rpsEmbed33); 
}} ,2500)})   
}
async function seasen(bot,message) {
    let rpsEmbed = new Discord.MessageEmbed()
    .setColor('#2d9af8')
    .setTitle(message.author.username + '  你出了剪刀!')
    .setDescription('剪刀 石頭 布!!')
    .setImage( 'https://cdn.discordapp.com/attachments/611040945495998464/736510734988476416/ezgif.com-gif-maker.gif')
   message.channel.send(rpsEmbed).then ((msg) => {
   setTimeout(function(){
     switch(Math.floor(Math.random()*3+1)) {
       case 1: //剪刀
       console.log()
        let rpsEmbed11 = new Discord.MessageEmbed()
        .setColor('#2d9af8')
        .setImage('https://cdn.discordapp.com/attachments/611040945495998464/736802353298276402/289100043sq324qp55p7.gif')
        .setTitle(message.author.username + '平手!!')
        .setDescription('再玩一次?請再打一次指令!')
      return  msg.edit(rpsEmbed11);
      case 2: //石頭
          let rpsEmbed12 = new Discord.MessageEmbed()
          .setColor('#2d9af8')
          .setImage('https://cdn.discordapp.com/attachments/611040945495998464/736802360583651338/1485575148_1459752220_2015-11-14-16-43-56-21364000.gif')
          .setTitle(message.author.username + '你輸了:((')
          .setDescription('再玩一次?請再打一次指令!')
      return msg.edit(rpsEmbed12);
      case 3: //布
            let rpsEmbed13 = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setImage('https://cdn.discordapp.com/attachments/611040945495998464/736802363691499570/D8WgK8I.png')
            .setTitle(message.author.username +'你贏了!!')
            .setDescription('再玩一次?請再打一次指令!')
        return msg.edit(rpsEmbed13);
}} ,2500)})
}
async function rps(bot,message) {
    message.channel.send("請打 `cr!rps [剪刀/石頭/布]`")
}