// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  token?: string
  error?: string
}

interface LoginRequest extends NextApiRequest {
  body: {
    username: string
    password: string
  }
}

export default function handler(
  req: LoginRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(400).send({ error: "Only post available" })
  }
  const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  const { password, username } = req.body
  console.log(password, username)
  res.status(200).json({ token: JWT })
}
