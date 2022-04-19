const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "team",
    description: "Informacion sobre GHCO Team",
    execute(message, args) {

        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('GHCO Team')
            .setDescription('')
            .addFields(
                { name: 'Estado de solicitudes', value: 'solicitudes cerradas', inline: true },
                { name: 'Fundador', value: 'Sir. Million', inline: true },
                { name: 'Objetivo', value: 'Formar un grupo de desarrollo para crear distintas aplicaciones que sean utiles a los usuarios en general', inline: true },
                { name: 'Actual lider', value: 'Sir. Million', inline: true },
                { name: 'Miembros', value: 'Sir. Million' + '\n' + 'Sky', inline: true },
            )
            .setImage('https://i.imgur.com/TEZZFGj.png')
            .setTimestamp()
            .setFooter('GHCO Team');
        message.channel.send({embeds: [embed]});
    }
}