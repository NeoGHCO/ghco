const { Discord, Client, Intents, Guild, Collection, Message } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "getinfo",
    description: "Muestra información del servidor",
    execute(message, args) {

        const Usuarios = message.guild.memberCount;

        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle(`${message.guild.name}`)
            .setDescription(`Información del servidor ${message.guild.name}`)
            .addFields(
                { name: 'Nombre del servidor', value: message.guild.name, inline: true },
                { name: '¿Es una comunidad?', value: message.guild.features.length > 0 ? 'Sí' : 'No', inline: true },
                { name: 'Usuarios', value: `${Usuarios}`, inline: true },
                { name: 'Roles', value: `${message.guild.roles.cache.size}`, inline: true },
                { name: 'Creación del servidor', value: `${message.guild.createdAt.toLocaleString()}`, inline: true },
            )
            .addField('Logo del servidor', `[Click aquí](${message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 })})`)
            .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
};