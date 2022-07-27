const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "team",
    description: "Informacion sobre GHCO Team",
    execute(message, args) {

        const embed = new EmbedBuilder()
            .setColor('#FF37FF')
            .setTitle('GHCO Team')
            .setDescription('')
            .addFields(
                { name: 'Estado de solicitudes', value: 'Solicitudes abiertas en el servidor de discord de GHCO Team', inline: true },
                { name: 'Objetivo', value: 'Formar un grupo de desarrollo para crear distintas aplicaciones que sean utiles a los usuarios en general', inline: true },
                { name: 'Fundador', value: 'Sir_Million'},
                { name: 'Actual lider', value: 'Sir_Million', inline: true },
                { name: 'Sitio Web de GHCO Team', value: '[GHCO Team Website](https://ghco.glitch.me/)', inline: true },
                { name: 'Miembros', value: 'Sir_Million' + '\n' + 'Sky'},
            )
            .setImage('https://i.imgur.com/TEZZFGj.png')
            .setTimestamp()
            .setFooter({ text: 'GHCO Team' });
        message.channel.send({embeds: [embed]});
    }
}