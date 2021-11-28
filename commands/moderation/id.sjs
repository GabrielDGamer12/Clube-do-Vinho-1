const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "id",
    category: "moderation",
    run: async(client, message, args) => {
  if (!message.member.permissions.has("BAN_MEMBERS"))
    return message.reply(
      "Você não tem permissão para fazer isso!"
    );
  let user = args[0];
  var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  var idbanidos = db.get(`userInfo.bans_${user}`);
  var membroson = db.get('serverUsers')
  var membrosons = db.get(`serverUsers.${user}`)
  console.log(membrosons);
  var prefixa = db.get(`prefixdb_${message.guild.id}`)
  message.channel.send(`${membroson} ${prefixa}`)
}};