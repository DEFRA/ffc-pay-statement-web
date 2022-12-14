const joi = require('joi')
const authConfig = require('./auth')
const storageConfig = require('./storage')

// Define config schema
const schema = joi.object({
  serviceName: joi.string().default('Payment statements'),
  port: joi.number().default(3055),
  env: joi.string().valid('development', 'test', 'production').default('development'),
  staticCacheTimeoutMillis: joi.number().default(7 * 24 * 60 * 60 * 1000),
  googleTagManagerKey: joi.string().default('')
})

// Build config
const config = {
  serviceName: process.env.SERVICE_NAME,
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  staticCacheTimeoutMillis: process.env.STATIC_CACHE_TIMEOUT_IN_MILLIS,
  googleTagManagerKey: process.env.GOOGLE_TAG_MANAGER_KEY
}

// Validate config
const result = schema.validate(config, {
  abortEarly: false
})

// Throw if config is invalid
if (result.error) {
  throw new Error(`The server config is invalid. ${result.error.message}`)
}

// Use the joi validated value
const value = result.value
value.authConfig = authConfig
value.isDev = value.env === 'development'
value.isTest = value.env === 'test'
value.isProd = value.env === 'production'

value.storageConfig = storageConfig

module.exports = value
