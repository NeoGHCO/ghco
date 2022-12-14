const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Muestra tu avatar o el de un usuario",
    execute(message, args) {
        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
        if (!args[0]){
            const embed = new EmbedBuilder()
                .setColor('#FF37FF')
                .setTitle('Avatar')
                .setDescription(`El avatar de ${message.author.username} es:`)
                .setImage(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .setTimestamp()
                .setFooter({ text: 'By GHCO | Pedido por ' + message.author.tag, icon_url: message.author.avatarURL() });
            message.channel.send({embeds: [embed]});
        } else {
            const embed = new EmbedBuilder()
                .setColor('#FF37FF')
                .setTitle('Avatar')
                .setDescription(`El avatar de ${message.mentions.users.first().username} es:`)
                .setImage(message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .setTimestamp()
                .setFooter({ text: 'By GHCO | Pedido por ' + message.author.tag, icon_url: message.author.avatarURL() });
            message.channel.send({embeds: [embed]});
        }
    }
};