const Discord = require("discord.js");
const { Message, Client, MessageEmbed, MessageActionRow, MessageSelectMenu, Interaction } = require("discord.js");

module.exports = {
    name: "uptime",
    category: "others",
    description: "Mostra o tempo que o bot está online",
    type: 'CHAT_INPUT',

run: async(client, interaction, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

  const embed = new MessageEmbed()
    .setTitle(`Tempo de atividade 🕰️`)
    .setColor("#FF0000")
    .setDescription(`**Estou online há:**\n${uptime}`)

 interaction.followUp({ embeds: [embed] });
}
}