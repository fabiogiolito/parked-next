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
        <meta name="description" content="Coming soon from Expa" />
        <link href="/favicon.png" rel="shortcut icon" type="image/x-icon"/>
        <link href="/expa-touch.png" rel="apple-touch-icon"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta content={host} property="og:title"/>
        <meta content="Coming soon from Expa" property="og:description"/>
        <meta content="/expa_og.png" property="og:image"/>
        <meta content={host} property="twitter:title"/>
        <meta content="Coming soon from Expa" property="twitter:description"/>
        <meta content="/expa_og.png" property="twitter:image"/>

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-40576422-1"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'UA-40576422-1', {
                'anonymize_ip': false
              });
            `,
          }}
        />
      </Head>

      <header>
        <a href={`https://expa.com/?ref=${host}`}>
          <img src="/expa.png" width="100" height="22" />
        </a>
      </header>

      <article>
        <h1>{host}</h1>
        <p className="mono">
          Coming soon from <a href={`https://expa.com/?ref=${host}`}>Expa</a>
        </p>
      </article>

      <footer>
        <hr />
        <span><small>&copy;</small> Expa</span>
        <a href={`mailto:hello@expa.com?subject=${host}&body=%0D%0A%0D%0A--%0D%0Acontact%20from%20${host}`}>Contact us</a>
      </footer>

    </main>
  )
}
