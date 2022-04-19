const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
//usar el file system para leer el archivo de configuracion
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const prefix = config.prefix;

module.exports = {
    name: "say",
    description: "Haz que el bot diga lo que le digas",
    execute(message, args) {
        
        let sayMessage = args.join(' ');

        if (!sayMessage) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes ingresar un argumento valido, ejemplo: `' + prefix + 'say Hola!`')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('')
            .setDescription(sayMessage)
        message.channel.send({embeds: [embed]});

        try {
            message.delete();
        } catch (error) {
            console.log(error);
        }
    }
}