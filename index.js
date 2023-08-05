const { Client, GatewayIntentBits, EmbedBuilder} = require('discord.js');
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
        await message.reply('pong');
    }

    if (message.content.toLowerCase().includes('!youtube')) {
        await message.channel.send('Youtube!');
        let searchText = message.content.split(' ');
        let shiftedText = searchText.shift();
        let joinedText = searchText.join(' ');
        console.log(process.env.KEY);
        let url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.KEY}&q=${joinedText}&type=video`
        let response = await fetch(url);
        let json = await response.json();
        console.log(json.items[0].id.videoId);
        console.log(searchText);
        console.log(shiftedText);
        console.log(joinedText);
        let embedMsg = await message.channel.send(`https://www.youtube.com/watch?v=${json.items[0].id.videoId}`);
    }
});

client.login(process.env.TOKEN);