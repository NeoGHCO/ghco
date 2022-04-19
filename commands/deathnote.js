const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "deathnote",
    description: "anota a alguien en la deathnote",
    execute(message, args) {

        //borra el mensaje del comando
        message.delete();
            
        if (message.mentions.users.size === 0) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes mencionar a alguien para anotarlo')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        //evitar que se anote a si mismo
        if (message.mentions.users.first().id === message.author.id) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('No puedes anotarte a ti mismo')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        let user = message.author;

        message.channel.send(`${user} esta escribiendo algo`);
        message.channel.send('https://tenor.com/KHyo.gif');
        setTimeout(() => {
            message.channel.send(`${message.mentions.users.first()} ha muerto`);
            message.channel.send('https://tenor.com/bBjFu.gif');
            message.channel.send('```Comando secreto```');
        }, 15000);
    }
};