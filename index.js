const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION "] });


const fs = require('fs');
const { executes } = require('./commands/ping');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})



client.login("ODMyOTYxMTM3NTk5MTg0OTM3.YHrZgg.AydYohVwWVQC-Z0kz5aIxllEKI4");



