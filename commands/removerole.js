module.exports = {
    name: 'removerole',
    aliases: ['rrole'],
    cooldown: 5,
    description: "`Dont try this`",
    execute(message, args, cmd, client, Discord) {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have permission to access this command")
        let user = message.mentions.members.first()
        if (!user) return message.channel.send("No user mentioned")

        let role = message.mentions.roles.first()
        if (!role) return message.channel.send("No role mentioned")

        message.channel.send(`${role} role has been removed from ${user}`)
        user.roles.remove(role)

    }
}