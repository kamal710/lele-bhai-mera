const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'serverinfo',
    aliases: ['si', 'sinfo'],
    cooldown: 5,
    description: "`gives info about a perticular server`",
    execute(message, args, cmd, client, Discord) {

        const { guild } = message
        const icon = message.guild.iconURL()
        const rolescount = message.guild.roles.cache
        const emojicount = message.guild.emojis.cache
        const members = message.guild.members.cache
        const create = message.guild.createdAt.toLocaleDateString()

        const embed = new MessageEmbed()
            .setColor('#00ffff')
            .setTitle('Server Info')
            .setThumbnail(`${icon}`)
            .addField('<a:SE_tick:836853988594679858> **Server Owner**', guild.owner)
            .addField('<a:SE_tick:836853988594679858> **Server ID**', guild.id)
            .addField('<a:SE_tick:836853988594679858> **Server Created On**', create)
            .addField('<a:SE_tick:836853988594679858> **Member Count**', `${members.size}`)
            .addField('<a:SE_tick:836853988594679858> **Boost Count**', guild.premiumSubscriptionCount)
            .addField('<a:SE_tick:836853988594679858> **Boost Level**', guild.premiumTier)
            .addField('<a:SE_tick:836853988594679858> **Roles**', `${rolescount.size}`, true)
            .addField('<a:SE_tick:836853988594679858> **Emoji Count**', `${emojicount.size}`, true)
            .setFooter('ServerInfo', icon)
            .setTimestamp();

        message.channel.send(embed)
    }

}