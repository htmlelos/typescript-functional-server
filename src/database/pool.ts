import mysql from 'mysql'
import config from '../config'
import { logger } from '../logger/logger'

const pool = mysql.createPool(config.database.URL)
export const query = <T>(sql: string, values?: T) =>
  new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
pool.on('error', (error) => {
  logger.error(`Error connecting to the database ${error}`)
})
