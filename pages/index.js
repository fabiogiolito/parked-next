import Head from 'next/head'
import styles from '../styles/Home.module.css'

export const config = {
  unstable_runtimeJS: false
};

export async function getServerSideProps(context) {
  return {
    props: { host: context.req.headers.host }
  }
}

export default function Home({host}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to {host}!
        </h1>
      </main>

    </div>
  )
}
