module.exports = {
    name: 'hbd',
    cooldown: 5,
    description: "`Says happy birthday to a spefic user`",
    execute(message, args, cmd, client, Discord) {

        let member = message.mentions.users.first() || message.author

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00ffff')
            .setTitle('Happy Birthday')
            .setDescription(`${member.username}, I want to wish you all the love and happiness in the world, all of which you deserve. Happy birthday my friend! You deserve all the cakes, love, hugs and happiness today. Enjoy your day my friend! May God shower you with blessings today and always. Happy birthday wishes.`)
            .setImage('https://img.huffingtonpost.com/asset/59a752f51e00002a00c601e7.jpg?ops=scalefit_820_noupscale')
            .setTimestamp('')
        message.channel.send(newEmbed);
    }
}



