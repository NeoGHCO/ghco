module.exports = {
    name: "cry",
    description: "llorando",
    execute(message, args) {
        
        function randomMessage(){
            var randomNumber = Math.round(Math.random()*4);
            switch(randomNumber){
                case 0: return 'https://tenor.com/behVH.gif';
                case 1: return 'https://tenor.com/5vWN.gif';
                case 2: return 'https://tenor.com/bLkc8.gif';
                case 3: return 'https://tenor.com/bJSKj.gif';
                case 4: return 'https://tenor.com/blVDy.gif';
            }
        }

        let user = message.author;

        message.channel.send(`${user} está llorando`);
        message.channel.send((randomMessage()));
    }
};