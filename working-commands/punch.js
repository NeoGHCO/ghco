module.exports = {
    name: "punch",
    description: "golpea a alguien",
    execute(message, args) {

        if (message.mentions.users.size === 0) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes mencionar a alguien para golpearlo')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*4);
            switch(randomNumber){
                case 0: return 'https://tenor.com/bFk9M.gif';
                case 1: return 'https://tenor.com/ugnq.gif';
                case 2: return 'https://tenor.com/bOeuo.gif';
                case 3: return 'https://tenor.com/TlOr.gif';
                case 4: return 'https://tenor.com/bAbdW.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} golpeo a ${message.mentions.users.first()}`);
        message.channel.send((randomMessage()));
    }
};