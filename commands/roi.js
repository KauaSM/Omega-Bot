const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://cdn.discordapp.com/attachments/754554448113565800/788261407677874186/roi.png',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um oi!');
}
/*
message.channel.send(`**Roi** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#ff0000')
        .setDescription(`**Roi, ${user} né?**`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Posso lhe enfiar a rola? >////<')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}