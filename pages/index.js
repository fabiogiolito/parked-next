import Head from 'next/head'
import Image from 'next/image'

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
        <title>Coming soon from Expa • {host}</title>
        <link href="/favicon.png" rel="shortcut icon" type="image/x-icon"/>
        <link href="/expa-touch.png" rel="apple-touch-icon"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta content={`Coming soon from Expa • ${host}`} property="og:title"/>
        <meta content="/expa_og.png" property="og:image"/>
        <meta content={`Coming soon from Expa • ${host}`} property="twitter:title"/>
        <meta content="/expa_og.png" property="twitter:image"/>
      </Head>

      <a href={`https://expa.com/?ref=${host}`}>
        <img src="/expa.png" width="130" height="28" />
      </a>

      <div className="content">
        <h1>{host}</h1>
        <p className="mono">
          Coming soon from <a href={`https://expa.com/?ref=${host}`}>Expa</a>
        </p>
      </div>

      <div className="footer">
        <hr />
        <span><small>&copy;</small> Expa</span>
        <a href={`mailto:hello@expa.com?subject=${host}&body=%0D%0A%0D%0A--%0D%0Acontact%20from%20${host}`}>Contact us</a>
      </div>

    </main>
  )
}
