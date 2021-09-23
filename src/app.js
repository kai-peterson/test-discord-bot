import Discord, { Intents, Options } from 'discord.js'
import config from './config.js'
import { initCommands } from './command.js'

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

client.on('ready', () => {
    console.log("logged in successfully");
    client.guilds.cache.forEach((guild) => initCommands(config.clientId, guild))
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) {
        return;
    }

    if (interaction.commandName === 'ping') {
        await interaction.reply('pong');
    }
})

client.login(config.discordToken)