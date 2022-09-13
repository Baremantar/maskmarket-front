import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header/header'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
