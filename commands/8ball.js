const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "8ball",
    description: "pregunta a la bola de 8",
    execute(message, args) {

        if (!args[0]) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes preguntarme algo')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*9);
            switch(randomNumber){
                case 0: return 'Sí';
                case 1: return 'No';
                case 2: return 'Tal vez';
                case 3: return 'No lo se';
                case 4: return 'Es posible';
                case 5: return 'No es probable';
                case 6: return 'Definitivamente';
                case 7: return 'No estes tan seguro de eso';
                case 8: return 'No puedo predecir eso';
                case 9: return 'Si te lo digo no sera asi';
            }
        }

        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('8Ball')
            .setDescription(randomMessage())
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
}