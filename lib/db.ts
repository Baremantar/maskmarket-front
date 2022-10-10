import pg from 'pg'

const connection =  new pg.Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'users'
})


export default connection