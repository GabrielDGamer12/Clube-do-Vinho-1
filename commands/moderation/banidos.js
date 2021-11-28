const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "banidos",
    category: "moderation",
    run: async(client, message, args) => {
  if (!message.member.permissions.has("BAN_MEMBERS"))
    return message.reply(
      "Você não tem permissão para fazer isso!"
    );
  var banidos = db.get("userInfo.bans");
  console.log(banidos);
  message.channel.send(`${banidos}`)
}};