const Discord = require("discord.js");
const { Client, MessageEmbed, Interaction, MessageActionRow, MessageSelectMenu, Message } = require("discord.js");

module.exports = {
    name: "ban",
    category: "others",
    description: "Banir",
    permission: "ADMINISTRATOR",
    type: 'CHAT_INPUT',
    options: [
      {
        name: "user",
        description: "Mencione um usuário para ser banido.",
        type: 6,
        required: true
      },
      {
        name: "motivo",
        description: "Motivo do Banimento (opcional)",
        type: 3,
        required: false
      }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async(client, interaction, message, args) => {
      try {
        const options = interaction.options._hoistedOptions;

        const motivo = interaction.options.getString("motivo") || "Não Expecificado.";

        const user = (options.find((e) => e.name == "user") && options.find((e) => e.name == "user").member.user) || interaction.user;

        const member = (options.find((e) => e.name == "user") && options.find((e) => e.name == "user").member) || interaction.member;
      
      const embed = new MessageEmbed()
        .setTitle('🚨 - BANIMENTO')
        .setColor('#ff210e')
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .addFields(
        {name: "``Informações do Banimento:``", value: `**Usuário**: ${user.username} \n**ID**: ${user.id} \n**Motivo**: ${motivo} \n **Banido por**: ${interaction.user}`
        }
        )
      if (!interaction.member.permissions.has("BAN_MEMBERS")){
      const embed_perm = new MessageEmbed()
      .setDescription(`🚨 | Desculpe, mas você não tem permissão para isso.`)
      interaction.followUp(
      { embeds: [embed_perm] }, { ephemeral: true }
    );  } else {
      //canal.send({ embeds: [embed] });
      var canal = client.channels.fetch("890122504423735318").then(canal => {
      canal.send({ embeds: [embed] })});
      interaction.followUp(user.username + " foi Banido.");
      const membro = interaction.guild.members.cache.get(user.id);
      //let membro = "@" + user.id;
      membro.ban({ reason: motivo });
      }} catch(err) {
        console.log("Erro", err)
      }
    }
}