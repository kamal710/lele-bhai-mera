module.exports = (Discord, client) =>{
    console.log('Bot Online');

    const activities = [
        `${client.guilds.cache.size} servers`,
        `${client.channels.cache.size} channels`,
        `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}users`,
        `Get Well Soon King Bhai`
    ];

    let i = 0;
    setInterval(() => client.user.setActivity(`sehelp | ${activities[i++ % activities.length]}`, { type: 'WATCHING' }), 5000);
    //// client.user.setPresence({ activity: { name: "sehelp | get well soon king bhai", type: "WATCHING" }, status: "dnd"})
}