import { useAppDispatch, useAppSelector } from 'hooks/useAppSelector'
import type { NextPage } from 'next'
import action from 'redux/auth/authSlice'
import { fetchLogin } from 'redux/auth/fetchLogin'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const { token, error, fetching } = useAppSelector(state => state.auth)
  return (
    <>
      <h1>Landing page</h1>
      {error && <h1>{error}</h1>}
      {fetching && <h1>Loading...</h1>}
      {token && token}
      <button onClick={() => {
        dispatch(fetchLogin())
      }}>fetch</button>
    </>
  )
}

export default Home
