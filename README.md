# bot-discord-js

Ejemplo mínimo de bot en Discord escrito en Node.js con soporte para ECMAScript Modules.

![CI](https://github.com/JohananCruz19/bot_discord_js/actions/workflows/ci.yml/badge.svg?branch=main)

## Estructura

- **package.json**: declara dependencias y el script de pruebas con Jest.
- **src/index.js**: crea el cliente de Discord y maneja el evento `ready`.
- **tests/**: carpeta para las pruebas automáticas; incluye un test inicial de ejemplo.
- **.github/.workflows/ci.yml**: flujo de CI que instala dependencias y ejecuta `npm test`.

## Aspectos clave

1. Uso de módulos ES (`"type": "module"`).
2. Integración con `discord.js` para acceder a la API de Discord.
3. Pruebas con Jest y automatización mediante GitHub Actions.
4. Gestionar el token de forma segura utilizando variables de entorno.

## Próximos pasos

- Ampliar la funcionalidad del bot (comandos, mensajes, permisos).
- Añadir herramientas de linting y formateo (ESLint, Prettier).
- Incorporar pruebas más útiles conforme crezca el proyecto.

