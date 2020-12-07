const Discord = require("discord.js")
const { version } = require('../config.json')
module.exports = {
    "help":{
        description: "幫助指令",
        fun: function(bot,message,p,args) {
            const helpEmbed = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setAuthor(bot.user.username + "#" + bot.user.discriminator+` Instructions  V.${version}` , bot.user.displayAvatarURL())
            .setDescription("Welcome to use the functions of this bot\nHere are some instructions\nIf you need to use the server function, please call `"+p+"setup`\nNeed to use the user function to call any one `"+p+"` Command to generate Json file")
            .addField("**The following are some instructions for first use**","📝If you want to know the instructions, please type `"+p+"command`\n📊For server-specific commands, please type `"+p+"setup help`\n🌎Language settings please type `"+p+"language`\n\n✈Use `"+p+"bi` view bot info  [[top.gg]](https://top.gg/bot/731408794948730961)\n🔎Use `"+p+"inv` view the invite info, OR [click here](https://discord.com/oauth2/authorize?client_id=731408794948730961&scope=bot&permissions=2134900215)\n💻More Chino Bot please type `"+p+"bot` \n\n❓[【Owner's guild】](https://discord.gg/aX2m9MB) - [【Chino bot Support Guild】](https://discord.gg/P2yg5V2)\n⚙Use `"+p+"setup help` Come decorate your own cafe!")
            .setFooter('◆Producer BY 苦力怕怕#8558\n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
            {message.channel.send(helpEmbed)};
        }
    },
    "command":{
        description: "邀請指令",
        fun: function(bot,message,p,args) {
            help(bot,message,args,p)
        }
    },
    "cmd":{
        description: "邀請指令",
        fun: function(bot,message,p,args) {
            help(bot,message,args,p)
        }
    },
    "inv":{
        description: "邀請指令",
        fun: function(bot,message) {
            const invEmbed = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setTitle('Invite bot[click me]')
            .setURL('https://discord.com/oauth2/authorize?client_id=731408794948730961&scope=bot&permissions=2134900215')
            .setAuthor(bot.user.username + "#" + bot.user.discriminator, 'https://cdn.discordapp.com/avatars/731408794948730961/c89f9ea19473699230a0a9e4a4ce677c.webp')
            .setDescription('Server Support/Submit Bug [ https://discord.gg/R9TmPnf ]')
            .setThumbnail('https://cdn.discordapp.com/attachments/611040945495998464/732973619319275640/289100043sq324qp55p7.gif')
            .addFields(
              { name: 'Bot features:', value: 'Have chino picture and fun command.' },
              { name: 'Chino', value: 'Cocoa', inline: true },
              { name: 'Tippy', value: 'other', inline: true },
            )
            .addField('Rabbit S1', 'Rabbit S2', true)
            .setImage('https://cdn.discordapp.com/attachments/611040945495998464/732975856754098236/78469703_p0.jpg')
            .setFooter('Maker BY 苦力怕怕#8558 \n[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
          {message.channel.send(invEmbed)};
        }
    },
    "ver":{
        description:"版本指令",
        fun: function(bot,message,p ,ag) {
            if(ag[0] == "1") {
                ver1(bot,message)
            }else if(ag[0] == "2") {
                ver2(bot,message)
            }else if(ag[0] == "3") {
                ver3(bot,message)
            }else if(ag[0] == "4") {
                ver4(bot,message)
            }else{
            execute(bot,message,p)
        }}
    },
    "version":{
        fun: function(bot,message ,p,ag) {
            if(ag[0] == "1") {
                ver1(bot,message)
            }else if(ag[0] == "2") {
                ver2(bot,message)
            }else if(ag[0] == "3") {
                ver3(bot,message)
            }else if(ag[0] == "4") {
                ver4(bot,message)
            }else{
            execute(bot,message,p)
        }}
    },
}
async function execute(bot,message,p) {
const helpEmbed = new Discord.MessageEmbed()
.setColor('#2d9af8')
.setAuthor(bot.user.username + "#" + bot.user.discriminator+` 版本: ${version}` ,bot.user.displayAvatarURL())
.setDescription("Version Data")
.addField('Please `'+p+'ver [page]`', 'Total 4 pages')
.setTimestamp()
.setFooter(`[First 0 pages]\n◆Maker BY 苦力怕怕#8558   ◆v.${version} \n◆[版權所有•All Rights Reserved.]  `, 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
{message.channel.send(helpEmbed)};
}
async function ver1(bot,message) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#2d9af8')
    .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 版本: ${version}` ,bot.user.displayAvatarURL())
    .setDescription("Version Data (1/4 pages)")
    .addField('0.0.1 (7/14)', 'Bot Founded!')
    .addField('0.0.5 (7/14)','`avatar` done,\n `help` making')
    .addField('0.0.8 (7/15)','`ping` done.')
    .addField('0.1.0 (7/15)','Chino command done')
    .addField('0.1.2 (7/15)','help command optimization\n Used`prefix`+`config`')
    .addField('0.1.5 (7/15)','Cocoa command done')
    .addField('0.2.0 (7/15)','Tippy.S1.S2.Other done!')
    .addField('0.2.2 (7/16)','invite command done.')
    .addField('0.2.8 (7/16)','Server info making.')
    .addField('0.3.0 (7/16)','avatar embed.\nserver avatar done!')
    .addField('0.3.2 (7/16)','Server info done.')
    .addField('0.3.5 (7/16)','Help command embed.')
    .addField('0.3.8 (7/16)','Version command done.')
    .addField('0.4.0 (7/16)','Minecraft IP command done.')
    .addField('0.4.5 (7/16)','DM fix,filter Gallery,Set up 18+')
    .addField('0.5.0 (7/17)','Add cool down & `close` command')
    .addField('0.5.2 (7/21)','optimization `gi`& Add `ui`')
    .addField('0.6.0 (7/23)','Add `clear` command&`tts` command')
    .addField('0.7.0 (7/25)','Add `kic`k&`ban` command,fix `say` command')
    .addField('0.8.0 (7/26)','Update Gallery,Add `bi`')
    .addField('0.9.0 (7/29)','Fix,optimization command+Add `rps`.')
    .setTimestamp()
    .setFooter(`[The 1/4 pages]\n◆Producer BY 苦力怕怕#8558   ◆v.${version} \n◆[版權所有•All Rights Reserved.]  `, 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
    {message.channel.send(helpEmbed)};
}
async function ver2(bot,message) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#2d9af8')
    .setAuthor(bot.user.username + "#" + bot.user.discriminator+` V. ${version}` ,bot.user.displayAvatarURL())
    .setDescription("Version Data (2/4 pages)")
    .addField('1.0.5 (8/4)','Add `love` cmmd')
    .addField('1.1.0 (8/5)','Add `pick` cmd ID')
    .addField('1.2.0 (8/6)','Fix `binfo` Join date/Update Gallery.')
    .addField('1.3.0 (8/8)','Update `sinfo`&`binfo`')
    .addField('1.4.0 (8/10)','Update `uinfo`&Add `vote` cmd')
    .addField('1.5.0 (8/14)','Rabbit cmd embed.')
    .addField('1.6.0 (8/16)','Add Rabbit cmd stat')
    .addField('1.8.0 (8/21)','command fix')
    .addField('2.0.0 (8/27)','code update')
    .addField('2.1.0 (8/28)',"command update")
    .addField('2.2.0 (9/3)','English code merge into Chinese code.')
    .addField('2.3.0 (9/4)','add rank & money')
    .addField('2.4.0 (9/5)','New leaderboard')
    .addField('2.5.0 (9/6)','Money link rabbit function/language settings')
    .addField('2.6.0 (9/6)','Add text generator/New feedback command')
    .addField('2.7.0 (9/12)','Marriage system!')
    .addField('2.8.0 (9/13)','Fix Bug/snipe command')
    .addField('2.8.5 (9/15)','Fix Bug')
    .addField('2.8.6 (9/19)','Fix Bug/access command')
    .addField('2.8.7 (9/20)','Fix Bug/update `prem`')
    .addField('2.8.8 (9/20)','Update help command')
    .setTimestamp()
    .setFooter(`[The 2/4 pages]\n◆Producer BY 苦力怕怕#8558   ◆v.${version} \n◆[版權所有•All Rights Reserved.]  `, 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
    {message.channel.send(helpEmbed)};
}
async function ver3(bot,message) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#2d9af8')
    .setAuthor(bot.user.username + "#" + bot.user.discriminator+` version: ${version}` ,bot.user.displayAvatarURL())
    .setDescription("Version Information (Page 3/4)")
    .addField('3.0.0 (10/1)',"snipe optimization/new achievement")
    .addField('3.1.0 (10/8)',"Pet instruction!")
    .addField('3.2.0 (10/9)',"Fix Bug")
    .addField('3.3.0 (10/10)',"Add a snipe parameter")
    .addField('3.3.5 (10/11)',"Add S3 command")
    .addField('3.4.0 (10/14)',"Pay instruction repair")
    .addField('3.5.0 (10/18)',"Fix Bug")
    .addField('3.6.0 (10/19)',"Level system optimization")
    .addField('3.7.0 (10/24)',"修復動態語音\n新增gura指令\n點兔指令漲價")
    .addField('3.8.0 (10/25)',"修復動態文字\nosu指令")
    .addField('3.8.5 (10/27)',"萬聖節特別代碼")
    .addField('3.8.8 (10/31)',"移除萬聖節代碼")
    .addField('3.9.0 (11/14)',"公告指令 狀態指令\n修復部分bug")
    .setTimestamp()
    .setFooter(`[Page 3/4]\n◆Producer BY 苦力怕怕#8558  ◆v.${version} \n◆[版權所有•All Rights Reserved.]  `, 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
    {message.channel.send(helpEmbed)};
}
async function ver3(bot,message) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#2d9af8')
    .setAuthor(bot.user.username + "#" + bot.user.discriminator+` version: ${version}` ,bot.user.displayAvatarURL())
    .setDescription("Version Information (Page 4/4)")
    .addField('4.0.0 (10/1)',"Add 'fubuki chen gay' Command")
    .setTimestamp()
    .setFooter(`[Page 4/4]\n◆Producer BY 苦力怕怕#8558  ◆v.${version} \n◆[版權所有•All Rights Reserved.]  `, 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
    {message.channel.send(helpEmbed)};
}
async function help(bot,message,p,args) {
    if(args[0] == "common") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` Instructions  V.${version}` ,bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("Common command")
        .setDescription('`hi` Say hi(?) \n`avatar` User avatar \n`savatar` Server avatar \n`date` Now date \n`ping` Ping! \n`say [msg]` Bot talk \n`tts [msg]` Bot talk(tts)  \n`sinfo` Server info \n`uinfo` User info \n`inv` Bot invite \n`version` Bot version')
        .setTimestamp()
        .setFooter('◆Producer BY 苦力怕怕#8558  ◆11個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "rabbit") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` Instructions  V.${version}` ,bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("Picture command")
        .setDescription('[30/40$]`chino` Chino picture(x244+🔞x30) \n[30/40$]`cocoa` Cocoa picture(x32+🔞x3) \n[15$]`tippy` Tippy picture(x16) \n[35$]`other` A meals(?)(x62) \n[25$]`S1` Rabbit S1 \n[25$]`S2` Rabbit S2 \n[30/40$]`shark` Gura \n[25$]`fubuki` Fubuki \n[25$]`peko` Pekora \n[25$]`chen` Chen \n`data` Command stat')
        .setTimestamp()
        .setFooter('◆Producer BY 苦力怕怕#8558  ◆7個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "admin") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` Instructions  V.${version}` ,bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("Admin command")
        .setDescription('`clear [number]` Clear message \n`kick [user]` Kick user \n`ban [user]` Ban user \n`vote` cast a vote  \n`perm` Query permissions')
        .setTimestamp()
        .setFooter('◆Producer BY 苦力怕怕#8558  ◆5個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "music") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` Instructions  V.${version}` ,bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("Music command")
        .setDescription('`cr!!play` [URL] Play music \n`cr!!list` `cr!!queue` Play list\n`cr!!skip` Skip song\n`cr!!stop` Clear song and leave')
        .setTimestamp()
        .setFooter('◆Producer BY 苦力怕怕#8558  ◆4個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "other") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` Instructions  V.${version}` ,bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("Other command")
        .setDescription('`cpu` CPU rate\n`ram` ram rate\n `setup` set json\n`setup help` setup help page\n`feedback` Feedback\n`post` announcement\n `close` close bot(Only maker)')
        .setTimestamp()
        .setFooter('◆Producer BY 苦力怕怕#8558  ◆5個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "money") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` Instructions  V.${version}` , bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("Money command")
        .setDescription('`money` Inquire money\n `daily` Receive daily money\n`moneys` money Leaderboard\n`pay [User]` pay money')
        .setTimestamp()
        .setFooter('◆Producer BY 苦力怕怕#8558  ◆4個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "level") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` Instructions  V.${version}` , bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("Level command")
        .setDescription('`rank` Inquire rank card\n`levels` rank Leaderboard')
        .setTimestamp()
        .setFooter('◆Producer BY 苦力怕怕#8558  ◆2個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "user") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` Instructions  V.${version}` , bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("User command")
        .setDescription('`language` language setting\n`marry [user]` Marry\n`divorce` Divorce\n`snipe` last message\n`card` user card')
        .setTimestamp()
        .setFooter('◆Producer BY 苦力怕怕#8558  ◆5個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "game") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` Instructions  V.${version}` , bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("Game command")
        .setDescription('`mc [IP] [port]`view Minecraft server data \nʻosu` View profile \nʻosucard` Picture profile\n`rps` Paper Scissors Rock! \n`math` Dice \n`love` Chino many love \n`pick [msg]` True or False\n`gay` GAY! ')
        .setTimestamp()
        .setFooter('◆Producer BY 苦力怕怕#8558  ◆4個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "text") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` Instructions  V.${version}` ,bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("Text command")
        .setDescription('`bs [number] [text]` Bluff generator\n`ant [text]` Invisible Ink')
        .setTimestamp()
        .setFooter('◆Producer BY 苦力怕怕#8558  ◆2個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "all") {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#2d9af8')
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` Command:  V.${version}  English pass [cr!!]` , bot.user.displayAvatarURL())
        .setDescription('◆commands all use `'+p+'` \n◆The number next to command is money you need to use this it!')
        .addFields({ name: 'Utility function', value: '`hi` Say hi(?) \n`avatar` User avatar \n`savatar` Server avatar \n`date` Now date \n`ping` Ping! \n`say [msg]` Bot talk \n`tts [msg]` Bot talk(tts)  \n`sinfo` Server info \n`uinfo` User info \n`inv` Bot invite \n`version` Bot version', inline: true })
        .addFields({ name: 'Picture function', value: '[30/40$]`chino` Chino picture(x244+🔞x30) \n[30/40$]`cocoa` Cocoa picture(x32+🔞x3) \n[15$]`tippy` Tippy picture(x16) \n[35$]`other` A meals(?)(x62) \n[25$]`S1` Rabbit S1 \n[25$]`S2` Rabbit S2 \n[30/40$]`shark` Gura \n[25$]`fubuki` Fubuki \n[25$]`peko` Pekora  \n[25$]`chen` Chen \n`data` Command stat', inline: true })
        .addFields({ name: 'Game function', value: '`mc [IP] [port]`view Minecraft server data \n`osu` View profile \n`osucard` Picture Information\n`rps` Paper Scissors Rock! \n`math` Dice \n`love` Chino many love \n`pick [msg]` True or False\n`gay` GAY! ', inline: true })
        .addFields({ name: 'Admin function', value: '`clear [number]` Clear message \n`kick [user]` Kick user \n`ban [user]` Ban user \n`vote` cast a vote  \n`perm` Query permissions', inline: true })
        .addFields({ name: 'Music function', value: '`cr!!play` [URL] Play music \n`cr!!list` `cr!!queue` Play list\n`cr!!skip` Skip song\n`cr!!stop` Clear song and leave', inline: true })
        .addFields({ name: 'Other function', value: '`cpu` CPU rate\n`ram` ram rate\n `setup` set json\n`setup help` setup help page\n`feedback` Feedback\n`post` announcement\n `close` close bot(Only maker)', inline: true })
        .addFields({ name: 'Money function', value: '`money` Inquire money\n `daily` Receive daily money\n`moneys` money Leaderboard\n`pay [User]` pay money', inline: true})
        .addFields({ name: 'Rank function', value: '`rank` Inquire rank card\n`levels` rank Leaderboard', inline: true})
        .addFields({ name: 'User function', value: '`language` language setting\n`marry [user]` Marry\n`divorce` Divorce\n`snipe` last message\n`card` user card', inline: true})
        .addFields({ name: 'Text function', value: '`bs [number] [text]` Bluff generator\n`ant [text]` Invisible Ink',inline: true})
        .setTimestamp()
        .setFooter('◆Maker BY 苦力怕怕#8558  ◆48 command! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        {message.channel.send(helpEmbed)};
    }else{
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#2d9af8')
        .setTitle("Help command")
        .setDescription("Enter `"+p+"command [parameter]` Call up the help page")
        .addField("parameter", "- `common` Common Features\n- `rabbit` Picture Features\n- `game` Game features\n- `admin`  Admin features\n- `music`  Music features\n- `other`  Other features\n- `money`  Money features\n- `level`  Level features\n- `user`   User features\n- `text`   Text features\n- `all` All command")
        message.channel.send(helpEmbed)
    }
}