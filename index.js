// index.js
// Amir Mohammed
// 1 April, 2020

const discord = require('discord.js');
const math = require('math.js');
const bot = new discord.Client();
const token = 'Njk1MDY0MjYxOTk0NzQxODAx.XoVjCw.lBiYV5qQ_3WZ7E7bfjAKD20-bVU';
const prefix = ';';

bot.on('ready', () => {
    console.log('Turnt on successfully');
});

bot.on('message', msg => {

    let args = msg.content.substring(prefix.length).split(' ');

    switch(args[0]){
        case 'run':
            msg.channel.send('ok running');
        break; 
        
        case 'stop':
            msg.channel.send('ok stopping');
        break;

        case 'whosgay':
            msg.channel.send('<@242096238244134923>');
        break;

        case 'whoisdaddy':
            msg.channel.send('<@315856223130091520> is better than everyone else :flushed:');
        break;

        case 'add':
            msg.channel.send({embed: {
                color: 3447003,
                description: "wtf does this feature even do, i have no clue dam"
              }});
        break;
    };
    if (msg.content === 'What is this channel named after?'){
        msg.channel.send('the gayest dude of all');
    };
});


bot.login(token);
