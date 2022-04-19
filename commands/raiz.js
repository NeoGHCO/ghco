const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "raiz",
    description: "Calcula la raiz cuadrada de un numero",
    execute(message, args) {

        let arg1 = args[0];

        //verificar si los argumentos son numeros
        if (isNaN(arg1)) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('El argumento debe ser un numero valido')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        let raiz = Math.sqrt(parseInt(arg1));

        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('')
            .setDescription('')
            .addField('Resultado', 'La raiz cuadrada de ' + arg1 + ' es __**' + raiz + '**__', inline = true)
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
}