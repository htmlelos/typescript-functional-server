import pino from 'pino'
import config from '../../config'

type PinoOptionsType = {
  translateTime: 'SYS:dd/mm/yyyy HH:MM:ss'
  ignore: string
}

type TransportType = {
  target: 'pino-pretty' | 'pino-console'
  options: PinoOptionsType
}

type LoggerConfigType = {
  transport: TransportType
  name: string
  level: string
}

const configLogger = () => {
  const loggerConfigType: LoggerConfigType = {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'SYS:dd/mm/yyyy HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
    name: config.service.NAME,
    level: config.service.LOG_LEVEL,
  }
  return loggerConfigType
}

const loggerConfig: LoggerConfigType = configLogger()

export const logger = pino(loggerConfig)
