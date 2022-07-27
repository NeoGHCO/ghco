const { EmbedBuilder } = require('discord.js');
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans,GatewayIntentBits.GuildEmojisAndStickers , GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent], partials: [Partials.Channel, Partials.User, Partials.GuildMember, Partials.Message, Partials.Reaction] });


module.exports = {
    name: "help",
    description: "Lista de comandos",
    execute(message) {

        if (message.author.bot) return;

        const Embed = new EmbedBuilder()
        .setColor('#FF37FF')
        .setAuthor({ name: 'GHCO', iconURL: 'https://i.imgur.com/pIPAoQz.png' })
        .setDescription('Lista de comandos')
        .setThumbnail('https://i.imgur.com/QQZRQQZ.png')
        .addFields(
            { name: 'Utilidad', value: 'help' + '\n' + 'userinfo' + '\n' + 'ping' + '\n' + 'avatar' + '\n' + 'getinfo' + '\n' + 'morse' + '\n' + 'team', inline: true },
            { name: 'Entretenimiento', value: 'say' + '\n' + 'num' + '\n' + '8ball', inline: true },
            { name: 'Reaccion', value: 'hi' + '\n' + 'smile' + '\n' + 'laugh' + '\n' + 'run' + '\n' + 'dance' + '\n' + 'bored' + '\n' + 'angry' + '\n' + 'cry', inline: true },
            { name: 'Interaccion', value: 'hug' + '\n' + 'kiss' + '\n' + 'punch' + '\n' + 'slap' + '\n' + 'stare' + '\n' + 'tickle' + '\n' + 'buttslap' + '\n' + 'cuddle' + '\n' + 'kill' + '\n' + 'revive' + '\n' + 'pat', inline: true },
            { name: 'Moderacion', value: 'kick' + '\n' + 'announce [#canal] <mensaje>' + '\n' + 'ban', inline: true}
        )
        .addFields(
            { name: '_ _', value: '_ _', inline: false }
        )
        .addFields(
            { name: 'Servidor de soporte', value: `[Click para unirse](https://discord.gg/EA6EQrkseR)`, inline: true },
            { name: 'Sitio web', value: `[Click para visitarlo](https://ghco.weebly.com/)`, inline: true }
        )
        .addFields(
            { name: '_ _', value: '_ _', inline: false }
        )
        .setTimestamp()
        .setFooter({ text: 'By: GHCO', iconURL: 'https://i.imgur.com/pIPAoQz.png' });
    
        message.channel.send({ embeds: [Embed] });
    }
}