import Head from 'next/head'

// Disable client side JS
export const config = { unstable_runtimeJS: false };

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
        <meta content={host} property="og:title" />
        <meta content={host} property="twitter:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <div className="content">
        <h1>{host}</h1>
        <p className="mono">Coming soon</p>
      </div>

    </main>
  )
}
