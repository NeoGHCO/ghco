module.exports = {
    name: "hi",
    description: "saluda",
    execute(message, args) {

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*9);
            switch(randomNumber){
                case 0: return 'https://tenor.com/bapEd.gif';
                case 1: return 'https://tenor.com/bMOmn.gif';
                case 2: return 'https://tenor.com/5ZN6.gif';
                case 3: return 'https://tenor.com/5q5b.gif';
                case 4: return 'https://tenor.com/bD7dk.gif';
                case 5: return 'https://tenor.com/bGmwM.gif';
                case 6: return 'https://tenor.com/bAL4A.gif';
                case 7: return 'https://tenor.com/baktA.gif';
                case 8: return 'https://tenor.com/NFJ3.gif';
                case 9: return 'https://tenor.com/K7rR.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} está saludando`);
        message.channel.send((randomMessage()));
    }
};