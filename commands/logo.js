module.exports = {
    name: 'logo',
    cooldown: 5,
    description: "`Our official logo GIF`",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00ffff')
            .setTitle('Our official SE logo')
            .setImage('https://cdn.discordapp.com/attachments/829016768168067073/834400934695010324/New_Project_9_DB7DD2D.gif')
            .setFooter('')
            .setTimestamp('')

        message.channel.send(newEmbed);
    }

}