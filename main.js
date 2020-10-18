const Discord = require('discord.js'); //匯入discord.js模組
const fs = require('fs');
function Reboot() {
  main()
}
function main() {
const client = new Discord.Client(); //機器人本體物件
////////////////////////////////////////////  版本: 3.6 [簡約版]
let cooldown = new Set();
let cdseconds = 3;
var Open = new Date();
let snipecool = new Set();
var times = 0

const { prefix, token, prefix2 } = require('./config.json');
const { version } = require('./config.json')
const { owner } = require("./config.json")

client.on('ready',async () => {
  setInterval(() => {client.user.setActivity('cr!help • ' + client.guilds.cache.size + ' 個咖啡廳服務中' ,{"type": "STREAMING",url: "https://www.twitch.tv/creeperjim"})} ,8000)
  setInterval(() => {
    const Today = new Date()
    client.user.setActivity('cr!help • 累計運行' + (Today.getHours() - Open.getHours()) + "小時" + (Today.getMinutes() - Open.getMinutes()) + "分鐘",{"type": "STREAMING",url: "https://www.twitch.tv/creeperjim"})}, 10000)
  setInterval(() => {
      client.user.setActivity('cr!help • '+ client.users.cache.size + ' 個顧客服務中',{"type": "STREAMING",url: "https://www.twitch.tv/creeperjim"})}, 11000)
})
///////////////////////////////////////////
client.commands = new Discord.Collection()
client.on('ready', () => {
    console.log(`機器人讀取成功! 版本: ${version}`);});
    setTimeout(function(){client.user.setActivity('cr!help • ' + client.guilds.cache.size + ' 個咖啡廳服務中' ,{"type": "STREAMING",url: "https://www.twitch.tv/creeperjim"})},7000)
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
client.on('message', async msg => { //on_message
    if (msg.content.startsWith(prefix2)) {
        if(msg.author.bot) return;
        if(msg.guild) if(!msg.member.guild.me.hasPermission(['SEND_MESSAGES'])) return;
        if(cooldown.has(msg.author.id)) {msg.channel.send("Please wait Please wait few seconds.");speed(client,msg)}else{
            en_US(client,msg) //command
        }}else if(msg.content.startsWith(prefix)) {
          if(msg.guild) if(!msg.member.guild.me.hasPermission(['SEND_MESSAGES'])) return;
            zh_TW(client,msg) //command
}});

client.on('voiceStateUpdate', (oldMember, newMember) => {
    try{
    const newUserChannel = newMember.channelID
    const oldUserChannel = oldMember.channelID
  if(newUserChannel) { //Join
      //Create channel.
     }else if(oldUserChannel){  //Leave
      //Delete channel.
     }
  }catch (error){
    console.log(error)
}});
client.on('guildMemberAdd',member =>{
  //Join message
});
client.on('guildMemberRemove',member =>{
  //Leave message
});
////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('messageDelete' ,message => {
  //Snipe
})
dbl.on('posted', () => {
  dbl.postStats(client.guilds.size)
})


client.login(token);
}
main()
