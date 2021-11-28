const Discord = require("discord.js");
const db = require('quick.db');

module.exports = async (member, client) => { 

  // channel = member.guild.channels.cache.find(ch => ch.name === '😭-bye-bye');
  const channel = member.guild.channels.cache.find(ch => ch.id === "729874289498521630");
  if (!channel) return;
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === ":wine_glass:");

    let embed = await new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Adeus!`)
      .setDescription(`**${member.user.username}** saiu do Clube do Vinho :wine_glass:! Agora estamos com **${member.guild.memberCount} membros**`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter(`Clube do Vinho`)
      .setTimestamp();

    db.delete(`serverUsers`, member.user)
    channel.send({ embeds: [embed] });
};