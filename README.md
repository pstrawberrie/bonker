# BONKER
A Twitch Bot Service  

## Architecture
Please be advised: I am new to this.  

**Prereq**
- Node >= 8.x
- RabbitMQ
- Mongodb

**Flow**
- `/twitch` is the chat bot (using tmi.js). It listens for messages and then sends them to RabbitMQ. It also listens for sockets to know when to output messages (from `/core` and `/web`).
- `/core` is the heavy lifter - it runs all essential functionality (db logic, bot commands, etc.)
- `/web` is the web service/server that acts as the website/administration panel. It handles displaying overlays for OBS/etc.
- `/env` stores all configs per-environment

## Details

### Env
- switch to .env / environment variables?

### Twitch
- stuff

### Core
- stuff

### Web
- stuff

### Lib
- models
- common utilities

## @TODO
- project-wide eslint config? IS IT POSSIBLE?!@?#J!@#!
- testing
- 9999999 more things ok