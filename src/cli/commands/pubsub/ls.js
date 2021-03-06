'use strict'

const print = require('../../utils').print

module.exports = {
  command: 'ls',

  describe: 'Get your list of subscriptions',

  builder: {},

  handler (argv) {
    argv.resolve((async () => {
      const ipfs = await argv.getIpfs()
      const subscriptions = await ipfs.pubsub.ls()
      subscriptions.forEach(sub => print(sub))
    })())
  }
}
