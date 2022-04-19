const { Discord, Client, Intents, Guild, Collection } = require('discord.js');
const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES" ] });
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "num",
    description: "Genera un numero aleatorio entre dos valores dados por el usuario",
    execute(message, args) {

        //comprueba si hay 2 argumentos
        if (args.length != 2) {
            message.channel.send("Debes introducir 2 valores");
            return;
        }

        //comprueba si los argumentos son numeros
        if (isNaN(args[0]) || isNaN(args[1])) {
            message.channel.send("Los valores deben ser numeros");
            return;
        }

        //comprueba si los argumentos son positivos
        if (args[0] < 0 || args[1] < 0) {
            message.channel.send("Los valores deben ser positivos");
            return;
        }

        //comprueba si los argumentos son iguales
        if (args[0] == args[1]) {
            message.channel.send("Los valores deben ser diferentes");
            return;
        }

        //comprueba si los argumentos son iguales a 0
        if (args[0] == 0 || args[1] == 0) {
            message.channel.send("Los valores deben ser mayores a 0");
            return;
        }

        //comprueba si el primer argumento es menor que el segundo
        if (args[0] > args[1]) {
            message.channel.send("El primer valor debe ser menor que el segundo");
            return;
        }

        //almacena los valores en variables
        let min = args[0];
        let max = args[1];

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        //genera un valor aleatorio entre 0 y 1
        let number = getRandomInt(min, max);

        //muestra el resultado
        const embed = new MessageEmbed()
            .setColor('#FF37FF')
            .setTitle('Numero')
            .setDescription('El numero generado es: ' + number)
            .setTimestamp()
            .setFooter('By: GHCO');
        message.channel.send({embeds: [embed]});
    }
}