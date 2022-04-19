const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "laugh",
    description: "Muestra una risa",
    execute(message, args) {

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*4);
            switch(randomNumber){
                case 0: return 'https://tenor.com/bB6sJ.gif';
                case 1: return 'https://tenor.com/bGvUM.gif';
                case 2: return 'https://tenor.com/7a4H.gif';
                case 3: return 'https://tenor.com/bhU6H.gif';
                case 4: return 'https://tenor.com/bDw7t.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} está riendo`);
        message.channel.send((randomMessage()));
    }
};