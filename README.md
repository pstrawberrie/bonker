# BONKER
A Twitch Bot Service  

# Devnill critique
- Too much http/REST overhead. Can implement precise services instead.
- Services are too scattered. Can combine 2-3 services (design is lacking in efficient architectural structure)
- Core should read from queue (rabbitmq or other)

## Architecture
Please be advised: I am new to this.  

- `/listener` is a chat bot listener - using tmi.js. All it does is send every single command to the `/queue` (*after a soft validation, if implemented*)
- `/core` is the heavy lifter - it runs all essential functionality (db logic, bot commands, etc.)
- `/queue` is a queue service. It takes in jobs and sends them to `/core`. Devnill says RABBITMQ
- `/poster` is a separate chat bot (using tmi.js) that outputs messages/whispers into the channel
- `/web` is the web service/server that acts as the website/administration panel
And it's as simple as that..........  
xDDDDD

### Listener
- listener stuff

### Core
- core stuff

### Queue
- queue stuff

### Poster
- poster stuff

### Web
- web stuff

## @TODO
- project-wide eslint config
- testing
- 9999999 more things ok