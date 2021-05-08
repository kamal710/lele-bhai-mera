module.exports = {
    name: 'unmute',
    cooldown: 5,
    description: "`This unmutes a muted person`",
    execute(message, args, cmd, client, Discord) {
        if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You don't have permission to access this command")

        const target = message.mentions.users.first();
        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else {
            message.channel.send('No such member found');
        }
    }
}
