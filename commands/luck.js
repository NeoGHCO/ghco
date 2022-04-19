const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "luck",
    description: "muestra tu suerte este dia en un porcentaje de 0 a 100",
    execute(message, args) {

        let luck = Math.floor(Math.random() * 100);
        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('Tu suerte este dia')
            .setDescription(`${luck}%`)
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
}