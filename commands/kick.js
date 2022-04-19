const { Discord, Client, Intents, Guild, Collection, Message } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { Permissions } = require('discord.js');

module.exports = {
    name: "kick",
    description: "Expulsa a un usuario del servidor",
    execute(message, args) {
        if (!message.member.permissions.has("KICK_MEMBERS")) {
            message.channel.send("No tienes permisos para hacer eso, te falta el permiso `Expulsar miembros`");
            return;
        }
        const member = message.mentions.members.first();
        if (!member) {
            message.channel.send("Debes mencionar a un usuario");
            return;
        }
        if (!member.kickable) {
            message.channel.send("No puedo expulsar a este usuario");
            return;
        }
        const reason = args.slice(1).join(' ');
        if (!reason) {
            message.channel.send("Debes escribir una razón");
            return;
        }
        member.kick(reason)
            .catch(error => message.channel.send(`No puedo expulsar a el usuario '${member.user.tag}' porque: ${error}`));
        const embed = new Discord.MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('Expulsado')
            .setDescription(`Un usuario ha sido expulsado por ${message.author.tag}`)
            .addFields(
                { name: 'Usuario expulsado', value: member.user.tag, inline: true },
                { name: 'Razón', value: reason, inline: true },
                { name: 'Fecha', value: message.createdAt.toLocaleString(), inline: true },
            )
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
};