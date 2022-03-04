import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import Content from '../components/Content'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Sponsored Ads</title>
      </Head>
      <Content />
    </Layout>
  )
}

export default Home
