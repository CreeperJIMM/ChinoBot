const Discord = require('discord.js'); //匯入discord.js模組
const Intents = require('discord.js');
const fs = require('fs');
function Reboot() {
  main()
}
function main() {
const myIntents = new Intents.Intents();
myIntents.add('GUILD_PRESENCES', 'GUILD_MEMBERS');
const client = new Discord.Client() //機器人本體物件
//{ ws: { intents: myIntents } }
////////////////////////////////////////////  版本: 4.0
//設置參數
let cooldown = new Set();
let cdseconds = 3;
var Open = new Date();
let channelcooldown = new Set();
let channelcdseconds = 2;
let snipecool = new Set();
var times = 0
//從外讀取參數(prefix,version,token)
const config = require("./config.json");
const { prefix, token, prefix2 } = require('./config.json');
const { version } = require('./config.json')
const { owner } = require("./config.json")
client.on('ready',async () => {
  let timer = 1
  setInterval(() => {
    if(timer === 1) {
      timer++
      client.user.setActivity('cr!help • ' + client.guilds.cache.size + ' 個咖啡廳服務中' ,{"type": "STREAMING",url: "https://www.twitch.tv/creeperjim"})}
      else if(timer === 2) {
        timer++
        const Today = new Date();let day = (Today.getDate() - Open.getDate());if(Today.getHours() - Open.getHours() <0 || Today.getHours() - Open.getHours() != 0) {day;var hour = 24 - (Today.getHours() - Open.getHours())}else{var hour = (Today.getHours() - Open.getHours())}
        client.user.setActivity('cr!help • 累計運行'+day + "天" + hour + "小時" + (Today.getMinutes() - Open.getMinutes()) + "分鐘",{"type": "STREAMING",url: "https://www.twitch.tv/creeperjim"})}
        else if(timer === 3) {
          timer--
          client.user.setActivity('cr!help • '+ client.users.cache.size + ' 個顧客服務中',{"type": "STREAMING",url: "https://www.twitch.tv/creeperjim"})
          timer--
}} ,8000)});
//cooldown 冷卻
client.on('message' ,async message => {
    setTimeout(() => {message.channel.stopTyping()}, 1000);
    setTimeout(() => {
      cooldown.delete(message.author.id)}, cdseconds * 1000)
    setTimeout(() => {
      channelcooldown.delete(message.channel.id)}, channelcdseconds * 1000)
    setTimeout(() => {
        fs.readFile('./data.json',function (err, userInfo) {
        try{
          if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
          var user = userInfo.toString();
          user = JSON.parse(user);
          if(user.command === "false") return; 
          user.command = "false"
          var str = JSON.stringify(user);
          fs.writeFileSync('./data.json',str);}
          catch{console.log()}
        })}, 4 * 1200)
});
///////////////////////////////////////////
client.commands = new Discord.Collection()
client.on('ready', () => {
  let Today = new Date()
    console.log(`苦力怕機器人讀取成功! 版本: ${version} Time: `+ Today.toUTCString());});
let command = {}
let command2 = {}
let event = []
let commandfiles = fs.readdirSync("./commands")
console.log("commands file:" + commandfiles)
for (file of commandfiles) {
    let q = require(`./commands/${file}`)
    Object.assign(command, q)
}
let commandfiles2 = fs.readdirSync("./commands2")
console.log("[English]commands file:" + commandfiles2)
for (file of commandfiles2) {
    let q = require(`./commands2/${file}`)
    Object.assign(command2, q)
}
let eventfiles = fs.readdirSync("./events")
console.log("events file:" + eventfiles)
for (file of eventfiles) {
  let w = require(`./events/${file}`)
  for (sd of w) {
      event.push(sd)
  }
};
for (file of event) {
  try {
      w = function(fun) {
          return function(...a) {
              try {
                  fun(client, ...a)
              } catch (error) {
                  console.log(error)
              }
          }
      }
      client.on(file.name, w(file.fun))
  } catch (error) {
      console.log(`file:${file.name}\nError:\n`)
      console.log(error)
  }
}
client.command = fs.readdirSync(`./commands/`)
client.load = function(filename) {
  let file1 = require(`./commands/${filename}.js`) //讀取
  Object.assign(command, file1) //加入
}
client.unload = function(filename) {
  let file1 = require(`./commands/${filename}.js`)
  for (command1 of Object.keys(file1)) {
      delete command[`${command1}`]
  }
  delete require.cache[require.resolve(`./commands/${filename}.js`)] //刪除緩存內檔案
}
client.unload = function(filename) {
    let file1 = require(`./commands/${filename}.js`)
    for (command1 of Object.keys(file1)) {
        delete command[`${command1}`]
    }
}
client.is_owner = function(message) { //是不是作者
    if (Number(message.author.id) != owner) {
        throw new Error("You are not the owner.")
    }
}
client.has_any_role = function(message, ...a) { //是否有指定的身分組
    for (eqw of message.member.roles.cache) {
        if (a.includes(Number(eqw[0])) || a.includes(eqw[1].name)) {
            return
        }
    }
    throw new Error("You are not the role.")
}
client.is_guild_owner = function(message) { //是否為伺服器持有者
    if (message.guild.owner !== message.member.id) {
        throw new Error("You are not guild owner.")
    }
}
let l = {
  "reboot": {
      description: "重啟機器人",
      authority: "owner",
      instructions: "reboot",
      fun: function(bot, message) {
          client.is_owner(message)
          client.destroy()
          Reboot()
      }
  }
}
Object.assign(command, l)
client.on('message', async msg => { //on_message //Command type
  if(msg.content === "cr!candy") return;
    if (msg.content.startsWith(prefix2)) {
        if(msg.author.bot) return;
        if(msg.guild) if(!msg.member.guild.me.hasPermission(['SEND_MESSAGES'])) return;
        if(cooldown.has(msg.author.id)) {msg.channel.send("Please wait Please wait few seconds.");speed(client,msg)}else{
        if(channelcooldown.has(msg.channel.id)) {return;} else{
          fs.readFile('./data.json',function (err, userInfo) {
            if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
            var user = userInfo.toString();
            user = JSON.parse(user);
            if(user.command === "true") {return;}else{
            user.command = "true"
            en_US(client,msg)
        }})}}}else if(msg.content.startsWith(prefix)) {
          if(msg.guild) if(!msg.member.guild.me.hasPermission(['SEND_MESSAGES'])) return;
          fs.readFile('./users/'+ msg.author.id +'.json',function (err,userInfo2) {
          if(err) {zh_TW(client,msg)}
           else{
            msg.channel.startTyping(1)
            if(msg.author.bot) return;
            if(channelcooldown.has(msg.channel.id)) {return;} else{
              fs.readFile('./data.json',function (err, userInfo) {
                if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`錯誤!` + err);}
                var user = userInfo.toString();
                user = JSON.parse(user);
                if(user.command === "true") {return;}else{
                user.command = "true"
            var user2 = userInfo2.toString();
            user2 = JSON.parse(user2);}
            if(cooldown.has(msg.author.id)) {msg.channel.stopTyping();if(user2.language == "zh_TW"){msg.channel.send("請等等再來使用此指令!");speed(client,msg)}else if(user2.language == "en_US") {msg.channel.send("Please wait Please wait few seconds.")}else{msg.channel.send("請等等再來使用此指令!");speed(client,msg)}}else{
            if(user2.language == "zh_TW") {zh_TW(client,msg)}else if(user2.language == "en_US") {en_US(client,msg)}else{
          if(msg.author.bot) return;
          if(cooldown.has(msg.author.id)) {msg.channel.send("請等等再來使用此指令!!");speed(client,msg)}else{
          if(channelcooldown.has(msg.channel.id)) {return;} else{
            fs.readFile('./data.json',function (err, userInfo) {
              if(err){console.log("錯誤!",err); bot.channels.cache.get(`746185201675141241`).send(`Error!` + err);}
              var user = userInfo.toString();
              user = JSON.parse(user);
              if(user.command === "true") {return;}else{
              user.command = "true"
              zh_TW(client,msg)
            }})}}}
}})}}})
}});
//指令
async function en_US(bot,msg) {
  if(cooldown.has(msg.author.id)) {msg.channel.send("Please wait few seconds.");speed(client,msg)}else{
    cooldown.add(msg.author.id)
    channelcooldown.add(msg.author.id)
  time(bot,msg)
  if (Object.keys(command2).includes(msg.content.replace(prefix2, "").split(" ")[0])) {
    setTimeout(() => {
    try {
        let ag = msg.content.split(" ")
        ag.shift()
        command2[msg.content.replace(prefix2, "").split(" ")[0]]["fun"](client, msg,prefix,ag, ...ag)
        msg.channel.stopTyping()
    } catch (error) {
      msg.channel.stopTyping()
        msg.channel.send("❌An error occurred while trying to execute!\n```js\n" + error + "\n```")
        client.channels.cache.get("746185201675141241").send("Error!\nExecutor:  " + msg.author.tag + ":" + msg.content + "\n```js\n" + error + "\n```")
        console.log(msg.author.tag + ":" + msg.content)
        console.log(error)
}}, 30);
}else if(Object.keys(command2).includes(msg.content.replace(prefix, "").split(" ")[0])) {
  try {
    let ag = msg.content.split(" ")
    ag.shift()
    command2[msg.content.replace(prefix, "").split(" ")[0]]["fun"](client, msg,prefix,ag, ...ag)
    msg.channel.stopTyping()
} catch (error) {
  msg.channel.stopTyping()
    msg.channel.send("❌An error occurred while trying to execute!\n```js\n" + error + "\n```")
    client.channels.cache.get("746185201675141241").send("Error!\nExecutor:  " + msg.author.tag + ":" + msg.content + "\n```js\n" + error + "\n```")
    console.log(msg.author.tag + ":" + msg.content)
    console.log(error)
}}else{msg.channel.send("Command `"+ msg.content +"` Not found... try `cr!!help` for help?");notfound(client,msg);msg.channel.stopTyping()}};setTimeout(() => {msg.channel.stopTyping()}, 1000);}

