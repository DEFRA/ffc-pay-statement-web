const Joi = require('joi')

// Define config schema
const schema = Joi.object({
  connectionStr: Joi.string().when('useConnectionStr', { is: true, then: Joi.required(), otherwise: Joi.allow('').optional() }),
  storageAccount: Joi.string().required(),
  projectionContainer: Joi.string().default('payeventstore'),
  statementContainer: Joi.string().default('statements'),
  statementFolder: Joi.string().default('outbound'),
  useConnectionStr: Joi.boolean().default(false),
  createContainers: Joi.boolean().default(true)
})

// Build config
const config = {
  connectionStr: process.env.AZURE_STORAGE_CONNECTION_STRING,
  storageAccount: process.env.AZURE_STORAGE_ACCOUNT_NAME,
  projectionContainer: process.env.AZURE_STORAGE_CONTAINER_PROJECTION,
  statementContainer: process.env.AZURE_STORAGE_CONTAINER_REPORT,
  useConnectionStr: process.env.AZURE_STORAGE_USE_CONNECTION_STRING,
  createContainers: process.env.AZURE_STORAGE_CREATE_CONTAINERS
}

// Validate config
const result = schema.validate(config, {
  abortEarly: false
})

// Throw if config is invalid
if (result.error) {
  throw new Error(`The blob storage config is invalid. ${result.error.message}`)
}

module.exports = result.value
