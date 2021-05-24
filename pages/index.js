import Head from 'next/head'

// Disable client side JS
export const config = { unstable_runtimeJS: false }

// Pass host as prop
export async function getServerSideProps(context) {
  return { props: { host: context.req.headers.host } }
}

export default function Home({host}) {
  return (
    <main>
      <Head>
        <title>{host}</title>
        <meta name="description" content="Coming soon" />
        <link href="/favicon.png" rel="shortcut icon" type="image/x-icon"/>
        <link href="/touchicon.png" rel="apple-touch-icon"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta content={host} property="og:title"/>
        <meta content={host} property="twitter:title"/>
        <meta content="Coming soon" property="og:description"/>
        <meta content="Coming soon" property="twitter:description"/>
      </Head>

      <h1>{host}</h1>
      <p>Coming soon</p>

    </main>
  )
}
