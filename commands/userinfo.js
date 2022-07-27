const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "userinfo",
    description: "Muestra informacion de un usuario",
    execute(message, args) {

        //separar variables

        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
        let embed = new EmbedBuilder()
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
            .setFooter({ text: 'By: GHCO | Pedido por: ' + message.author.username, iconURL: message.author.displayAvatarURL() });
        message.channel.send({embeds: [embed]});

    }
}