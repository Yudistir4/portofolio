import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { useState, useEffect } from 'react';
import LoadingPage from '../components/loadingPage';


const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4300);
  }, [])

  return (
    <>

      {loading ?
        <LoadingPage /> :
        <main className={`${poppins.variable} font-sans tracking-wide`}>
          <Component {...pageProps} />
        </main>
      }
    </>
  )
}

export default MyApp
