module.exports = {
    name: "cuddle",
    description: "acurrucate con alguien",
    execute(message, args) {

        if (message.mentions.users.size === 0) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes mencionar a alguien para acurrucate')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*4);
            switch(randomNumber){
                case 0: return 'https://tenor.com/bEyEj.gif';
                case 1: return 'https://tenor.com/bnvmy.gif';
                case 2: return 'https://tenor.com/bKneE.gif';
                case 3: return 'https://tenor.com/5eCQ.gif';
                case 4: return 'https://tenor.com/bhn5f.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} se acurruco con ${message.mentions.users.first()}`);
        message.channel.send((randomMessage()));
    }
};