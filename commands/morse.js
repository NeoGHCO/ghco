const { Discord, Client, Intents, Guild, Collection, Message } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "morse",
    description: "Convierte un mensaje a morse",
    execute(message, args) {
        
        const texto = args.join(" ");
        var morse = require('morse');

        if (!texto) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes escribir un mensaje para convertirlo a morse')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        var encoded = morse.encode(texto);
        var decoded = morse.decode(encoded);

        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('Morse')
            .setDescription('Aquí tienes tu texto traducido')
            .addFields(
                { name: 'Codificado', value: encoded, inline: true },
                { name: 'Decodificado', value: decoded, inline: true }
            )
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
};