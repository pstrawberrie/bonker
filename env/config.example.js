module.exports = {
  development: {
    testMode: true,
    mongoDbAddress: 'mongodb://localhost:27017/bonker',
    twitchKey: 'oauth:xxxx',
    twitchAdmin: 'coolguy',
    twitchBot: 'coolguyb0t',
  },
  production: {
    mongoDbAddress: 'mongodb://localhost:27017/bonker',
    twitchKey: 'oauth:xxxx',
    twitchAdmin: 'coolguy',
    twitchBot: 'coolguyb0t',
  },
}