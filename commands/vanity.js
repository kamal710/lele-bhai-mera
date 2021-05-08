module.exports = {
    name: 'vanity',
    cooldown: 5,
    description: "`Official SE vanity`",
    execute(message, args, cmd, client, Discord) {
        message.channel.send('https://discord.gg/skulz');
    }

}