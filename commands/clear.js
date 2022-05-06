const { Discord, Client, Intents, Guild, Collection, Message, User } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
// usar el file system para leer el archivo de configuracion
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const prefix = config.prefix;
const ownerid = config.ownerid;

module.exports = {
    name: "clear",
    description: "comando para borrar mensajes",
    execute(message, args) {

        if (message.author.id == ownerid) {
            
            if (!args[0]) {
                
                message.channel.send("Debes especificar un numero de mensajes a borrar");
                return;
                
            }

            if (args[0] > 100) {
                
                message.channel.send("No puedes borrar mas de 100 mensajes");
                return;

            }

            if (args[0] < 1) {
                
                message.channel.send("No puedes borrar menos de 1 mensaje");
                return;

            }

            if (isNaN(args[0])) {

                message.channel.send("Debes especificar un numero");
                return;

            }

            message.channel.bulkDelete(args[0]);
            
        } else {
                
            return;

        }
    }
}