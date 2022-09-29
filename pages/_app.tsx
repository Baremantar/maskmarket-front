import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header/header'
import Providers from '../components/providers'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Header />
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
