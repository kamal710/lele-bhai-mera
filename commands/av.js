module.exports = {
  name: 'av',
  aliases: ['avatar'],
  cooldown: 5,
  description: "`Sends the users avatar`",
  execute(message, args, cmd, client, Discord) {


    if (message.mentions.users.first()) {
      target = message.mentions.users.first();
    } else if (args[0]) {
      target = message.guild.members.cache.get(args[0]).user;
    } else {
      target = message.author;
    }

    const avatar = target.displayAvatarURL({ size: 2048 });

    const newEmbed = new Discord.MessageEmbed()

      .setTitle(`Avatar of ${target.username}`)
      .setDescription(`[Download](${avatar})`)
      .setImage(avatar)
      .setColor("#277ECD")
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
    message.channel.send(newEmbed)
  }
};


