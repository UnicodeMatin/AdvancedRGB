const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.on("ready", () => {
  console.log("RGB Started."); 
  if(config.slowmode < 60000) console.log(`This slowmode is dangerous!!!`)
  let colors = [
    "#f4eb20",
    "#fba51a",
    "#ed1e24",
    "#ec197a",
    "#d1499b",
    "#8750a1",
    "#5b52a3",
    "#436fb6",
    "#40b8ea",
    "#72c7a6",
    "#72bf55",
    "#9bca3c"
  ]
  setInterval(() => {
    let cor = colors[Math.floor(Math.random() * colors.length)];
    client.guilds.cache.get(config.guild).roles.cache.get(config.role).setColor(cor)
    console.log("Role's color changed.")
  },config.slowmode)
})

client.login(config.token);
