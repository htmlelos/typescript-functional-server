type ConfigType = {
  service: {
    NAME: string
    PORT: number
    LOG_LEVEL: string
  }
}

const config: ConfigType = {
  service: {
    NAME: process.env.SERVICE_NAME || 'Unknown Service',
    PORT: Number(process.env.SERVICE_PORT) || 3000,
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  },
}

export default config