async function zh_TW(bot,msg) {
  if(cooldown.has(msg.author.id)) {msg.channel.send("請等等再來使用此指令!");speed(client,msg)}else{
    cooldown.add(msg.author.id)
    channelcooldown.add(msg.author.id)
  time(bot,msg)
  if (Object.keys(command).includes(msg.content.replace(prefix, "").split(" ")[0])) {
    setTimeout(() => {
    try {
        let ag = msg.content.split(" ")
        ag.shift()
        command[msg.content.replace(prefix, "").split(" ")[0]]["fun"](client, msg,prefix, ag, ...ag)
        msg.channel.stopTyping()
    } catch (error) {
      msg.channel.stopTyping()
        msg.channel.send("❌嘗試執行發生錯誤!\n```js\n" + error + "\n```")
        client.channels.cache.get("746185201675141241").send("錯誤!\n執行者:  " + msg.author.tag + ":" + msg.content + "\n```js\n" + error + "\n```")
        console.log(msg.author.tag + ":" + msg.content)
        console.log(error)
}}, 30);
}else{msg.channel.send("看起來沒有這指令 `"+ msg.content + "`....使用`cr!help`開啟幫助?");notfound(client,msg);msg.channel.stopTyping()}};setTimeout(() => {msg.channel.stopTyping()}, 1000);}
//成就
async function notfound(bot,message) {
  fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
    if(err) {return}else{var user = userInfo.toString();user = JSON.parse(user);
      if(user.adv.indexOf("notfound") == "-1") {user.adv.push("notfound");message.author.send("🏅**獲得成就!!**  好像打錯了...(˘•ω•˘)");var str = JSON.stringify(user);fs.writeFileSync('./users/'+ message.author.id +'.json',str)}}})
}
async function speed(bot,message) {
  fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
    if(err) {return}else{var user = userInfo.toString();user = JSON.parse(user);
      if(user.adv.indexOf("speed") == "-1") {user.adv.push("speed");message.author.send("🏅**獲得成就!!**  打太快惹>_<");var str = JSON.stringify(user);fs.writeFileSync('./users/'+ message.author.id +'.json',str)}}})
}
////////////// 互動指令
function time(bot,message) {times = times + 1}
client.on('message',msg => {
  if(!msg.guild) return;
  fs.readFile('./guild/'+msg.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
    if(ser.language.run) {if(ser.language.run != 1) return;}
    if(msg.author.bot) return;
    let a = Math.round(Math.random()*4)
    if(msg.content === `早安`) {
      if(cooldown.has(msg.author.id)) { return; }else{
        if(a == 1) {msg.channel.send("早安w")}else if(a == 2) {msg.channel.send("早安!")}else if(a == 3) {msg.channel.send("早安030")}else if(a == 4) {msg.channel.send("早安! >w<")}
      };
  }else if(msg.content === `午安`) {
    if(cooldown.has(msg.author.id)) { return; }else{
      if(a == 1) {msg.channel.send("午安w")}else if(a == 2) {msg.channel.send("午安!")}else if(a == 3) {msg.channel.send("午安! 吃飽沒")}else if(a == 4) {msg.channel.send("午安uwu")}
    };
  }else if(msg.content === `cr!times`) {
    if(cooldown.has(msg.author.id)) { return; }else{
    if (msg.author.id !== '546144403958398988') return;
      msg.channel.send("指令已使用 "+ times +"次。");
    };
}else if(msg.content === `晚安`) {
    if(cooldown.has(msg.author.id)) { return; }else{
      if(a == 1) {msg.channel.send("晚安!")}else if(a == 2) {msg.channel.send("祝你有美好的夜晚!")}else if(a == 3) {msg.channel.send("睡前需要一杯咖啡ㄇ?")}else if(a == 4) {msg.channel.send("晚安啦~")}
    };
}else if(msg.content === `智乃壞壞`) {
  if(cooldown.has(msg.author.id)) { return; }else{
    if(a == 1) {msg.channel.send("對不起> <")}else if(a == 2) {msg.channel.send("我什麼都沒做啊QWQ")}else if(a == 3) {msg.channel.send("QAQ")}else if(a == 4) {msg.channel.send(".w.")}
  };
}else if(msg.content === `(´・ω・)`) {
  if(cooldown.has(msg.author.id)) { return; }else{
    msg.channel.send("(´・ω・)");
  };
}else if(msg.content === `智乃抱抱`) {
  if(cooldown.has(msg.author.id)) { return; }else{
    if(a == 1) {msg.channel.send("既然你這樣說了那我就抱吧\n只能一次喔( ˘•ω•˘ ) (抱")}else if(a == 2) {msg.channel.send("不要( ˘•ω•˘ )")}else if(a == 3) {msg.channel.send("姆...( ˘•ω•˘ )")}else if(a == 4) {msg.channel.send("你...想對我做甚麼( ˘•ω•˘ )")}
  };
}else if(msg.content === `智乃摸摸頭`) {
  if(cooldown.has(msg.author.id)) { return; }else{
    if(a == 1) {msg.channel.send("( ˘•ω•˘ ) (被摸頭")}else if(a == 2) {msg.channel.send("( ˘•ω•˘ ) (跑走")}else if(a == 3) {msg.channel.send("( ˘•ω•˘ ) (閃躲")}else if(a == 4) {msg.channel.send("( ˘•ω•˘ ) (咬")}
  };
}else if(msg.content === `智乃摸摸`) {
  if(cooldown.has(msg.author.id)) { return; }else{
    if(a == 1) {msg.channel.send("( ˘•ω•˘ ) (被摸摸")}else if(a == 2) {msg.channel.send("( ˘•ω•˘ ) (跑走")}else if(a == 3) {msg.channel.send("( ˘•ω•˘ ) (閃躲")}else if(a == 4) {msg.channel.send("( ˘•ω•˘ ) (咬")}
  };
}else if(msg.content === `智乃不乖`) {
  if(cooldown.has(msg.author.id)) { return; }else{
    if(a == 1) {msg.channel.send("(つд⊂).....")}else if(a == 2) {msg.channel.send("我做錯了什麼(つд⊂)...")}else if(a == 3) {msg.channel.send("去怪我主人拉(つд⊂)...")}else if(a == 4) {msg.channel.send("對不起(つд⊂)...")}
  };
}else if(msg.content === `智乃飛高高`) {
    if(cooldown.has(msg.author.id)) { return; }else{
      if(a == 1) {msg.channel.send("ヽ(ﾟ∀。)ﾉ (飛高~")}else if(a == 2) {msg.channel.send("好高我會怕怕! (つД`)")}else if(a == 3) {msg.channel.send("我不要>w<!!")}else if(a == 4) {msg.channel.send("( ˘•ω•˘ ) (不甘情願地飛高")}
    };
}else if(msg.content === `我要一杯咖啡`) {
  if(cooldown.has(msg.author.id)) { return; }else{
    if(a == 1) {msg.channel.send("來惹~!\n 你的咖啡完成了☕ヽ(・×・´)ゞ")}else if(a == 2) {msg.channel.send("請先付錢( ˘•ω•˘ )")}else if(a == 3) {msg.channel.send("咖啡都沒了( ˘•ω•˘ )")}else if(a == 4) {msg.channel.send("請等我一下( ˘•ω•˘ )")}
  };
}else if(msg.content === `安安`) {
  if(cooldown.has(msg.author.id)) { return; }else{
    if(a == 1) {msg.channel.send("安安呀>w<!")}else if(a == 2) {msg.channel.send("安安>w<!")}else if(a == 3) {msg.channel.send(">W<安!")}else if(a == 4) {msg.channel.send(">W<!!!!安安")}
  };
}else if(msg.content.startsWith(`智乃沒穿`)) {
  if(cooldown.has(msg.author.id)) { return; }else{
    if(a == 1) {msg.channel.send("姆....被看到惹(´,,•ω•,,)")}else if(a == 2) {msg.channel.send("(´,,•ω•,,) 變態...")}else if(a == 3) {msg.channel.send("(´,,•ω•,,) 請 請不要這樣...")}else if(a == 4) {msg.channel.send("(´,,•ω•,,)")}
  };
}else if(msg.content.startsWith("智乃")) {
     if(cooldown.has(msg.author.id)) { return; }else{
    if(a == 1) {msg.channel.send("好像有人在說我...?")}else if(a == 2) {msg.channel.send("姆?( ˘•ω•˘ )")}else if(a == 3) {msg.channel.send("伊姆! >w<")}else if(a == 4) {msg.channel.send("姆! >w<")}
}}else if(msg.content.startsWith("ㄌㄌ")) {
  if(cooldown.has(msg.author.id)) { return; }else{
 if(a == 1) {msg.channel.send("蘿莉?( ˘•ω•˘ )")}else if(a == 2) {msg.channel.send("ㄌㄌ?( ˘•ω•˘ )")}else if(a == 3) {msg.channel.send("是什麼意思?( ˘•ω•˘ )")}else if(a == 4) {msg.channel.send("姆! >w<")}
}}else if(msg.content.startsWith("ㄓㄊ")) {
  if(cooldown.has(msg.author.id)) { return; }else{
 if(a == 1) {msg.channel.send("正太?( ˘•ω•˘ )")}else if(a == 2) {msg.channel.send("ㄓㄊ?( ˘•ω•˘ )")}else if(a == 3) {msg.channel.send("是什麼意思?( ˘•ω•˘ )")}else if(a == 4) {msg.channel.send("聽說很可愛! >w<")}
}}})
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    try{
    const newUserChannel = newMember.channelID
    const oldUserChannel = oldMember.channelID
  if(oldMember.channel && newMember.channel && oldUserChannel != newUserChannel) {
    fs.readFile('./guild/'+oldMember.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
      if(ser.language.run) {if(ser.language.run != 1) return;}
    try {setTimeout(() => {
      if(newMember.guild.channels.cache.find(channel2 => channel2.name === newMember.member.displayName+" 的頻道")) {return newMember.guild.channels.cache.find(channel2 => channel2.name === newMember.member.displayName+" 的頻道" && newMember.setChannel(channel2.id))}
    }, 2000);} catch (error) {throw error;}
  })}
  else if(newUserChannel) { //Join
      fs.readFile('./guild/'+oldMember.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
    if(ser.language.run) {if(ser.language.run != 1) return;}
        fs.readFile('./guild/'+ newMember.guild.id +'.json',function (err, userInfo) {
        if(err) {return;}else{
          var user = userInfo.toString();
          user = JSON.parse(user);
          try{if(newMember.guild.channels.cache.find(channel2 => channel2.name === newMember.member.displayName+" 的頻道")) return;}catch{return}
          if(user.voice2.indexOf(newUserChannel) != "-1") {
            let gid = newMember.channel.parentID
            newMember.channel.clone( {name: newMember.member.displayName + " 的頻道"} , {type: 'voice'} , {userLimit: 0})
            .then(Channel => {
              Channel.setParent(gid , { lockPermissions: false })
              Channel.edit({userLimit: 0})
              newMember.setChannel(Channel.id)
              user.voice.push(Channel.id)
              var str = JSON.stringify(user);
              setTimeout(function(){fs.writeFileSync('./guild/'+ newMember.guild.id +'.json', str )} ,500);})
            }}})})
     }else if(oldUserChannel){  //Leave
      fs.readFile('./guild/'+oldMember.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
        if(ser.language.run) {if(ser.language.run != 1) return;}
      fs.readFile('./guild/'+ newMember.guild.id +'.json',function (err, userInfo) {
        if(err) {return;}else{
          var user = userInfo.toString();
          user = JSON.parse(user);
          try {
            if(user.voice.indexOf(oldUserChannel) != "-1") {
              if(oldMember.channel.members.size === 0) {
                oldMember.channel.delete();}}} catch (error) {return;}
              var array = user.voice
              var index = array.indexOf(oldUserChannel)
              if (index> -1) {array.splice(index, 1);}
              var str = JSON.stringify(user);
              setTimeout(function(){fs.writeFileSync('./guild/'+ oldMember.guild.id +'.json', str )} ,1000);
            }
    })})}
  }catch (error){ client.channels.cache.get("746185201675141241").send("錯誤! \n```js\n" + error + "\n```");console.log(error);throw error;}});
