module.exports = {
    name: "buttslap",
    description: "dale una nalgada a alguien",
    execute(message, args) {

        if (message.mentions.users.size === 0) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes mencionar a alguien para darle una nalgada')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*3);
            switch(randomNumber){
                case 0: return 'https://tenor.com/7EU6.gif';
                case 1: return 'https://tenor.com/bmMOI.gif';
                case 2: return 'https://tenor.com/bfYjB.gif';
                case 3: return 'https://tenor.com/7EVd.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} le dio una nalgada a ${message.mentions.users.first()}`);
        message.channel.send((randomMessage()));
    }
};