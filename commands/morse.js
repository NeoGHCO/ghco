const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "morse",
    description: "Convierte un mensaje a morse",
    execute(message, args) {
        
        const texto = args.join(" ");
        var morse = require('morse');

        if (!texto) {
            const embed = new EmbedBuilder()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes escribir un mensaje para convertirlo a morse')
                .setTimestamp()
                .setFooter({ name: 'By GHCO | Pedido por: ' + message.author.username, icon_url: message.author.avatarURL() });
            message.channel.send({embeds: [embed]});
            return;
        }

        var encoded = morse.encode(texto);
        var decoded = morse.decode(encoded);

        const embed = new EmbedBuilder()
            .setColor('#FF37FF')
            .setTitle('Morse')
            .setDescription('Aquí tienes tu texto traducido')
            .addFields(
                { name: 'Codificado', value: encoded, inline: true },
                { name: 'Decodificado', value: decoded, inline: true }
            )
            .setTimestamp()
            .setFooter({ name: 'By GHCO | Pedido por: ' + message.author.username, icon_url: message.author.avatarURL() });
        message.channel.send({embeds: [embed]});
    }
};