module.exports = {
    name: 'kick',
    cooldown: 5,
    description: "`Kicks a member`",
    execute(message, args, cmd, client, Discord) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have permission to access this command")
        const member = message.mentions.users.first();
        if (member) {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User has been kicked")
        } else {
            message.channel.send('couldnt kick that user');
        }
    }
}