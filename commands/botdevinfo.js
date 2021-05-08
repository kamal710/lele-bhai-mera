const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'botdevinfo',
    aliases: ['bdi'],
    cooldown: 5,
    description: "`gives info about the bot`",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00ffff')
            .setAuthor(`INFORMATION OF BOT DEVELOPER S Σ・ＢＬＵΣ６６６🔥`)
            .addFields({
                name: ' <:bot_dev:838073213535649882> **TAG**',
                value: '`S Σ・ＢＬＵΣ６６６🔥` \n\n\n\n\n'
            }, {
                name: '<:bot_dev:838073213535649882> **USER MENTION**',
                value: '<@781019093678424094> \n\n\n\n\n'
            }, {
                name: "<:bot_dev:838073213535649882> **ID**",
                value: '781019093678424094 \n\n\n\n\n'
            }, {
                name: "<:bot_dev:838073213535649882> **ABOUT**",
                value: '`Just a progammer and gamer`'
            }, {
                name: "<:discordjs:838075149407879178> **PROGAMMING LANGUAGE**",
                value: 'discord.js'
            }
            )
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp();

        message.channel.send(newEmbed)


    }

}