module.exports = {
    name: 'announcment',
    cooldown: 5,
    description: "`This is the chat rules embed message`",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('"  S Σ・KinG🔥🇮🇳')
            .setDescription(':round_pushpin:HEY GUYS WE ARE GLAD TO ANNOUNCE YOU ABOUT OUR TIER 3 SCRIMS STARTING FROM 21/04/2021 AND EVERY UNDERDOG TEAMS ARE INVITED:fire: \n\n ALL YOU HAVE TO DO IS REGISTER YOUR TEAM IN REGISTRATION CHANNELS. \n \n <#833261905958535188>\n <#833262010065879081> \n\n\n REGARDS • \n\n SΣ・KinG:flag_in::fire: \n \n SkuLZxEsportS™INDIA:flag_in:\n @everyone')
            .setImage('https://cdn.discordapp.com/attachments/831942251415339008/833595986201804810/SIX_BF6F5858-14C7-44B8-B693-882AE66E3D6C.png')
            .setFooter('Scrims are back');

        message.channel.send(newEmbed);
    }
}