client.on('guildMemberAdd',member =>{
  fs.readFile('./guild/'+oldMember.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
    if(ser.language.run) {if(ser.language.run != 1) return;}
    try{
    fs.readFile('./guild/'+ member.guild.id +'.json',function (err, userInfo) {
      if(err) {return;}else{
      var user = userInfo.toString();
      user = JSON.parse(user);
      if(user.join != null) {
      if(user.join2 === null) return;
      try{client.channels.cache.get(user.join)}catch(error) {return;}
      var str = JSON.stringify(user.join2);
      var send1 = str.replace(`{member}` , + member.guild.memberCount + "").replace(`{user}` , " " + " <@" + member.id + "> " + "").replace(`{server}` , " " + member.guild.name + "").replace(`["` , "").replace(`"]` , "")
      try{client.channels.cache.get(user.join).send(send1)}catch(error) {return;}
}}})}catch(error) {
    client.channels.cache.get("746185201675141241").send("錯誤! ! \n```js\n" + error + "\n```")
    console.log(error)
}})});
client.on('guildMemberRemove',member =>{
  fs.readFile('./guild/'+member.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
    if(ser.language.run) {if(ser.language.run != 1) return;}
    try{
    fs.readFile('./guild/'+ member.guild.id +'.json',function (err, userInfo) {
      if(err) {return;}else{
      var user = userInfo.toString();
      user = JSON.parse(user);
      if(user.leave != null) {
      if(user.leave2 === null) return;
        let Leave = user.leave
        try{client.channels.cache.get(Leave)}catch(error) {return;}
        var str = JSON.stringify(user.leave2);
        var send1 = str.replace(`{member}` , + member.guild.memberCount + "").replace(`{user}` , " " + " <@" + member.id + "> " + "").replace(`{server}` , " " + member.guild.name + "").replace(`["` , "").replace(`"]` , "")
        try{client.channels.cache.get(Leave).send(send1)}catch(error) {return;}
}}})}catch(error) {
    client.channels.cache.get("746185201675141241").send("錯誤!! \n```js\n" + error + "\n```")
    console.log(error)
}})});
////////////////////////////////////////////////////////////////////////////////////////////////////
let spam = new Set();
let rank = new Set();
client.on('message',message => {
  if(message.author.bot) return;
  setTimeout(() => {spam.delete(message.author.id)}, 6000);
  setTimeout(() => {rank.delete(message.author.id)}, 60000)})
