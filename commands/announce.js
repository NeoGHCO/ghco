const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: "announce",
    description: "Haz un anuncio en el canal de texto mencionado",
    execute(message, args) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            message.channel.send("No tienes permisos para hacer eso");
            return;
        }
        if (args.slice(0).length < 1) {
            message.channel.send("Debes mencionar un canal de texto para hacer el anuncio");
            return;
        }
        if (args.slice(0).length < 2) {
            message.channel.send("Debes mencionar una frase para hacer el anuncio");
            return;
        }
        const channel = message.mentions.channels.first();
        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('Anuncio')
            .setDescription(args.slice(1).join(' '))
            .setTimestamp()
            .setFooter('Anuncio enviado por ' + message.author.username, message.author.avatarURL());
        channel.send({embeds: [embed]});
        message.delete();
        message.channel.send("Anuncio enviado");
    }
};