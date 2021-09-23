import Discord, { Intents, Options } from 'discord.js'
import config from './config'

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

client.login(config.discordToken)