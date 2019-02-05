const api = require('./api/v1')
const apiGen = require('./apigen')
const processArgs = require('./process-args')

const SnaxApi = function(config) {
  return apiGen('v1', api, config)
}

Object.assign(
  SnaxApi,
  {
    processArgs,
    api,

    /** @deprecated */
    Testnet: function (config) {
      console.error('deprecated, change SnaxApi.Testnet(..) to just SnaxApi(..)')
      return SnaxApi(config)
    },

    /** @deprecated */
    Localnet: function (config) {
      console.error('deprecated, change SnaxApi.Localnet(..) to just SnaxApi(..)')
      return SnaxApi(config)
    }
  }
)

module.exports = SnaxApi
