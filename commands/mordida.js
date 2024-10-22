const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **Deu uma modidinha em** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Mordida')
        .setColor('#000000')
        .setDescription(`${message.author} Deu uma modidinha em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Whack whack whack')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}