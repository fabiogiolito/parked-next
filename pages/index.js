import Head from 'next/head'

// Disable CSR
export const config = { unstable_runtimeJS: false };

// Pass host as prop
export async function getServerSideProps(context) {
  return { props: { host: context.req.headers.host } }
}

export default function Home({host}) {
  return (
    <main>
      <Head>
        <title>Coming soon • {host}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta content={`Coming soon • ${host}`} property="og:title"/>
        <meta content={`Coming soon • ${host}`} property="twitter:title"/>
      </Head>

      <div className="content">
        <h1>{host}</h1>
        <p className="mono">Coming soon</p>
      </div>

    </main>
  )
}
