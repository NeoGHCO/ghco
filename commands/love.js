const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "love",
    description: "muestra tu amistad con un usuario en un porcentaje de 0 a 100",
    execute(message, args) {
            
        let love = Math.floor(Math.random() * 100);
        let user = message.mentions.users.first();

        if (!user) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes mencionar a un usuario')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }


        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle(`Amistad de ${message.author.username} con ${user.username}`)
            .setDescription(`${love}%`)
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
}