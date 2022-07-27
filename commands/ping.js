module.exports = {
	name: "ping",
	description: "Latencia del bot",
	execute(message, args) {
		message.channel.send('Loading data').then (async (msg) =>{
			msg.delete()
			message.reply(`🏓Pong!🏓` + '\n' + `Latencia: ${msg.createdTimestamp - message.createdTimestamp}ms`);
		});
	}
};