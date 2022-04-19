const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bored",
    description: "aburrido",
    execute(message, args) {

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*4);
            switch(randomNumber){
                case 0: return 'https://tenor.com/yUml.gif';
                case 1: return 'https://tenor.com/26RV.gif';
                case 2: return 'https://tenor.com/vUTC.gif';
                case 3: return 'https://tenor.com/bkI40.gif';
                case 4: return 'https://tenor.com/0GOT.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} está aburrido`);
        message.channel.send((randomMessage()));
    }
};