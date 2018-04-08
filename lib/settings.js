'use strict'

/*
const database = {
  PER_REQUEST_CONCURRENCY: defaultEnv('DB_PER_REQUEST_CONCURRENCY', 4),
  USER: defaultEnv('DB_USER', 'pg'),
  HOST: defaultEnv('DB_HOST', 'localhost'),
  PORT: defaultEnv('DB_PORT', 5432),
  PASSWORD: defaultEnv('DB_PASSWORD', ''),
  NAME: defaultEnv('DB_NAME', 'users'),
  POOL_SIZE: Number(defaultEnv('DB_POOL_SIZE', 20))
}
*/

/*
const databaseConfig = {
  postgres: {
    user: database.USER,
    database: database.NAME,
    password: database.PASSWORD,
    port: database.PORT,
    host: database.HOST,
    poolSize: database.POOL_SIZE
  },
  maxConnectionsPerRequest: database.PER_REQUEST_CONCURRENCY
}
*/

module.exports = {
  // DATABASE: database,
  MIDDLEWARE: [
    '@npm/spife/middleware/common',
    '@npm/spife/middleware/logging',
    '@npm/spife/middleware/metrics',
    '@npm/spife/middleware/monitor',
    '@npm/spife/middleware/replify',
    // ['@npm/spife/middleware/database', databaseConfig],
    '@npm/spife/middleware/transaction',
    '@npm/spife/middleware/body-json',
    '@npm/spife/middleware/body-limit'
  ],
  NODE_ENV: defaultEnv('NODE_ENV', null),
  PORT: defaultEnv('PORT', 8000),
  SERVICE_NAME: defaultEnv('SERVICE_NAME', 't2am'),
  ROUTER: './routes/index.js'
}

function defaultEnv (envvar, val) {
  return envvar in process.env
    ? process.env[envvar]
    : val
}