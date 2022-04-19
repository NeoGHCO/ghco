const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "coin",
    description: "Tira una moneda",
    execute(message, args) {

        //genera un valor aleatorio entre 0 y 1
        let number = Math.floor(Math.random() * 2);

        //muestra el resultado
        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('Moneda')
            .setDescription(number == 0 ? 'Cara' : 'Cruz')
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
}