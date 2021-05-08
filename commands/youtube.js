module.exports = {
  name: 'youtube',
  aliases: ['yt'],
  cooldown: 5,
  description: "`Sends Our owner's(SΣ・KinG🔥🇮🇳's) and our noob Admin's(S Σ・DeviL's) youtube link`",
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor('#00ffff')
      .addFields(
        {
          name: "<:SE_youtube:837304384147685428> OWNER'S YOUTUBE CHANNEL <:SE_youtube:837304384147685428>",
          value: '[Youtube](https://www.youtube.com/channel/UCT8PHkp1rvs6vHKaTQpenMw)'
        }
      )

    message.channel.send(newEmbed);
  }
}