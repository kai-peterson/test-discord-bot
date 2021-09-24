import Discord, { Intents, Options } from 'discord.js'
import config from './config.js'
import {
    entersState,
	VoiceConnectionStatus,
    joinVoiceChannel
} from '@discordjs/voice'
// import { initCommands } from './command.js'

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
})

client.on('ready', () => {
    console.log("logged in successfully");
    // client.guilds.cache.forEach((guild) => initCommands(config.clientId, guild))
})

client.on('interactionCreate', async interaction => {
    console.log(interaction);
    if (!interaction.isCommand()) {
        return;
    }

    if (interaction.commandName === 'ping') {
        await interaction.reply('pong');
    }
})

client.on('messageCreate', async message => {
    const voiceChannel = message.member.voice.channel;
    const content = message.content;
    if (!content.startsWith(config.prefix) || message.author.bot) {
        return
    }
    console.log(voiceChannel);

    const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: message.guildId,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator
    })

    try {
        await entersState(connection, VoiceConnectionStatus.Ready, 30_000)
        return connection
    } catch (err) {
        connection.destroy();
        throw error;
    }

})

client.login(config.discordToken)