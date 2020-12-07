const fetch = require('node-fetch')
const Discord = require('discord.js');
module.exports = {
    "bs": {
        description: "Bluff generator",
        authority: "everyone",
        instructions: "bs [number] [text]",
        fun: function (bot, message, hi,a, nubmer, ...text) { // nubmer接指令後第一個參數  ...text的意思是接第一個以後的所有參數
            if (parseFloat(nubmer).toString() !== "NaN" && Number(nubmer) <= 1000) {
                if (text.join(" ") === "") {
                    message.channel.send("Please enter subject")
                    return
                }
                let jjson = JSON.stringify({ "Topic": text.join(" "), "MinLen": Number(nubmer) })
                fetch("https://api.howtobullshit.me/bullshit", { method: 'POST', body: jjson }).then(function (w) {
                    return w.text()
                }).then(function (w) {
                    e = w.replace(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g, "")
                    c = e.replace(/<br>/g, "\n")
                    let embed = new Discord.MessageEmbed();
                    embed.setTitle("Bluff generator")
                    embed.setDescription(`Subject:\`${text.join(" ")}\`\ncontent:\`\`\`fix\n${c}\n\`\`\``)
                    embed.setFooter(text = message.author.tag, iconURL = message.author.avatarURL())
                    message.channel.send(embed)
                })
            } else {
                message.channel.send("Please enter an integer less than 1000")
            }
        }
    },
    "ant": {
        description: "螞蟻文產生器",
        authority: "everyone",
        fun: function (bot, message,a, hi, ...text) {
            if (text.join(" ") === "") {
                message.channel.send("❌please enter text.")
                return}
            if (text.join(" ").length > 100) {
                message.channel.send("Please fill in the text less than 100")
                return;}
            var ant = "\u0489";
            let str = text.join(" ")
            var snd = str.replace(/(.{0})/g, '$1' + ant);
            message.channel.send(snd)
        }
    },
    "election": {
        description: "選舉",
        authority: "everyone",
        fun: function (bot, message, hi, ...text) {
            let date = new Date().getUTCDate()-1
            fetch("https://interactives.ap.org/elections/live-data/production/2020-11-03/president/summary.json").then(function (w) {
                return w.text()
            }).then(function (w) {
                var user = w.toString();user = JSON.parse(user);
                let embed = new Discord.MessageEmbed()
                embed.setTitle("🇺🇸2020美國大選投票📮")
                embed.setColor("#243ce0")
                embed.setDescription("總共 "+ user.results.US[0].summary.electTotal+ " 票")
                embed.addField("<:biden:773532245943517204> 拜登 Biden - "+user.results.US[0].summary.results[0].electWon +" 票" ,"總票數: "+user.results.US[0].summary.results[0].voteCount+" 票\n得票率: "+user.results.US[0].summary.results[0].votePct+" %")
                embed.addField("<:trump:773532247017128016> 川普 Trump - "+user.results.US[0].summary.results[1].electWon +" 票" ,"總票數: "+user.results.US[0].summary.results[1].voteCount+" 票\n得票率: "+user.results.US[0].summary.results[1].votePct+" %" )
                let wod = "<:Transparent:751597051963506698>"
                let l1 = Math.abs((user.results.US[0].summary.results[0].electWon)/270*10)
                let l2 = Math.abs((user.results.US[0].summary.results[1].electWon)/270*10)
                let q1 = "";let q2 = "";let q3 = "";let q4 = ""
                for(i=0;i< l1 ;i++){q1 = "🟦" + q1};for(i=0;i< l2 ;i++){q2 = "🟥" + q2}
                let e1 = 10 - l1;let e2 = 10 - l2;
                for(i=0;i< e1 ;i++){q3 = wod + q3}for(i=0;i< e2 ;i++){q4 = wod + q4};let e5 = q3+"|"+q4
                embed.addField("長條圖:","<:biden:773532245943517204> 拜登 Biden - "+user.results.US[0].summary.results[0].electWon+wod+wod+"勝選門檻270"+wod+wod+user.results.US[0].summary.results[1].electWon+" - <:trump:773532247017128016> 川普 Trump\n"+wod+wod+wod+wod+wod+wod+wod+wod+wod+wod+wod+"|"+wod+wod+wod+"\n"+q1+e5+q2)
                let time = new Date(user.timestamp)
                if(time.getHours() > 12) {var h = (time.getHours())-12;var h2 = "PM"}else{var h = time.getHours();var h2 = "AM"}
                embed.setFooter("更新日期: "+ (time.getUTCMonth()+1)+"月"+time.getUTCDate()+"日 "+h+":"+time.getMinutes()+h2+"\n")
                embed.setTimestamp()
                message.channel.send(embed)
                
            })

        }
    },
}