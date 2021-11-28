const Discord = require("discord.js");
const { Message, Client, MessageEmbed, MessageActionRow, MessageSelectMenu, Interaction } = require("discord.js");

module.exports = {
    name: "ajuda",
    category: "others",
    description: "Comandos do Servidor",
    type: 'CHAT_INPUT',

run: async(client, interaction, message, args) => {

  const embed = new MessageEmbed()
    .setTitle(`Ajuda`)
    .setColor("#FF0000")
    .setDescription(`**───────────── Clube do Vinho🍷 ─────────────**\n\n	                                 **Comandos de Musica**\n\n+play(link)	**|** Inicia qualquer video do youtube em formato de audio em um canal de voz!\n+skip          	**|** Pula a Musica Atual!\n+stop	     	**|** Para a musica e o bot sai do canal de voz!\n\n	                                   **Comandos Extras**\n\n+uptime		**|** Mostra quanto tempo o bot não é reiniciado!\n+avatar	 	**|** Envia seu avatar no chat(ou de quem for menciona)!\n+ideia   	 	**|** Envie uma sugestão!\n\n**───────────── Clube do Vinho🍷 ─────────────**`)

 interaction.followUp({ embeds: [embed] });
}
}