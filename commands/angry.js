const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "angry",
    description: "enojado",
    execute(message, args) {

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*3);
            switch(randomNumber){
                case 0: return 'https://tenor.com/bjqZy.gif';
                case 1: return 'https://tenor.com/bcU9P.gif';
                case 2: return 'https://tenor.com/bMsuB.gif';
                case 3: return 'https://tenor.com/bGkl2.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} está enojado`);
        message.channel.send((randomMessage()));
    }
};