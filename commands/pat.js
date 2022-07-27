module.exports = {
    name: "pat",
    description: "dale una pat a alguien",
    execute(message, args) {

        if (message.mentions.users.size === 0) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes mencionar a alguien para darle una pat')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*3);
            switch(randomNumber){
                case 0: return 'https://tenor.com/bNK5W.gif';
                case 1: return 'https://tenor.com/bmrHq.gif';
                case 2: return 'https://tenor.com/bEmEz.gif';
                case 3: return 'https://tenor.com/byGqv.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} le hizo pat a ${message.mentions.users.first()}`);
        message.channel.send((randomMessage()));
    }
};