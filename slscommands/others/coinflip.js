const Discord = require("discord.js");
const { Client, MessageEmbed, Interaction } = require("discord.js");

module.exports = {
    name: "coinflip",
    category: "others",
    description: "Cara ou Coroa",
    type: 'CHAT_INPUT',
    options: [
      {
        name: "coinflip",
        description: "Cara ou Coroa?",
        type: 3,
        required: true
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

          const coinflips = interaction.options.getString("coinflip");
        
          const coinflip = coinflips.toLowerCase;

          var array1 = ["cara", "coroa"];

          var rand = Math.floor(Math.random() * array1.length);
  
          /*if (coinflip == ("cara").toLowerCase || coinflip == ("coroa").toLowerCase) {
            else if (coinflip == (array1[rand]).toLowerCase) {
            interaction.followUp("Deu **" + array1[rand] + "**, você ganhou dessa vez!");
          } 
        else if (coinflip != (array1[rand]).toLowerCase) {
            interaction.followUp("Deu **" + array1[rand] + "**, você perdeu dessa vez!"
            );
        }
          } else {
            interaction.followUp("insira **cara** ou **coroa** na frente do comando.");
          }*/
        if (coinflip !== ("cara").toLowerCase || coinflip !== ("coroa").toLowerCase) {
            console.log(coinflip);
            interaction.followUp("insira **cara** ou **coroa** na frente do comando.");
          } else {
            if (array1[rand] == coinflips) {
              console.log(array1[rand] + "  " + coinflips);
              interaction.followUp("Deu **" + array1[rand] + "**, você ganhou dessa vez!");
            }
            if (array1[rand] !== coinflips) {
              console.log(array1[rand] + "  " + coinflips);
              interaction.followUp("Deu **" + array1[rand] + "**, você perdeu dessa vez!"
            );
            }
          }
        /*else if (array1[rand] == coinflip) {
            console.log(array1[rand]);
            interaction.followUp("Deu **" + array1[rand] + "**, você ganhou dessa vez!");
          } 
        else if (array1[rand] !== coinflip) {
            console.log(array1[rand]);
            interaction.followUp("Deu **" + array1[rand] + "**, você perdeu dessa vez!"
            );
        }*/
        } catch(err) {
        console.log("Erro", err)
        }}};