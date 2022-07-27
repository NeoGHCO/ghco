const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "invite",
    description: "Invita al bot a tu servidor",
    execute(message, args) {
        
        const embed = new EmbedBuilder()
            .setColor('#FF37FF')
            .setTitle(`Invita al bot a tu servidor`)
            .setDescription(`Para invitar al bot a tu servidor, haz click en el siguiente enlace:`)
            .addField('Enlace de invitación', `[Click aquí](https://discord.com/api/oauth2/authorize?client_id=928885512729657365&permissions=8&scope=bot)`)
            .setTimestamp()
            .setFooter({ name: 'By GHCO | Pedido por: ' + message.author.username, icon_url: message.author.avatarURL() });
        message.channel.send({embeds: [embed]});
    }
};