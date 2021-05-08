const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    cooldown: 5,
    description: "`Our bot help centre for all commands`",
    execute(message, args, cmd, client, Discord) {
        if (!args[0]) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#00ffff')
                .setTitle("SKULZ・OFFICIAL bot help menu")
                .addFields({
                    name: "<:SE_mod2:839378969685262357> __**MODERATION**__",
                    value: "`addrole, removerole, slowmode, ban, kick, clear, mute, unmute, lock, unlock`"
                }, {
                    name: "<:SE_utl2:839379099932033025> __**UTILITIES**__",
                    value: "`serverinfo, userinfo, tag1, tag2`"
                }, {
                    name: "<:SE_joy2:839379187932200962> __**FUN**__",
                    value: "`avatar, insta, youtube, say, ping, op, hbd, logo, vanity, meme`"
                }, {
                    name: "<:SE_bot2:839381299469877268> __**BOT**__",
                    value: "`botinfo, ownerinfo, botdevinfo`"
                }, {
                    name: "<:SE_music2:839210696373043220> __**MUSIC**__",
                    value: "`play, stop, skip`"
                }, {
                    name: "😉 __**SUPPORT**__",
                    value: "[Support](https://discord.gg/AxaMqzMw4r)"
                }
                )
                .setFooter(`Requested by ${message.author.tag}`)
                .setTimestamp();

            message.channel.send(newEmbed);
        }
    },
}