//client.on('message',message =>{
//  const filter = (reaction, user) => {
//    return ['❌'].includes(reaction.emoji.name) && user.id === owner;};
//    message.awaitReactions(filter, { max: 1, time: 10000, errors: ['max'] })
//	.then(collected => {
//		const reaction = collected.first();
//		if (reaction.emoji.name === '❌') {
//      message.delete()
//    }}).catch(collected => {return;})
//	});
client.on('messageDelete' ,message => {//snipe command
  if(message.author.bot) return;
  if(snipecool.has(message.author.id)) return;
  if(!message.guild) return;
  fs.readFile('./guild/'+message.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
    if(ser.language.run) {if(ser.language.run != 1) return;}
        fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo) {
        if(err) {return;}else{
        snipecool.add(message.author.id)
        let args = message.createdAt.toUTCString([8]).split(" ")
        if(args[2] == "Jan") {var mon = "1月"}else if(args[2] == "Feb") {var mon = "2月"}else if(args[2] == "Mar") {var mon = "3月"}else if(args[2] == "Apr") {var mon = "4月"}else if(args[2] == "May") {var mon = "5月"}else if(args[2] == "Jun") {var mon = "6月"}else if(args[2] == "Jul") {var mon = "7月"}else if(args[2] == "Aug") {var mon = "8月"}else if(args[2] == "Sep") {var mon = "9月"}else if(args[2] == "Oct") {var mon = "10月"}else if(args[2] == "Nov") {var mon = "11月"}else if(args[2] == "Dec") {var mon = "12月"}
        if(args[0] == "Mon,") {var week = "星期一"}else if(args[0] == "Tue,") {var week = "星期二"}else if(args[0] == "Wed,") {var week = "星期三"}else if(args[0] == "Thu,") {var week = "星期四"}else if(args[0] == "Fri,") {var week = "星期五"}else if(args[0] == "Sat,") {var week = "星期六"}else if(args[0] == "Sun,") {var week = "星期日"}
        let hor = message.createdAt.getUTCHours(8)
        let H = (hor+8) + args[4].substring(2)
        let time = args[3] + " " + H + " " + mon + " " + args[1] +"日 "+week + " UTC+8"
        var user = userInfo.toString();
        user = JSON.parse(user);
        var text = JSON.stringify(user.snipe);var text2 = text.toString();text2 = JSON.parse(text2);
        if(message.content === "" || message.content === null) {user.snipe = {"t1": "(無)","t2": text2.t1,"t3": text2.t2,"t4": text2.t3,"t5": text2.t4,"t6": text2.t5,"t7": text2.t6,"t8": text2.t7,"t9": text2.t8,"t10": text2.t9}}else{
          user.snipe = {"t1": message.content ,"t2": text2.t1,"t3": text2.t2,"t4": text2.t3,"t5": text2.t4,"t6": text2.t5,"t7": text2.t6,"t8": text2.t7,"t9": text2.t8,"t10": text2.t9}}
          var textid = JSON.stringify(user.snipeid);var textid2 = textid.toString();textid2 = JSON.parse(textid2);
          var texttime = JSON.stringify(user.snipetime);var texttime2 = texttime.toString();texttime2 = JSON.parse(texttime2);
          var textfile = JSON.stringify(user.snipefile);var textfile2 = textfile.toString();textfile2 = JSON.parse(textfile2);
        if (message.attachments.size > 0) {
          var Attachment = (message.attachments).array();
          Attachment.forEach(function(attachment) {
            var file = attachment.proxyURL
            var filename = attachment.name
        user.snipefile = {"t1":{"file": file,"name": filename} ,"t2": textfile2.t1,"t3": textfile2.t2,"t4": textfile2.t3,"t5": textfile2.t4,"t6": textfile2.t5,"t7": textfile2.t6,"t8": textfile2.t7,"t9": textfile2.t8,"t10": textfile2.t9}
        user.snipeid = {"t1": message.author.id ,"t2": textid2.t1,"t3": textid2.t2,"t4": textid2.t3,"t5": textid2.t4,"t6": textid2.t5,"t7": textid2.t6,"t8": textid2.t7,"t9": textid2.t8,"t10": textid2.t9}
        user.snipetime = {"t1": time ,"t2": texttime2.t1,"t3": texttime2.t2,"t4": texttime2.t3,"t5": texttime2.t4,"t6": texttime2.t5,"t7": texttime2.t6,"t8": texttime2.t7,"t9": texttime2.t8,"t10": texttime2.t9}
        var json = JSON.stringify(user);
        fs.writeFileSync('./guild/'+ message.guild.id +'.json',json);
          })}else{
        user.snipefile = {"t1":{"file": "無","name": ""},"t2": textfile2.t1,"t3": textfile2.t2,"t4": textfile2.t3,"t5": textfile2.t4,"t6": textfile2.t5,"t7": textfile2.t6,"t8": textfile2.t7,"t9": textfile2.t8,"t10": textfile2.t9}
        user.snipeid = {"t1": message.author.id ,"t2": textid2.t1,"t3": textid2.t2,"t4": textid2.t3,"t5": textid2.t4,"t6": textid2.t5,"t7": textid2.t6,"t8": textid2.t7,"t9": textid2.t8,"t10": textid2.t9}
        user.snipetime = {"t1": time ,"t2": texttime2.t1,"t3": texttime2.t2,"t4": texttime2.t3,"t5": texttime2.t4,"t6": texttime2.t5,"t7": texttime2.t6,"t8": texttime2.t7,"t9": texttime2.t8,"t10": texttime2.t9}
        var json = JSON.stringify(user);
        fs.writeFileSync('./guild/'+ message.guild.id +'.json',json);
}}})
setTimeout(() => {snipecool.delete(message.author.id)}, 1000);
})})

