const fs = require('fs');
const { Discord, MessageEmbed, Collection } = require('discord.js');
const { token, prefix, owner } = require('./config.json');
const path = require('path');
const { ready } = require('libsodium-wrappers');

const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans,GatewayIntentBits.GuildEmojisAndStickers , GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent], partials: [Partials.Channel, Partials.User, Partials.GuildMember, Partials.Message, Partials.Reaction] });

client.commands = new Collection();
client.events = new Collection();

// load bot activity and console log

client.once('ready', () => {
	console.log('He iniciado sesion como: ' + client.user.tag);
});

const activities = [
    `Que puedo hacer por ti?`,
    `${prefix}help | A su servicio`,
    `${prefix}help | By GHCO Team`,
    `Discord: https://discord.gg/EA6EQrkseR`,
    `Web: https://ghco.weebly.com/`
];

client.on('ready', () => {
    //cambia cada 15 segundos el estado del bot
    setInterval(() => {
        //genera un numero aleatorio entre 0 y el tamaño del array
        const randomIndex = Math.floor(Math.random() * activities.length - 1) + 1;
        const NewActivity = activities[randomIndex];

        client.user.setActivity(NewActivity, { type: 'WATCHING' });
    }, 5000);
});

//cuando menciones al bot se te dara una respuesta

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.mentions.has("everyone")) return;
    if (message.mentions.has(client.user, { ignoreRoles: true })) {
        /* const embed = new MessageEmbed()
            .setColor('#ff37ff')
            .setThumbnail(client.user.avatarURL())
            .setTitle('GHCO')
            .setDescription('Informacion sobre el bot')
            .addFields(
                { name: 'Nombre', value: 'GHCO', inline: true },
                { name: 'Help', value: `${prefix}help`, inline: true },
                { name: 'Servidor de soporte', value: 'https://discord.gg/EA6EQrkseR', inline: true },
                { name: 'Sitio web', value: 'https://ghco.weebly.com/', inline: true }
            )
            .setTimestamp()
            .setFooter('By: GHCO Team');
        message.channel.send({embeds: [embed]}); */
        message.reply('Bot temporalmente fuera de servicio, disculpe las molestias y gracias por su compresion.');
    }
});

//Cargar commands y ignorar los que no existan (By SirDevi)

client.on('messageCreate', message => {

    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {

        const args = message.content.slice(prefix.length).split(/ +/);

        const commandName = args.shift().toLowerCase();

        const command = fs.readdirSync('./working-commands').filter(file => file.endsWith('.js'));

        try {

            if (!command) return;

            const commandFile = require(`./working-commands/${commandName}.js`);

            commandFile.execute(message, args);

        } catch (err) {

            if (err.message.includes('Cannot find module')) {

                message.reply('El comando no existe');
                message.channel.send('Error:' + err);

                console.log(`${message.author.tag} ha intentado ejecutar el comando ${commandName} pero no existe`);

                return;
            
            } else {

                console.log(err);

                message.reply('Ha ocurrido un error al ejecutar el comando');
                message.channel.send('Error:' + err);

                return;
            }
        }

        console.log(`${message.author.tag} ejecuto el comando: ${commandName}`);

    }

});

//cargar events
const events = fs.readdirSync('./events');

for (const file of events) {
    const event = require(`./events/${file}`);
    client.on(event.name, (...args) => event.run(client, ...args));

    console.log(`Event Handler Status: Cargado correctamente ${file}`);
}

// Login

client.login(token);