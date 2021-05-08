const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'ownerinfo',
    aliases: ['oi'],
    cooldown: 5,
    description: "`gives info about the bot`",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00ffff')
            .setAuthor(`INFORMATION OF BOT OWNER S Σ・KinG🇮🇳🔥`
            ).addFields({
                name: '<a:i_am_king:797112481566556210> **TAG**',
                value: '`S Σ・KinG🇮🇳🔥#0419` \n\n\n\n\n'
            }, {
                name: '<a:i_am_king:797112481566556210> **USER MENTION**',
                value: '<@728198724052058195> \n\n\n\n\n'
            }, {
                name: "<a:i_am_king:797112481566556210> **ID**",
                value: '`728198724052058195` \n\n\n\n\n'
            }, {
                name: "**<a:i_am_king:797112481566556210> ABOUT**",
                value: '`Owner of S Σ join now https://discord.gg/AxaMqzMw4r`'
            }
            )
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp();

        message.channel.send(newEmbed)


    }

}