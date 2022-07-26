module.exports = {
    name: "revive",
    description: "Revives a un usuario",
    execute(message, args) {

        if (message.mentions.users.size === 0) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes mencionar a alguien para revive')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*2);
            switch(randomNumber){
                case 0: return 'https://tenor.com/bA9cD.gif';
                case 1: return 'https://tenor.com/bmIT3.gif';
                case 2: return 'https://tenor.com/bkKwF.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} revivio a ${message.mentions.users.first()}`);
        message.channel.send((randomMessage()));
    }
};