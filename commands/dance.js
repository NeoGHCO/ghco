const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "dance",
    description: "baila",
    execute(message, args) {

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*4);
            switch(randomNumber){
                case 0: return 'https://tenor.com/Yxob.gif';
                case 1: return 'https://tenor.com/bLwer.gif';
                case 2: return 'https://tenor.com/bGN9O.gif';
                case 3: return 'https://tenor.com/bBUKt.gif';
                case 4: return 'https://tenor.com/bMlmG.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} está bailando`);
        message.channel.send((randomMessage()));
    }
};