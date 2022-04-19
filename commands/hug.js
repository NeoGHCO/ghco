const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "hug",
    description: "abrazo",
    execute(message, args) {

        if (message.mentions.users.size === 0) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes mencionar a alguien para abrazarlo')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*4);
            switch(randomNumber){
                case 0: return 'https://tenor.com/1jRJ.gif';
                case 1: return 'https://tenor.com/beqF0.gif';
                case 2: return 'https://tenor.com/baHmu.gif';
                case 3: return 'https://tenor.com/bHGG1.gif';
                case 4: return 'https://tenor.com/bAPlE.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} abraza a ${message.mentions.users.first()}`);
        message.channel.send((randomMessage()));
    }
};