import dotenv from 'dotenv'

dotenv.config();

export default {
    discordToken: process.env.DISCORD_TOKEN,
    clientId: process.env.CLIENT_ID,
    prefix: '!'
}