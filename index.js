import Head from 'next/head'
import GuptonSolutions from '../components/GuptonSolutions'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gupton Solutions</title>
        <meta name="description" content="Handyman, junk removal, landscaping, and pressure washing in Wake Forest, NC" />
      </Head>
      <GuptonSolutions />
    </>
  )
}
