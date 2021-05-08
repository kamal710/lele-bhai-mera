module.exports = {
    name: 'command',
    aliases: ['cmd'],
    cooldown: 5,
    description: "`This is the chat rules embed message`",
    execute(message, args, cmd, client, Discord) {
        if (!message.member.roles.cache.has('832132492353208382')) {
            return message.channel.send("You dont have permission to access this command");
        }
        const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('RULES AND REGULATIONS')
            .setURL('https://discord.gg/AxaMqzMw4r')
            .setDescription('Don’t be abusive. \n Follow the Discord Terms of Service. \n \n No discrimination, hate speech or arguing (over stupid stuff; Take that to DMs). \n \n Speak hindi, this way everyone can understand you. It is our lingua franca after all. \n \n Important for people who troll others: \n A. Don’t spoon-feed or attack beginners.Everyone starts somewhere and asking questions is smart. Do not attack people for not knowing how to use discord. Point them to great learning sources and help them with problems. \n \n B. If you are a beginner, have a will to learn and do not expect to be spoon-fed. \n \n \n Be friendly to other users. \n \n Share media in <#831942269477191731> \n \n Keep <#831942268519710730> to friendly / neutral intellectual conversations. \n \n Do not try to evade punishments. \n \n Self bot is strictly prohibited, if found you will be banned and reported for violating Discord. \n \n No vulgar or bad nicknames. \n \n Not copying any identity of any members for fun or making alt accounts for inappropriate use may lead to severe punishments. \n \n No mic spamming. \n \n You do not like the topic of conversation, move to another voice-chat. \n \n No switching voice-chats repeatedly. \n \n Reduce background noise. If unable to, it is requested for you to go onto Push to Talk. \n \n Do not use music bots or play music in public chat.')
            .setImage('https://media.discordapp.net/attachments/821258537924821002/821287283114246154/ezgif.com-gif-maker_2.gif')
            .setFooter('MAKE SURE TO FOLLOW ALL RULES');

        message.channel.send(newEmbed);
    }


}