const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
        .setCustomId("select")
        .setPlaceholder("Nenhuma linguagem selecionada")
        .addOptions({
            label: "javascript",
            description: "veja a documentação de JS",
            value: "javascript"
            },
            {
                label: "python",
                description: "veja a documentação de Python",
                value: "python"
            },
            {
                label: "C#",
                description: "veja a documentação de C#",
                value: "csharp"
            },
            {
                label: "discord.js",
                description: "veja a documentação de Discord.js",
                value: "discordjs"
            }
        )
        
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Abrir documentação da tecnologia em questão"),

    async execute(interaction){
        await interaction.reply({content: "Selecione uma das tecnologias", components: [row]});
        }

}