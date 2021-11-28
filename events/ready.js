const client = require("..");
const db = require('quick.db');
const counter = require("./member-count");
const { MongoClient } = require('mongodb');

const urlDB = `mongodb+srv://gabrieldgamer:${process.env.dbpass}@databasecdv.rfh9y.mongodb.net/${process.env.dbname}?retryWrites=true&w=majority`;
const clientDB = new MongoClient(urlDB, { useNewUrlParser: true, useUnifiedTopology: true });
clientDB.connect()

const collectionMusic = clientDB.db("cdvDB").collection("cdvMusic");

const filteredDocs = (await collectionMusic.find({}, { projection: { _id: 0, statusmanutencao: 1 } }).toArray());

client.on('ready', () => {
    console.log(`${client.user.username} Is Online`);
    const guild = client.guilds.cache.get('736846645211168820');
    var man = filteredDocs[0].statusmanutencao;//db.get("manutencaostatus")
    var activitiesoff = [
      /*`Utilize +ajuda para obter Ajuda`,
      `${guild.memberCount} membros!`,
      `Clube do Vinho🍷`,
      `Codigo Aberto: +codigo`*/
      `Manutenção 65% Finalizada 🍷`
    ];
    var activitieson = [
      `Em manutenção 🍷`
    ];
    i = 0;
    if(man == "off") {
    setInterval( () => client.user.setActivity(`${activitiesoff[i++ % activitiesoff.length]}`, {
        type: "PLAYING"
      }), 1000 * 10)
      } else {
    setInterval( () => client.user.setActivity(`${activitieson[i++ % activitieson.length]}`, {
        type: "PLAYING"
      }), 1000 * 10)
      }
      //counter(client);
});
