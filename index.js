const express = require('express');
const app = express();
app.get("/", (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
	response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos




client.on('message', message => {
	if (message.author.bot) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
	if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

	const args = message.content
		.trim().slice(config.prefix.length)
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	try {
		const commandFile = require(`./commands/${command}.js`)
		commandFile.run(client, message, args);
	} catch (err) {
		console.error('Erro:' + err);
	}
});




client.on("guildMemberAdd", async (member) => {

	let guild = await client.guilds.cache.get("IDdoSeuServidor");
	let channel = await client.channels.cache.get("IDdoCanalDeBoasVindas");
	let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "nomedoemoji");
	if (guild != member.guild) {
		return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
	} else {
		let embed = await new Discord.MessageEmbed()
			.setColor("#7c2ae8")
			.setAuthor(member.user.tag, member.user.displayAvatarURL())
			.setTitle(`${emoji} Boas-vindas ${emoji}`)
			.setImage("https://imgur.com/3vYVlHb.gif")
			.setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:`)
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
			.setFooter("Código de Hyouka Discord")
			.setTimestamp();

		channel.send(embed);
	}
});




client.on("guildMemberRemove", async (member) => {

	let guild = await client.guilds.cache.get("IDdoSeuServidor");
	let channel = await client.channels.cache.get("IDdoCanalDeDespedidas");
	let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "nomedoemoji");
	if (guild != member.guild) {
		return console.log("Algum saco pela saiu do servidor. Mas não é nesse, então tá tudo bem :)");
	} else {
		let embed = await new Discord.MessageEmbed()
			.setColor("#7c2ae8")
			.setAuthor(member.user.tag, member.user.displayAvatarURL())
			.setTitle(`${emoji} Adeus! ${emoji}`)
			.setImage("https://imgur.com/3vYVlHb.gif")
			.setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
			.setFooter("Código de Hyouka Discord")
			.setTimestamp();

		channel.send(embed);
	}
});




client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o TOKEN.