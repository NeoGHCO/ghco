const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });

module.exports = {
	name: "ping",
	description: "Latencia del bot",
	execute(message, args) {
		message.channel.send('Loading data').then (async (msg) =>{
			msg.delete()
			message.channel.send(`🏓Pong!🏓`);
			message.channel.send(`La latencia es de ${msg.createdTimestamp - message.createdTimestamp}ms`);
		}
		)
	}
};