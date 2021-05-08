module.exports = {
      name: 'ping',
      cooldown: 5,
      description: "`Dont try this`",
      execute(message, args, cmd, client, Discord) {
            message.channel.send('ping pong, ping pong i am a big don');
      }

}