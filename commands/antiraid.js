const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  const roleA = await message.guild.roles.cache.find(role => role.id === "720784446860820520"); 

  if (
    !message.member.roles.cache.some(r =>
      [
        "788121995526406164",
				"720784528565862491"
      ].includes(r.id) )) {
    return message.channel.send(`**${message.author.username} esse comando é restrito para staffs.**`);
  } else if (message.content.includes("on")) {
    await roleA.setPermissions(104186945).catch(console.error);
    await message.channel.send(`**O sistema de Antiraid foi ligado por ${message.author.username}**`);
  } else if (message.content.includes("off")) {
    await roleA.setPermissions(104188993).catch(console.error);
    await message.channel.send(`**O sistema de Antiraid foi desligado por ${message.author.username}**`);
  } else {
    return message.channel.send(`**${message.author.username} o cmd correto é antiraid on | off**`);
  }
};