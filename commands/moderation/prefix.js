const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "prefix",
    category: "moderation",
    run: async(client, message, args) => {
  let prefix = args[0];
  var prefixo = db.get(`prefixodb`)
  message.channel.send(`Os prefixos são \`+\` e \`${prefixo}\``)
}};