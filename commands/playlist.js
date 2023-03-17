const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Minha playlist de estudo"),

    async execute(interaction){
        await interaction.reply("https://open.spotify.com/playlist/37i9dQZF1DX06817kK7cRP?si=9a48702541364194"); 
        }

}