const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "ban",
    description: "Banea a un usuario del servidor",
    execute(message, args) {
        if (!message.member.permissions.has("BAN_MEMBERS")) {
            message.channel.send("No tienes permisos para hacer eso, te falta el permiso `Banear miembros`");
            return;
        }

        const member = message.mentions.members.first();
        if (!member) {
            message.channel.send("Debes mencionar a un usuario");
            return;
        }

        //verificar si el usuario es el autor del mensaje
        if (member.id === message.author.id) {
            message.channel.send("No puedes banearte a ti mismo");
            return;
        }

        if (!member.bannable) {
            message.channel.send("No puedo banear a este usuario");
            return;
        }

        const reason = args.slice(1).join(' ');
        if (!reason) {
            message.channel.send("Debes escribir una razón");
            return;
        }

        member.ban(reason)
            .catch(error => message.channel.send(`No puedo banear a '${member.user.tag}' por: ${error}`));
        const embed = new EmbedBuilder()
            .setColor('#FF37FF')
            .setTitle('Baneado')
            .setDescription(`Un usuario ha sido baneado por ${message.author.tag}`)
            .addFields(
                { name: 'Usuario baneado', value: member.user.tag, inline: true },
                { name: 'Razón', value: reason, inline: true },
                { name: 'Fecha', value: message.createdAt.toLocaleString(), inline: true },
            )
            .setTimestamp()
            .setFooter({ text: 'By GHCO | Pedido por ' + message.author.tag, icon_url: message.author.avatarURL() });
        message.channel.send({embeds: [embed]});
    }
};