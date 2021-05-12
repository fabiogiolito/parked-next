import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component host={process.env.VERCEL_URL} {...pageProps} />
}

export default MyApp
