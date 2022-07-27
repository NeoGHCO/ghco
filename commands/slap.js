module.exports = {
    name: "slap",
    description: "abofetea a alguien",
    execute(message, args) {

        if (message.mentions.users.size === 0) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes mencionar a alguien para abofetearlo')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*4);
            switch(randomNumber){
                case 0: return 'https://tenor.com/blgKM.gif';
                case 1: return 'https://tenor.com/bFO5L.gif';
                case 2: return 'https://tenor.com/E1MC.gif';
                case 3: return 'https://tenor.com/bbHX6.gif';
                case 4: return 'https://tenor.com/bkqMk.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} abofeteo a ${message.mentions.users.first()}`);
        message.channel.send((randomMessage()));
    }
};