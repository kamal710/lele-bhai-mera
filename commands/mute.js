const ms = require('ms');
module.exports = {
    name: 'mute',
    cooldown: 5,
    description: "`This command mutes a member`",
    execute(message, args, cmd, client, Discord) {
        if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You don't have permission to access this command")

        const target = message.mentions.users.first();
        if (target) {

            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.add(muteRole);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.add(muteRole);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole);
            }, ms(args[1]));
        } else {
            message.channel.send('Unable to find that user');
        }
    }
}


