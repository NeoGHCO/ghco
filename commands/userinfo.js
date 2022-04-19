const { Discord, Client, Intents, Guild, Collection, Message } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "userinfo",
    description: "Muestra informacion de un usuario",
    execute(message, args) {

        //separar variables

        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
        let embed = new MessageEmbed()
            .setTitle(`Informacion de ${user.username}`)
            .setThumbnail(avatar)
            .setColor('#FF37FF')
            .setDescription('Datos generales del usuario')
            .setFields(
                { name: 'ID', value: user.id, inline: true },
                { name: 'Nombre', value: user.username, inline: true },
                { name: 'Cuenta creada', value: user.createdAt.toLocaleDateString(), inline: true },
            )
            .setTimestamp()
            .setFooter('By: GHCO | Pedido por: ' + message.author.username);
        message.channel.send({embeds: [embed]});

    }
}