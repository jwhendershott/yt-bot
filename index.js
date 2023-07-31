const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv/config');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', () => {
    console.log('The bot is ready');
});

client.on('messageCreate', async message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }

    if (message.content === '!youtube') {
        message.channel.send('Youtube!');
        let key = 'AIzaSyA2lG28UXHiLfTFgpYluLdTvjjGv24ml4g'
        let url = `https://www.googleapis.com/youtube/v3/search?key=${key}a=${searchText}&type=video`
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
    }
});

client.login(process.env.TOKEN);