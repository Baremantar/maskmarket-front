import PG from 'pg'

const pool = new PG.Pool({
    user: 'postgres',
    password: 'enter1zexlol1',
    host: 'localhost',
    port: 5432,
    database: 'users'
})

export default pool