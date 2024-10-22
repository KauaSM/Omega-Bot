const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.channel.send("**Sem ajuda pra você saco pela <:JerryLol:759761262707081218>**");
};