client.on('message',message => {//exp command
  if(message.author.bot) return;
  for(var i = 0; i <5; i ++) {
    spam.add(message.author.id)
    setTimeout(() => {spam.add(message.author.id)}, 1000);}
    setTimeout(() => {
      if(spam.has(message.author.id)) {
  if(rank.has(message.author.id)) {return;}else {
    fs.readFile('./data.json',function (err, userInfo) {
      rank.add(message.author.id)
      if(err){console.log("錯誤!",err);client.channels.cache.get(`746185201675141241`).send(`Error!` + err);}
      var user = userInfo.toString();
      user = JSON.parse(user);
      if(user.command === "true") {return;}else{
      user.command = "true"
  fs.readFile('./users/'+ message.author.id +'.json',function (err,userInfo) {
    if(err) {
      if(!message.guild) return;
      if(!message.content.startsWith("cr!")) return;
      fs.readFile('./guild/'+message.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
        if(ser.language.run) {if(ser.language.run != 1) return;}
      let args = message.createdAt.toUTCString([8]).split(" ")
      if(args[2] == "Jan") {var mon = "1月"}else if(args[2] == "Feb") {var mon = "2月"}else if(args[2] == "Mar") {var mon = "3月"}else if(args[2] == "Apr") {var mon = "4月"}else if(args[2] == "May") {var mon = "5月"}else if(args[2] == "Jun") {var mon = "6月"}else if(args[2] == "Jul") {var mon = "7月"}else if(args[2] == "Aug") {var mon = "8月"}else if(args[2] == "Sep") {var mon = "9月"}else if(args[2] == "Oct") {var mon = "10月"}else if(args[2] == "Nov") {var mon = "11月"}else if(args[2] == "Dec") {var mon = "12月"};if(args[0] == "Mon,") {var week = "星期一"}else if(args[0] == "Tue,") {var week = "星期二"}else if(args[0] == "Wed,") {var week = "星期三"}else if(args[0] == "Thu,") {var week = "星期四"}else if(args[0] == "Fri,") {var week = "星期五"}else if(args[0] == "Sat,") {var week = "星期六"}else if(args[0] == "Sun,") {var week = "星期日"}
      let hor = message.createdAt.getUTCHours(8);let H = (hor+8) + args[4].substring(2);let time = args[3] + " " + H + " " + mon + " " + args[1] +"日 "+week + " UTC+8"
      console.log("新用戶!!" + message.author.username)
      let ver = version
      setTimeout(() => {
      var obj = {
        name: [message.author.username],
        guild: [message.guild.id],
        language: {},
        money: 0,
        usemoney: 0,
        rank: 0,
        guildrank: 0,
        exp: 0,
        guildxep: 0,
        marry: {},
        host: [],
        hostname: "",
        pet: [],
        petname: "",
        sex: {},
        age: {},
        chino: 0,
        cocoa: 0,
        tippy: 0,
        other: 0,
        work: 0,
        bank: 0,
        adv: [],
        item: [],
        bag: [],
        time: [time],
        ver: {ver}
      };
     var json = JSON.stringify(obj);
     fs.writeFileSync('./users/'+ message.author.id +'.json',json);}, 1000);
    })}
   else{
     if(!message.guild) return;
    var user = userInfo.toString();
    user = JSON.parse(user);
    let exp = 5 + Math.floor(Math.random()*10)
    let money = 2
    user.exp = user.exp + exp
    user.money = user.money + money
    let rank2 = user.rank
    let exp2 = user.exp
    if(exp2 > (1000 + rank2*10)) {
      user.rank++
      user.exp = 0
      try{
        if(!message.guild) return;
        fs.readFile('./guild/'+message.guild.id+'.json',function (err,server) {if(err) return;var ser = server.toString();ser = JSON.parse(ser);
          if(ser.language.run) {if(ser.language.run != 1) return;}
        fs.readFile('./guild/'+ message.guild.id +'.json',function (err, userInfo2) {
          if(err) {return;
          }else{
          var user2 = userInfo2.toString();
          user2 = JSON.parse(user2);
          if(user2.rank === "[object Object]" || user2.rank === "") {message.channel.send("恭喜 "+ "<@" + message.author.id + "> " + "等級達到 "+ (user.rank)+" 了!!" )}else{
            if(user2.rank === "close") {return;}
            let Rank = user2.rank
            try{client.channels.cache.get(Rank)}catch(error) {return;}
            var str = JSON.stringify(user2.rank2);
            var send1 = str.replace(`{rank}` , + user.rank + "").replace(`{user}` , " " + " <@" + message.author.id + "> " + "").replace(`{server}` , " " + message.guild.name + "").replace(`["` , "").replace(`"]` , "")
            try{client.channels.cache.get(Rank).send(send1)}catch(error) {return}
    }}})})}catch(error) {
        client.channels.cache.get("746185201675141241").send("錯誤!! \n```js\n" + error + "\n```")
        console.log(error)}
   }
  var str = JSON.stringify(user);
  fs.writeFileSync('./users/'+ message.author.id +'.json',str);
  }
})}})}}}, 3000);})

client.on('ready', (async() => {
  setInterval(() => {
    fs.readFile('./server.json',function (err,userInfo) {
      if(err) {return}else{var user = userInfo.toString();user = JSON.parse(user);
        user.chino.guild = client.guilds.cache.size
        var str = JSON.stringify(user);fs.writeFileSync('./server.json',str);
      }})
  }, 40000);
}))

client.login(token);
}
main()
