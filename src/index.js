import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => console.log(`Bot listo: ${client.user.tag}`));

client.login("TOKEN_DUMMY"); // en prod usa variable de entorno
