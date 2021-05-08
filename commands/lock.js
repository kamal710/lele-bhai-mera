const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'lock',
    cooldown: 5,
    description: "`Locks a channel`",
    execute(message, args, cmd, client, Discord) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have permission to access this command")
        const channel = message.mentions.channels.first()
        if (!channel) return message.channel.send("Please mention a channel")
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if (!role) return message.channel.send("Pls give a valid id")
        let embed = new MessageEmbed()
            .setColor('#00ffff')
            .setTitle('Channel locked')
            .setDescription(`This channel has been locked by ${message.author.tag}`)
            .setTimestamp()
        channel.updateOverwrite(role, {
            SEND_MESSAGES: false
        })
        message.channel.send(embed)

    }

}