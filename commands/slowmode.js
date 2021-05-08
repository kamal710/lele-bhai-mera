module.exports = {
    name: 'slowmode',
    aliases: ['sm'],
    cooldown: 5,
    description: "`Dont try this`",
    execute(message, args, cmd, client, Discord) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have permission to access this command")
        message.channel.setRateLimitPerUser(args[0])
        message.channel.send(`Slowmode is now set to ${args[0]}s`)
    }

}