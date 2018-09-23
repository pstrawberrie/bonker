module.exports = {

  config: {
    development: {
      testMode: true,
      twitchPort: 3001,
      corePort: 3002,
      webPort: 3003,
      mongoDbAddress: 'mongodb://localhost:27017/bonker',
      twitchKey: 'oauth:xxxx',
      twitchAdmin: 'coolguy',
      twitchBot: 'coolguyb0t',
      twitchCommandFlag: '!',
    },
    production: {
      twitchPort: 3001,
      corePort: 3002,
      webPort: 3003,
      mongoDbAddress: 'mongodb://localhost:27017/bonker',
      twitchKey: 'oauth:xxxx',
      twitchAdmin: 'coolguy',
      twitchBot: 'coolguyb0t',
      twitchCommandFlag: '!',
    },
  },

  getConfig(env) {
    if(env == undefined || env.toLowerCase() === 'development') {
      return this.config.development
    } else if(env.toLowerCase() === 'production') {
      return this.config.production
    } else {
      return this.config.development
    }
  }

}