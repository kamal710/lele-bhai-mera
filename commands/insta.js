module.exports = {
    name: 'insta',
    aliases: ['instagram'],
    cooldown: 5,
    description: "`This is the chat rules embed message`",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00ffff')
            .addFields(
                {
                    name: '<a:SE_insta_op:837300629855535104> **SKULZ OFFICIAL INSTAGRAM ACCOUNT LINK** <a:SE_insta_op:837300629855535104>',
                    value: '[Instagram](https://instagram.com/skulzesports?igshid=15gz4t0vr081n)'
                }
            )

        message.channel.send(newEmbed);
    }
}
