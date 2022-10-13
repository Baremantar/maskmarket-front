// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import pg from 'pg'

const Client = new pg.Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'enter1zexlol1',
  database: 'users'
})

Client.connect()

Client.query('SELECT * from users;', (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  Client.end()
})


type Data = {
  token?: string
  error?: string
}

interface LoginRequest extends NextApiRequest {
  body: {
    email: string
    password: string
  }
}

export default function handler(
  req: LoginRequest,
  res: NextApiResponse<Data>
) {
  const { password, email } = req.body
  res.status(200)
}
