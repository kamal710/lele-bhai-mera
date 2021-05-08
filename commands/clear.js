module.exports = {
  name: 'clear',
  cooldown: 5,
  description: "`This command Clear Messages`",
  async execute(message, args, cmd, client, Discord) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to access this command")
    if (!args[0]) return message.reply("No amount of messages to be deleted entered ```b!clear(amount of message to be deleted)```");
    if (isNaN(args[0])) return message.reply("Invalid numbers!");

    if (args[0] > 100) return message.reply("You cant delete more than a 100 messages");
    if (args[0] < 1) return message.reply("You must atleast delete one message");

    await message.channel.messages.fetch({ Limit: args[0] }).then(messages => {
      message.channel.bulkDelete(messages);
    });
  }
}

