'use strict'

const Env = use('Env')

module.exports = {
  appKey: Env.get('APP_KEY'),

  http: {
    allowMethodSpoofing: true,
    trustProxy: false,
    subdomainOffset: 2,
    jsonpCallback: 'callback',
    etag: true
  },

  views: {
    cache: Env.get('CACHE_VIEWS', true)
  },

  static: {
    dotfiles: 'ignore',
    etag: true,
    extensions: false
  },

  locales: {
    driver: 'file',
    locale: 'en'
  },

  logger: {
    transport: 'console',
    console: {
      driver: 'console',
      name: 'adonis-app',
      level: 'info'
    },
    file: {
      driver: 'file',
      name: 'adonis-app',
      filename: 'adonis.log',
      level: 'info'
    }
  }
}
