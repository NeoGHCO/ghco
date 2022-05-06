const { Discord, Client, Intents, Guild, Collection, Message, User } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
// usar el file system para leer el archivo de configuracion
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const prefix = config.prefix;
const ownerid = config.ownerid;

module.exports = {
    name: "test",
    description: "comando de prueba",
    execute(message, args) {

        if (message.author.id == ownerid) {
            
            message.channel.send("prefijo: " + prefix);

        } else {
            
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('No tienes permisos para usar este comando')
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
        }
    }
}