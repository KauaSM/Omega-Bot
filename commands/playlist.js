const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.channel.send('Playlists')
};

console.log(message.channel.send);