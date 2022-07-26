module.exports = {
    name: "kill",
    description: "Mata a alguien",
    execute(message, args) {

        if (message.mentions.users.size === 0) {
            const embed = new MessageEmbed()
                .setColor('#FF37FF')
                .setTitle('Error')
                .setDescription('Debes mencionar a alguien para matarlo')
                .setTimestamp()
                .setFooter('By: GHCO');
            message.channel.send({embeds: [embed]});
            return;
        }

        //evitar que el usuario se mate a si mismo
        if (message.author.id === message.mentions.users.first().id) {
            message.channel.send('No lo hagas D:, porfavor alguien detengalo');
            return;
        }

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*4);
            switch(randomNumber){
                case 0: return 'https://tenor.com/bMunp.gif';
                case 1: return 'https://tenor.com/bG2Op.gif';
                case 2: return 'https://tenor.com/baaE8.gif';
                case 3: return 'https://tenor.com/brfOQ.gif';
                case 4: return 'https://tenor.com/bmG91.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} mato a ${message.mentions.users.first()}`);
        message.channel.send((randomMessage()));
    }
};