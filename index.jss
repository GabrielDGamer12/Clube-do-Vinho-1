require("http").createServer((req, res) => res.end(process.version)).listen()
const Discord = require("discord.js");
var Twit = require("twit");
const { Client, Message, MessageEmbed, Collection, WebhookClient } = require("discord.js");
const fs = require('fs');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
console.log(`Hello from Node.js ${process.version}!`);
const { prefix } = require("./settings/config.json");
const client = new Client({
    messageCacheLifetime: 60,
    fetchAllMembers: false,
    messageCacheMaxSize: 10,
    restTimeOffset: 0,
    restWsBridgetimeout: 100,
    shards: "auto",
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: true,
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});

global.client = new Client({
    messageCacheLifetime: 60,
    fetchAllMembers: false,
    messageCacheMaxSize: 10,
    restTimeOffset: 0,
    restWsBridgetimeout: 100,
    shards: "auto",
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: true,
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});
module.exports = client;
const config = require("./settings/config.json");
global.prefix = (config.prefix);
const token = process.env.TOKEN;
client.prefix = config.prefix;

// Anti-Raid //

/*const {AntiRaid} = require('discord-antiraid');
const db = require('quick.db');

//Extend AntiRaid class for edit save(id: String, cooldown: []) and getOptionsFromDB(id: String) with your db methods
class AntiRaidWithDB extends AntiRaid {
    //If the bot is public on several guilds and each guilds must have its own antiraid configuration
    async getOptionsFromDB(id) {
        return db.get(`antiraid_${id}`);
    }
};
const antiraid = new AntiRaidWithDB(client, {
    rateLimit: 3,
    time: 10000,
    ban: true,
    kick: false,
    unrank: false,
    exemptMembers: [],
    exemptRoles: [],
    exemptEvent: [],
    reason: "discord-antiraid"
});

antiraid.on("punish", (member, reason, sanction) => {
    member.guild.channels.cache.get(db.get(`logs_${member.guild.id}`)).send(`${member.user.username} got banned for raid attempt`);
});
*/
const { AntiRaid } = require("djs-antiraid"); // import djs-antiraid

const antiRaid = new AntiRaid(client, {
    rateLimit: 1, // Rate limit of actions.
    time: 30000, // Amount of time (in milliseconds)
    punishType: "kick", // ban, kick, editRole, removeRole
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    ignoredRoles: [], // Array of Role IDs that get ignored.
    ignoredEvents: [] 
});



antiRaid.on("trying", (member, event, punishType) => {
    console.log(`I will trying do ${punishType} to stop ${member.user.tag} for ${event}`);
});

antiRaid.on("action", (member, type) => {
    console.log(`${member.user.tag} has been ${type}`);
});


// Anti-Raid //

// WELCOME //
/*
client.on('guildMemberAdd', async member => {
  require("./welcome-bye/memberAdd")(member)
});
*/
//  WELCOME


//  HANDLER //



client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();
client.categories = fs.readdirSync("./commands/");

/*["command_handler", "event_handler", "slash_handler"].forEach((handler) => {
   require(`./handlers/${handler}`)(client)
});

const guild = client.guilds.cache.get('736846645211168820');
global.counter = (module.exports = async (member, client, guild, message, arguments, guilds, cache) => { 
  setInterval(() =>{
        var memberCount = guild.memberCount;
        let EmojisNumber = numbers.toEmoji(memberCount);
        const channeljoin = guild.channels.cache.get('890115077326376960');
        channeljoin.setTopic("Membros no CLUBE DO VINHO:wine_glass:: " + EmojisNumber);
        const channelleave = guild.channels.cache.get('890122504423735318');
        channelleave.setTopic("Membros no CLUBE DO VINHO:wine_glass:: " + EmojisNumber);
        console.log('Membros no Servidor: ' + memberCount);
    }, 600);
})*/

//  HANDLER //

client.login(process.env.TOKENRAID);