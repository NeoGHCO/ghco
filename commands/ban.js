const { Discord, Client, Intents, Guild, Collection, Message } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { Permissions } = require('discord.js');

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
        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('Baneado')
            .setDescription(`Un usuario ha sido baneado por ${message.author.tag}`)
            .addFields(
                { name: 'Usuario baneado', value: member.user.tag, inline: true },
                { name: 'Razón', value: reason, inline: true },
                { name: 'Fecha', value: message.createdAt.toLocaleString(), inline: true },
            )
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
};