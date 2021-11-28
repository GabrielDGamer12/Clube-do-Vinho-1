const Discord = require("discord.js");
const db = require('quick.db');

module.exports = async (member, guild, client, send) => {
  
const canal = member.guild.channels.cache.find(ch => ch.id === "729873039105458266");
console.log(canal)

    const name = ("Clube do Vinho🍷")
    var mention = `${member.user}`;
    let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Bem-vindo`)
      .setDescription(`**${member.user}**, bem-vindo(a) ao **Clube do Vinho🍷**! Atualmente estamos com **${member.guild.memberCount} membros**`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Clube do Vinho🍷")
      .setTimestamp();

    /*member.guild.channels.cache.get
    ("729873038648279051")*/
    db.push(`serverUsers.${member.user}`, member.user.username)
    canal.send(mention);
    canal.send({ embeds: [embed] });
  };
