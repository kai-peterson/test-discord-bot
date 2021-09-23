import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import config from './config.js'

const commands = [{
    name: 'ping',
    description: 'Replies with Pong!'
}]

const rest = new REST({ version: '9' }).setToken(config.discordToken);

export const initCommands = async (clientId, guild) => {
    try {
      console.log('Started refreshing application (/) commands.');
  
      await rest.put(
        Routes.applicationGuildCommands(clientId, guild.id),
        { body: commands },
      );
  
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
};