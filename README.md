# BONKER
A Twitch Bot Service  

# Devnill critique
- Persistent socket connections would be preferred over HTTP/REST architecture
- Core should read from queue instead of queue sending to core (rabbitmq or other)
- Too much http/REST overhead. Can implement precise services instead?
- Services are too scattered. Can combine 2-3 services (design is lacking in efficient architectural structure)

## Architecture
Please be advised: I am new to this.  

**Services**
- RabbitMQ (default config)
- Mongodb (default config)

**Node Processes**  
- `/twitch` is the chat bot (using tmi.js). It listens for messages and then sends them to RabbitMQ. It also listens for sockets to know when to output messages (from `/core` and `/web`).
- `/core` is the heavy lifter - it runs all essential functionality (db logic, bot commands, etc.)
- `/web` is the web service/server that acts as the website/administration panel
- `/env` stores all configs per-environment

### Twitch
- stuff

### Core
- stuff

### Web
- stuff

## @TODO
- project-wide eslint config? IS IT POSSIBLE?!@?#J!@#!
- testing
- 9999999 more things ok