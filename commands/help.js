const { MessageEmbed } = require('discord.js');
const prefix = require('../config.json').prefix;

module.exports = {
    name: "help",
    description: "Lista de comandos",
    execute(message, args) {

        if (message.author.bot) return;

        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setAuthor('Prefijo: ' + prefix)
            .setTitle('Comandos')
            .setDescription('Lista de comandos disponibles')
            .addField('Utilidad', 'help' + '\n' + 'info' + '\n' + 'userinfo' + '\n' + 'ping' + '\n' + 'avatar' + '\n' + 'getinfo' + '\n' + 'morse' + '\n' + 'team' + '\n' + 'randomhex' + '\n' + 'hex', inline = true)
            .addField('Entretenimiento', 'say' + '\n' + 'num' + '\n' + 'coin' + '\n' + 'love' + '\n' + 'luck' + '\n' + '8ball', inline = true)
            .addField('Reaccion', 'hi' + '\n' + 'smile' + '\n' + 'laugh' + '\n' + 'run' + '\n' + 'dance' + '\n' + 'bored' + '\n' + 'angry' + '\n' + 'cry', inline = true)
            .addField('Interaccion', 'hug' + '\n' + 'kiss' + '\n' + 'punch' + '\n' + 'slap' + '\n' + 'stare' + '\n' + 'tickle' + '\n' + 'buttslap' + '\n' + 'cuddle' + '\n' + 'kill' + '\n' + 'revive' + '\n' + 'pat', inline = true)
            .addField('Matematicas', 'suma' + '\n' + 'resta' + '\n' + 'multiplica' + '\n' + 'divide' + '\n' + 'raiz', inline = true)
            .addField('Moderacion', 'kick' + '\n' + 'announce [#canal] <mensaje>' + '\n' + 'ban', inline = true)
            .addFields(
                { name: 'Servidor de soporte', value: `[Click para unirse](https://discord.gg/EA6EQrkseR)`, inline: true },
                { name: 'Sitio web', value: `[Click para visitarlo](https://ghco.weebly.com/)`, inline: true }
            )
            .setImage('https://i.imgur.com/xCw5TSm.png')
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
}