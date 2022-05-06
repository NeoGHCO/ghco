const fs = require('fs');
const { Client, Intents, Guild, guilds , Collection } = require('discord.js');
const { token } = require('./config.json');
const { prefix } = require('./config.json');
const { owner } = require('./config.json');
const { MessageEmbed } = require('discord.js');
const path = require('path');
const { ready } = require('libsodium-wrappers');

const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES", "GUILD_MEMBERS" ] });

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
        const embed = new MessageEmbed()
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
        message.channel.send({embeds: [embed]});
    }
});

//piedra papel o tijera
client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(`${prefix}`)) return;
    let response = ['Piedra', 'Papel', 'Tijera'];
    let random = response[Math.floor(Math.random() * response.length)];
    if (message.content.startsWith('piedra')) {
        const embed = new MessageEmbed()
            .setColor('#ff37ff')
            .setTitle(`${random}`)
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
    if (message.content.startsWith('papel')) {
        const embed = new MessageEmbed()
            .setColor('#ff37ff')
            .setTitle(`${random}`)
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
    if (message.content.startsWith('tijera')) {
        const embed = new MessageEmbed()
            .setColor('#ff37ff')
            .setTitle(`${random}`)
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
});

//Cargar commands y ignorar los que no existan (By SirDevi)

client.on('messageCreate', message => {

    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {

        const args = message.content.slice(prefix.length).split(/ +/);

        const commandName = args.shift().toLowerCase();

        const command = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        try {

            if (!command) return;

            const commandFile = require(`./commands/${commandName}.js`);

            commandFile.execute(message, args);

        } catch (err) {

            if (err.message.includes('Cannot find module')) {

                const embed = new MessageEmbed()
                    .setColor('#FF37FF')
                    .setTitle('')
                    .setDescription('')
                    .setFields(
                      { name: 'Error al ejecutar el comando', value: 'El comando **' + commandName + '** no existe' }
                    )
                    .setTimestamp()
                    .setFooter('By: GHCO');
                message.channel.send({embeds: [embed]});

                console.log(`${message.author.tag} ha intentado ejecutar el comando ${commandName} pero no existe`);

                return;
            
            } else {

                console.log(err);

                const embed = new MessageEmbed()
                    .setColor('#FF37FF')
                    .setTitle('')
                    .setDescription('')
                    .setFields(
                        { name: 'Error al ejecutar el comando', value: 'Ha ocurrido un error al ejecutar el comando **' + commandName + '**, si el error persiste contacta con un administrador o con un desarrollador de este bot' }
                    )
                    .setTimestamp()
                    .setFooter('By: GHCO');
                message.channel.send({embeds: [embed]});

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