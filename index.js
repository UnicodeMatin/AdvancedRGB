const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.on("ready", () => {
  console.log("Bot is ready."); 


  let colors = [
    "#faf5b3",
    "#ffd8a1",
    "#f9a98e",
    "#f7aec1",
    "#e7b4d3",
    "#c5acd3",
    "#b0a9d3",
    "#acb8de",
    "#b8def5",
    "#c5e5d6",
    "#c5e2b6",
    "#d5e6af",
    "#f9f18c",
    "#fec679",
    "#f68567",
    "#f489a7",
    "#df92be",
    "#ac8bc0",
    "#9087c0",
    "#879bce",
    "#96d1f3",
    "#addac6",
    "#abd596",
    "#c1dd89",
    "#f6ed60",
    "#fdb64e",
    "#f15b40",
    "#f15f90",
    "#d671ad",
    "#9667ab",
    "#756bb0",
    "#6783c2",
    "#70c3ed",
    "#8ed0b5",
    "#8ec975",
    "#aed361"
  ] 
  if(interval < 60000) console.log(`This slowmode is dangerous!!!`)
  setInterval(() => {
    let cor = colors[Math.floor(Math.random() * colors.length)];
    client.guilds.cache.get(config.guild).roles.cache.get(config.role).setColor(cor)
    console.log("Role's color changed.")
  },config.slowmode)
})

client.login(config.token);