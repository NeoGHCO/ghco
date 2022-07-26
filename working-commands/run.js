module.exports = {
    name: "run",
    description: "corre",
    execute(message, args) {

        function randomMessage(){
            var randomNumber = Math.round(Math.random()*4);
            switch(randomNumber){
                case 0: return 'https://tenor.com/XoUs.gif';
                case 1: return 'https://tenor.com/bxWZu.gif';
                case 2: return 'https://tenor.com/bDCLV.gif';
                case 3: return 'https://tenor.com/blmIs.gif';
                case 4: return 'https://tenor.com/bvqz0.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} está corriendo`);
        message.channel.send((randomMessage()));
    }
};