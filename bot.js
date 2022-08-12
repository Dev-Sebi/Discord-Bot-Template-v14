"use strict";
console.clear()
require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.GuildEmojisAndStickers,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
});
module.exports = client;

client.ArrayOfApplicationCommands = new Discord.Collection();

require("./handler")(client);

client.login(process.env.TOKEN);

/* FOR DEBUGGING (for example if your bot doesn't start)
*   client
*       .on("debug", console.log)
*       .on("warn", console.log)
*/