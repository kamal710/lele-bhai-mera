module.exports = {
    name: 'ban',
    cooldown: 5,
    description: "`Bans a member`",
    execute(message, args, cmd, client, Discord) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission to access this command")
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#00ffff')
                .setDescription('User has been successfully banned')

          message.channel.send(newEmbed);
            } else {
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#00ffff')
                .setDescription('Unable to ban that member')

          message.channel.send(newEmbed);
            }
    }
}

