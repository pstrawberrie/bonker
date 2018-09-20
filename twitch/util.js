/**
 * Twitch Utilities
 */

module.exports = {

  /**
   * Clean a message
   * @param {string} message
   */
  cleanMessage(message) {
    return message.trim().toLowerCase();
  },

  /**
   * Create a message job object
   * - We'll create a custom structure here in case something with tmi.js/twitch changes
   *   This way, we will only have to update the structure in a single place
   * @param {string} channel
   * @param {object} userstate
   * @param {string} message
   * 
   Expected Output Example:
   { channel: '#pstrawberrie',
      userstate: {
        badges: { broadcaster: '1', premium: '1' },
        color: '#B3194F',
        'display-name': 'pstrawberrie',
        emotes: null,
        id: '7617d10e-7d5a-468a-abfb-87f0fede5439',
        mod: false,
        'room-id': '49205456',
        subscriber: false,
        'tmi-sent-ts': '1537402034686',
        turbo: false,
        'user-id': '49205456',
        'user-type': null,
        'emotes-raw': null,
        'badges-raw': 'broadcaster/1,premium/1',
        username: 'pstrawberrie',
        'message-type': 'chat'
      },
      message: '11'
    }
   */
  createJob(channel, userstate, message) {
    return {
      id: userstate.id,
      user: {
        name: userstate['display-name'],
        id: userstate['user-id'],
        subscriber: userstate.subscriber,
        mod: userstate.mod,
        type: userstate['user-type']
      },
      timestamp: userstate['tmi-sent-ts'],
      message: this.cleanMessage(message),
      messageType: userstate['message-type'],
      channel,
    }
  }

}