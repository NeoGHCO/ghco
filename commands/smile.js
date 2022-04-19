const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "smile",
    description: "sonríe",
    execute(message, args) {
        
        function randomMessage(){
            var randomNumber = Math.round(Math.random()*9);
            switch(randomNumber){
                case 0: return 'https://tenor.com/bPosk.gif';
                case 1: return 'https://tenor.com/bPpsn.gif';
                case 2: return 'https://tenor.com/bicef.gif';
                case 3: return 'https://tenor.com/bPOFL.gif';
                case 4: return 'https://tenor.com/bOlRZ.gif';
                case 5: return 'https://tenor.com/2aaI.gif';
                case 6: return 'https://tenor.com/beqAZ.gif';
                case 7: return 'https://tenor.com/ya9o.gif';
                case 8: return 'https://tenor.com/YxRU.gif';
                case 9: return 'https://tenor.com/beQ2r.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} está sonriendo`);
        message.channel.send((randomMessage()));
    }
};