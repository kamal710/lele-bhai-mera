const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'userinfo',
    aliases: ['ui'],
    cooldown: 5,
    description: "`Gives info about a user`",
    execute(message, args, cmd, client, Discord) {

        const { guild, channel } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)

        const embed = new MessageEmbed()
            .setColor('#00ffff')
            .setThumbnail('https://cdn.discordapp.com/attachments/833210998319874048/835523687867351070/1618990139134.png')
            .setAuthor(`${user.username}`, user.displayAvatarURL())
            .addFields({
                name: 'User Tag',
                value: user.tag
            }, {
                name: '<a:SE_tick:836853988594679858> Nickname',
                value: user.username,
            }, {
                name: '<a:SE_tick:836853988594679858> Joined At',
                value: new Date(member.joinedTimestamp).toLocaleDateString(),
            }, {
                name: '<a:SE_tick:836853988594679858> Signed Up At',
                value: new Date(user.createdTimestamp).toLocaleDateString()
            }, {
                name: '<a:SE_tick:836853988594679858> Roles',
                value: member.roles.cache.size - 1
            })
        message.channel.send(embed)
    }

}