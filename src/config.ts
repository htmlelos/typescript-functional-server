const config = {
  service: {
    NAME: process.env.SERVICE_NAME || 'Unknown Service',
    PORT: Number(process.env.SERVICE_PORT) || 3000,
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  },
  database: {
    URL: process.env.DATABASE_URL || 'mysql://root:root@localhost:3306/test',
  },
}

export default config
