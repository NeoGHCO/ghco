const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "randomhex",
    description: "Genera un color hexadecimal aleatorio",
    execute(message, args) {

        let hex = Math.floor(Math.random() * 16777215).toString(16);

        const embed = new MessageEmbed()
            .setColor(hex)
            .setTitle('')
            .setDescription('')
            .addField('Color', 'El color generado es __**#' + hex + '**__', inline = true)
            .setImage('https://dummyimage.com/600x400/' + hex + '/' + hex + '.png')
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
}