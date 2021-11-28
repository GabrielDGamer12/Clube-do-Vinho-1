const client = (global.client);

client.on('ready', () => {
    console.log(`${client.user.username} Is Online`);
    const guild = client.guilds.cache.get('736846645211168820');
    let activities = [
      `Em manutenção 🍷`
    ],
    i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
      }), 1000 * 60);

      //global.counter(client);
});
