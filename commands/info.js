const { channelMention } = require('@discordjs/builders');
const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "info",
    description: "Informacion sobre el bot",
    execute(message, args) {

        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('Informacion')
            .setDescription('')
            .addFields(
                { name: 'Nombre', value: 'GHCO', inline: true },
                { name: 'Estado', value: 'En desarrollo', inline: true },
                { name: 'Creado por', value: 'Sir. Million', inline: true },
                { name: 'Desarrollado por', value: 'GHCO Team', inline: true },
                { name: 'Prefijo', value: '=', inline: true },
                { name: 'Version', value: '1.0.0', inline: true },
            )
            .addField('Pagina Web', 'Para visitar la pagina web de GHCO, haz click [aqui](https://ghco.weebly.com/)')
            .setImage('https://i.imgur.com/xCw5TSm.png')
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
}