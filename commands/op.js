const { MessageEmbed } = require("discord.js")

module.exports = {
      name: 'op',
      cooldown: 5,
      description: "`Not a question to be asked`",
      execute(message, args, cmd, client, Discord) {

            const newEmbed = new Discord.MessageEmbed()
                  .setColor('#00ffff')
                  .setDescription('Yes! 100% SΣ is op')

            message.channel.send(newEmbed);
      }
}
