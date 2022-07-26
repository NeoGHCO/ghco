module.exports = {
    name: "kiss",
    description: "beso",
    execute(message, args) {

        const player = message.mentions.users.first();

        //si no hay nadie mencionado
        if (!player) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes mencionar a alguien para besarlo')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        //si el usuario mencionado es el mismo que el que lo menciono
        if (player.id === message.author.id) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Te besarias a ti mismo?')
                .setDescription('o.O')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*4);
            switch(randomNumber){
                case 0: return 'https://tenor.com/vxPx.gif';
                case 1: return 'https://tenor.com/bgQ8r.gif';
                case 2: return 'https://tenor.com/bipoe.gif';
                case 3: return 'https://tenor.com/OJXy.gif';
                case 4: return 'https://tenor.com/bmsSb.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} beso a ${message.mentions.users.first()}`);
        message.channel.send((randomMessage()));
    }
};