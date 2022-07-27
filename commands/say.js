const { EmbedBuilder } = require('discord.js');
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
            const embed = new EmbedBuilder()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes ingresar un argumento valido, ejemplo: `' + prefix + 'say Hola!`')
                .setTimestamp()
                .setFooter({ text: 'By: GHCO | Pedido por: ' + message.author.username, iconURL: message.author.displayAvatarURL() });
            message.channel.send({embeds: [embed]});
            return;
        }

        const embed = new EmbedBuilder()
            .setColor('#FF37FF')
            .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() })
            .setDescription(sayMessage)
            .setTimestamp()
            .setFooter({ text: 'By: GHCO' });
        message.channel.send({embeds: [embed]});

        try {
            message.delete();
        } catch (error) {
            console.log(error);
        }
    }
}