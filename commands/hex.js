const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
//buscar el archivo de configuracion
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const prefix = config.prefix;

module.exports = {
    name: "hex",
    description: "Genera un color hexadecimal mediante los argumentos del comando ejecutado por el usuario",
    execute(message, args) {

        const hex = args.join(' ');

        if (!hex) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes ingresar un argumento valido, ejemplo: `' + prefix + 'hex #FF00FF`')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        //verificar si los argumentos son hexadecimales
        if (!/^#?([0-9A-F]{6}|[0-9A-F]{3})$/i.test(hex)) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Los argumentos deben ser hexadecimales validos')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        //reescribir el color hexadecimal sin usar el # en otra variable llamada hexcode
        const hexcode = hex.replace('#', '');

        const embed = new MessageEmbed()
            .setColor(hexcode)
            .setTitle('')
            .setDescription('')
            .addField('Color', 'El color que solicitaste es __**#' + hexcode + '**__', inline = true)
            .setImage('https://dummyimage.com/600x400/' + hexcode + '/' + hexcode + '.png')
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
}