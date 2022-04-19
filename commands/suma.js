const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "suma",
    description: "Suma dos numeros",
    execute(message, args) {

        let arg1 = args[0];
        let arg2 = args[1];

        //verificar si los argumentos son numeros
        if (isNaN(arg1) || isNaN(arg2)) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Los argumentos deben ser numeros validos')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        let suma = parseInt(arg1) + parseInt(arg2);

        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('')
            .setDescription('')
            .addField('Resultado', 'La suma de ' + arg1 + ' y ' + arg2 + ' es __**' + suma + '**__', inline = true)
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
}