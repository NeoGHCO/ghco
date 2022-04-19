const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "stare",
    description: "mira fijamente a alguien",
    execute(message, args) {

        if (message.mentions.users.size === 0) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes mencionar a alguien para mirarle fijamente')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*4);
            switch(randomNumber){
                case 0: return 'https://tenor.com/77Mp.gif';
                case 1: return 'https://tenor.com/Z9ux.gif';
                case 2: return 'https://tenor.com/bzUlR.gif';
                case 3: return 'https://tenor.com/bnkm8.gif';
                case 4: return 'https://tenor.com/bEhMw.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} mira fijamente a ${message.mentions.users.first()}`);
        message.channel.send((randomMessage()));
    }
};