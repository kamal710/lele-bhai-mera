const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'botinfo',
    aliases: ['bi'],
    cooldown: 5,
    description: "`gives info about the bot`",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00ffff')
            .setAuthor(`INFORMATION OF SKULZ・OFFICIAL BOT`
            ).addFields({
                name: '<a:SE_tick:836853988594679858> Bot Username',
                value: 'SKULZ・OFFICIAL'
            }, {
                name: '<a:SE_tick:836853988594679858> Version',
                value: '1.0.0'
            }, {
                name: "<a:SE_tick:836853988594679858> Prefix",
                value: 'se'
            }, {
                name: "<a:SE_tick:836853988594679858> Server's",
                value: client.guilds.cache.size
            }, {
                name: '<a:SE_tick:836853988594679858> Watching ',
                value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} members`
            })
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp();

        message.channel.send(newEmbed)


    }

}