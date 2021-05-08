module.exports = {
    name: 'say',
    cooldown: 5,
    description: "`Dont try this`",
    execute(message, args, cmd, client, Discord) {
        const say = args.join(" ")
        message.delete().catch(err => console.log(err))
        message.channel.send(say)
    }

}