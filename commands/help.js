const Discord = require("discord.js")
const { version } = require('../config.json')
module.exports = {
    "help":{
        description: "幫助指令",
        fun: function(bot,message,p,ag) {
            const helpEmbed = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 指令大全  V.${version}` , bot.user.displayAvatarURL())
            .setDescription("歡迎使用本機器人的功能\n下面為一些指令教學\n若需要用到伺服器功能請打 `"+p+"setup`\n需要用到用到用戶功能隨意打任何一個`"+p+"`指令即可生成Json檔案")
            .addField("以下為一些初次使用指令","📝想知道指令使用請打 `"+p+"command`\n📊伺服器專用指令請打 `"+p+"setup help`\n🌎語言設置請打 `"+p+"language`\n\n✈使用 `"+p+"bi` 可查看機器人資訊  [[top.gg]](https://top.gg/bot/731408794948730961)\n🔎使用 `"+p+"inv` 查看邀請介面,或者點擊 [這裡邀請](https://discord.com/oauth2/authorize?client_id="+bot.user.id+"&scope=bot&permissions=2134900215)\n💻更多智乃機器人請打 `"+p+"bot` \n\n❓[【服主的群組ouob】](https://discord.gg/aX2m9MB) - [【智乃機器人支援群】](https://discord.gg/P2yg5V2)\n⚙使用 `"+p+"setup help` 來裝飾自己的咖啡廳吧!")
            .setFooter('◆製作者BY 苦力怕怕#8558\n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
            {message.channel.send(helpEmbed)};
        }
    },
    "command":{
        description: "指令頁面",
        fun: function(bot,message,p,args) {
            help(bot,message,p,args)
        }
    },
    "cmd":{
        description: "指令頁面",
        fun: function(bot,message,p,args) {
            help(bot,message,p,args)
        }
    },
    "inv":{
        description: "邀請指令",
        fun: function(bot,message) {
            const invEmbed = new Discord.MessageEmbed()
            .setColor('#2d9af8')
            .setTitle('邀請機器人[點我]')
            .setURL('https://discord.com/oauth2/authorize?client_id='+bot.user.id+'&scope=bot&permissions=2134900215')
            .setAuthor(bot.user.username + "#" + bot.user.discriminator, bot.user.displayAvatarURL())
            .setDescription('群組協助/提交Bug [ https://discord.gg/R9TmPnf ]')
            .setThumbnail('https://cdn.discordapp.com/attachments/611040945495998464/732973619319275640/289100043sq324qp55p7.gif')
            .addFields(
              { name: '機器人特色:', value: '擁有智乃/心愛/提比等其他點兔圖片' },
              { name: '智乃', value: '心愛', inline: true },
              { name: '提比', value: '其他', inline: true },
            )
            .addField('點兔第一季圖', '點兔第二季圖', true)
            .setImage('https://cdn.discordapp.com/attachments/611040945495998464/732975856754098236/78469703_p0.jpg')
            .setFooter('製作者BY 苦力怕怕#8558 \n[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
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
}
async function execute(bot,message,p) {
const helpEmbed = new Discord.MessageEmbed()
.setColor('#2d9af8')
.setAuthor(bot.user.username + "#" + bot.user.discriminator+` 版本: ${version}` , bot.user.displayAvatarURL())
.setDescription("版本資訊")
.addField('請使用'+p+'ver [頁數]', '共 4 頁')
.setTimestamp()
.setFooter(`[第 0 頁]\n◆製作者BY 苦力怕怕#8558   ◆v.${version} \n◆[版權所有•All Rights Reserved.]  `, 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
{message.channel.send(helpEmbed)};
}
async function ver1(bot,message) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#2d9af8')
    .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 版本: ${version}` , bot.user.displayAvatarURL())
    .setDescription("版本資訊 (1/4頁)")
    .addField('0.0.1 (7/14)', '機器人創立!')
    .addField('0.0.5 (7/14)','大頭貼指令完成,\n help初形')
    .addField('0.0.8 (7/15)','ping指令完成 ')
    .addField('0.1.0 (7/15)','智乃指令完成')
    .addField('0.1.2 (7/15)','help指令優化\n使用`prefix`+`config`')
    .addField('0.1.5 (7/15)','心愛指令完成')
    .addField('0.2.0 (7/15)','提比.S1.S2.Other完成!')
    .addField('0.2.2 (7/16)','邀請指令完成')
    .addField('0.2.8 (7/16)','伺服器資訊指令初形')
    .addField('0.3.0 (7/16)','大頭貼鑲入\n伺服器大頭貼完成!')
    .addField('0.3.2 (7/16)','伺服器資訊完成')
    .addField('0.3.5 (7/16)','Help指令鑲入')
    .addField('0.3.8 (7/16)','版本指令完成')
    .addField('0.4.0 (7/16)','麥塊IP查詢完成')
    .addField('0.4.5 (7/16)','DM修復,重新過濾智乃圖庫,設置18+')
    .addField('0.5.0 (7/17)','新增冷卻機制及關閉機制')
    .addField('0.5.2 (7/21)','優化gi &新增ui')
    .addField('0.6.0 (7/23)','新增清除指令/tts指令')
    .addField('0.7.0 (7/25)','新增踢出封鎖指令 優化say指令')
    .addField('0.8.0 (7/26)','更新圖庫,新增bi')
    .addField('0.9.0 (7/29)','修復&指令優化+新增猜拳指令')
    .setTimestamp()
    .setFooter(`[第 1/4 頁]\n◆製作者BY 苦力怕怕#8558   ◆v.${version} \n◆[版權所有•All Rights Reserved.]  `, 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
    {message.channel.send(helpEmbed)};
}
async function ver2(bot,message) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#2d9af8')
    .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 版本: ${version}` ,  bot.user.displayAvatarURL())
    .setDescription("版本資訊 (2/4頁)")
    .addField('1.0.5 (8/4)','新增love指令')
    .addField('1.1.0 (8/5)','新增pick指令 新增頭貼使用ID')
    .addField('1.2.0 (8/6)','修復binfo加入資料/更新圖庫')
    .addField('1.3.0 (8/8)','sinfo新增功能/binfo新增功能')
    .addField('1.4.0 (8/10)','uinfo優化&新增功能/新增投票功能')
    .addField('1.5.0 (8/14)','點兔功能鑲入化')
    .addField('1.6.0 (8/16)','新增點兔功能統計')
    .addField('1.7.0 (8/20)','新增設置功能&動態頻道')
    .addField('1.8.0 (8/21)','指令優化/加入&離開設置')
    .addField('2.0.0 (8/27)','代碼全優化')
    .addField('2.1.0 (8/28)',"指令優化")
    .addField('2.2.0 (9/3)','英文版代碼併入中文版')
    .addField('2.3.0 (9/4)','新增經驗&金錢系統')
    .addField('2.4.0 (9/5)','新增排行榜')
    .addField('2.5.0 (9/6)','金錢連結點兔功能/語言設置')
    .addField('2.6.0 (9/6)','新增文字產生器/新增反饋指令')
    .addField('2.7.0 (9/12)','結婚系統!')
    .addField('2.8.0 (9/13)','修復Bug/snipe指令')
    .addField('2.8.5 (9/15)','修復Bug')
    .addField('2.8.6 (9/19)','修復Bug/access指令')
    .addField('2.8.7 (9/20)','修復Bug/優化prem指令')
    .addField('2.8.8 (9/20)','優化 help指令')
    .addField('2.9.0 (9/27)',"加入離開設置優化")
    .setTimestamp()
    .setFooter(`[第 2/4 頁]\n◆製作者BY 苦力怕怕#8558   ◆v.${version} \n◆[版權所有•All Rights Reserved.]  `, 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
    {message.channel.send(helpEmbed)};
}
async function ver3(bot,message) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#2d9af8')
    .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 版本: ${version}` ,  bot.user.displayAvatarURL())
    .setDescription("版本資訊 (3/4頁)")
    .addField('3.0.0 (10/1)',"snipe 優化/新增成就")
    .addField('3.1.0 (10/8)',"寵物指令!")
    .addField('3.2.0 (10/9)',"修復Bug")
    .addField('3.3.0 (10/10)',"新增snipe參數")
    .addField('3.3.5 (10/11)',"新增S3指令")
    .addField('3.4.0 (10/14)',"Pay指令修復")
    .addField('3.5.0 (10/18)',"修復Bug")
    .addField('3.6.0 (10/19)',"等級系統優化")
    .addField('3.7.0 (10/24)',"修復動態語音\n新增gura指令\n點兔指令漲價")
    .addField('3.8.0 (10/25)',"修復動態文字\nosu指令")
    .addField('3.8.5 (10/27)',"萬聖節特別代碼")
    .addField('3.8.8 (10/31)',"移除萬聖節代碼")
    .addField('3.9.0 (11/14)',"公告指令 狀態指令\n修復部分bug")
    .setTimestamp()
    .setFooter(`[第 3/4 頁]\n◆製作者BY 苦力怕怕#8558   ◆v.${version} \n◆[版權所有•All Rights Reserved.]  `, 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
    {message.channel.send(helpEmbed)};
}
async function ver4(bot,message) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#2d9af8')
    .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 版本: ${version}` , bot.user.displayAvatarURL())
    .setDescription("版本資訊 (4/4頁)")
    .addField('4.0.0 (10/1)',"新增fubuki chen  gay指令")
    .setTimestamp()
    .setFooter(`[第 3/4 頁]\n◆製作者BY 苦力怕怕#8558   ◆v.${version} \n◆[版權所有•All Rights Reserved.]  `, 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
    {message.channel.send(helpEmbed)};
}
async function help(bot,message,p,args) {
    if(args[0] == "common") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 指令大全  V.${version}` ,  bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("普通指令")
        .setDescription('`hi` 說嗨指令(?) \n`avatar` 個人大頭貼 \n`savatar` 伺服器頭貼 \n`date` 顯示今天日期 \n`ping` 延遲測試 \n`say [訊息]` 機器人說話 \n`tts [訊息]` 機器人說話(tts)  \n`sinfo` 伺服器資訊 \n`uinfo` 成員資訊 \n`inv` 機器人邀請連結 \n`version` 機器人版本')
        .setTimestamp()
        .setFooter('◆製作者BY 苦力怕怕#8558  ◆11個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "rabbit") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 指令大全  V.${version}` ,  bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("觸圖指令")
        .setDescription('[30/40$]`chino` 發出智乃圖片(x244+🔞x30) \n[30/40$]`cocoa` 發出心愛圖片(x32+🔞x3) \n[15$]`tippy` 發出提比圖片(x16) \n[35$]`other` 發出一個歡樂分享餐(?)(x62) \n[25$]`S1` 發出第一季圖片 \n[25$]`S2` 發出第二季圖片\n[30$/40$]`shark` 發出鯊鯊圖片 \n[25$]`fubuki` 發出白上吹雪畫作 \n[25$]`peko` 發出兔兔畫作  \n[25$]`chen` 發出八雲橙畫作 \n`data` 指令統計表')
        .setTimestamp()
        .setFooter('◆製作者BY 苦力怕怕#8558  ◆7個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "admin") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 指令大全  V.${version}` ,  bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("管理指令")
        .setDescription('`clear [數量]` 清除訊息 \n`kick [成員]` 踢出成員 \n`ban [成員]` 封鎖成員 \n`vote [文字] [提及]` 投票 \n`perm [成員]` 查看權限\n`server`  伺服器總設定')
        .setTimestamp()
        .setFooter('◆製作者BY 苦力怕怕#8558  ◆5個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "music") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 指令大全  V.${version}` ,  bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("音樂指令")
        .setDescription('`cr!!play` [網址] 播放音樂 \n`cr!!list` `cr!!queue` 播放清單\n`cr!!skip` 跳過歌曲\n`cr!!stop` 清除歌曲並離開語音')
        .setTimestamp()
        .setFooter('◆製作者BY 苦力怕怕#8558  ◆5個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "other") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 指令大全  V.${version}` , bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("其他指令")
        .setDescription('`cpu` CPU使用量\n`ram` 記憶體使用量\n `setup` 設置json\n`setup help` 查看設置幫助\n`feedback` 建議反饋\n \n`post` 公告 \n `close` 強制關閉(僅作者使用)')
        .setTimestamp()
        .setFooter('◆製作者BY 苦力怕怕#8558  ◆5個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "money") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 指令大全  V.${version}` , bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("金錢指令")
        .setDescription('`money` 查看金錢\n `daily` 領取每日金錢\n`moneys` 金錢排行榜\n`pay [用戶]` 給錢')
        .setTimestamp()
        .setFooter('◆製作者BY 苦力怕怕#8558  ◆4個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "level") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 指令大全  V.${version}` , bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("等級指令")
        .setDescription('`rank` 查詢經驗值\n`levels` 等級排行榜')
        .setTimestamp()
        .setFooter('◆製作者BY 苦力怕怕#8558  ◆2個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "user") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 指令大全  V.${version}` , bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("用戶指令")
        .setDescription('`language` 語言設置\n`marry [用戶]` 與某人結婚\n`divorce` 離婚\n`snipe` 上個訊息\n`card`  識別卡\n`adv`  成就卡\n`pet` 寵物指令')
        .setTimestamp()
        .setFooter('◆製作者BY 苦力怕怕#8558  ◆5個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "game") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 指令大全  V.${version}` , bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("遊戲指令")
        .setDescription('`mc [IP] [port]` 查詢麥塊伺服器 \n`osu` 查看個人資料 \n`osucard` 圖片資料 \n`rps` 猜拳指令! \n`math` 擲骰子(1-6) \n`love` 智乃愛你的比率(%) \n`pick [問題]` 是或否\n`gay` Gay的比率')
        .setTimestamp()
        .setFooter('◆製作者BY 苦力怕怕#8558  ◆4個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "text") {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 指令大全  V.${version}` , bot.user.displayAvatarURL())
        .setColor('#2d9af8')
        .setTitle("文字指令")
        .setDescription('`bs [字數] [文字]` 唬爛產生器 \n`ant [文字]` 螞蟻文產生器')
        .setTimestamp()
        .setFooter('◆製作者BY 苦力怕怕#8558  ◆2個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        message.channel.send(helpEmbed);
    }else if(args[0] == "all") {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#2d9af8')
        .setAuthor(bot.user.username + "#" + bot.user.discriminator+` 指令大全  V.${version}` ,bot.user.displayAvatarURL())
        .setDescription('◆以下指令除了音樂功能, 其他都使用 `'+p+'` \n◆指令旁邊有寫數字代表你需要多少錢來使用此指令!')
        .addFields({ name: '普通功能', value: '`hi` 說嗨指令(?) \n`avatar` 個人大頭貼 \n`savatar` 伺服器頭貼 \n`date` 顯示今天日期 \n`ping` 延遲測試 \n`say [訊息]` 機器人說話 \n`tts [訊息]` 機器人說話(tts)  \n`sinfo` 伺服器資訊 \n`uinfo` 成員資訊 \n`inv` 機器人邀請連結 \n`version` 機器人版本', inline: true })
        .addFields({ name: '觸圖功能', value: '[30/40$]`chino` 智乃畫作(x244+🔞x30) \n[30/40$]`cocoa` 心愛畫作(x32+🔞x3) \n[15$]`tippy` 提比畫作(x16) \n[35$]`other` 發出一個歡樂分享餐(?)(x62) \n[25$]`S1` 發出第一季圖片 \n[25$]`S2` 發出第二季圖片\n[30$/40$]`shark` 鯊魚畫作 \n[25$]`fubuki` 白上吹雪畫作 \n[25$]`peko` 發出兔兔畫作  \n[25$]`chen` 八雲橙畫作  \n`data` 指令統計表', inline: true })
        .addFields({ name: '遊戲功能', value: '`mc [IP] [port]` 查詢麥塊伺服器 \n`osu` 查看個人資料 \n`osucard` 圖片資料 \n`rps` 猜拳指令! \n`math` 擲骰子(1-6) \n`love` 智乃愛你的比率(%) \n`pick [問題]` 是或否 \n`gay` Gay的比率', inline: true })
        .addFields({ name: '管理功能', value: '`clear [數量]` 清除訊息 \n`kick [成員]` 踢出成員 \n`ban [成員]` 封鎖成員 \n`vote` 投票 \n`perm` 查看權限\n`server` 伺服器總設定', inline: true })
        .addFields({ name: '音樂功能', value: '`cr!!play` [網址] 播放音樂 \n`cr!!list` `cr!!queue` 播放清單\n`cr!!skip` 跳過歌曲\n`cr!!stop` 清除歌曲並離開語音', inline: true })
        .addFields({ name: '其他功能', value: '`cpu` CPU使用量\n`ram` 記憶體使用量\n `setup` 設置json\n`setup help` 查看設置幫助\n`feedback` 建議反饋\n`post` 公告 \n `close` 強制關閉(僅作者使用)', inline: true })
        .addFields({ name: '金錢功能', value: '`money` 查看金錢\n `daily` 領取每日金錢\n`moneys` 金錢排行榜\n`pay [用戶]` 給錢', inline: true})
        .addFields({ name: '等級功能', value: '`rank` 查詢經驗值\n`levels` 等級排行榜', inline: true})
        .addFields({ name: '用戶功能', value: '`language` 語言設置\n`marry [用戶]` 與某人結婚\n`divorce` 離婚\n`snipe` 上個訊息\n`card` 識別卡\n`adv` 成就卡\n`pet` 寵物指令', inline: true})
        .addFields({ name: '文字功能', value: '`bs [字數] [文字]` 唬爛產生器 \n`ant [文字]` 螞蟻文產生器',inline: true})
        .setTimestamp()
        .setFooter('◆製作者BY 苦力怕怕#8558  ◆48個指令! \n◆[版權所有•All Rights Reserved.]  ', 'https://images-ext-2.discordapp.net/external/z2VL24Kx8kArxG96MNM-GsQf1oMKADfewPobcVW41sk/%3Fv%3D1/https/cdn.discordapp.com/emojis/681075641096863868.png');
        {message.channel.send(helpEmbed)};
    }else{
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#2d9af8')
        .setTitle("幫助指令")
        .setDescription("打 `"+p+"command [參數]` 叫出幫助頁面")
        .addField("參數", "- `common` 普通功能\n- `rabbit` 觸圖功能\n- `game` 遊戲功能\n- `admin`  管理功能\n- `music`  音樂功能\n- `other`  其他功能\n- `money`  金錢功能\n- `level`  等級功能\n- `user`   用戶功能\n- `text`   文字功能\n- `all` 全部指令顯示")
        message.channel.send(helpEmbed)
    }
}