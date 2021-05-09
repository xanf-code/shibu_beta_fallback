import Head from 'next/head'
import Results from '../components/Results'
import Header from '../components/Header'


export default function Home({ data }) {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Insider Shibu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black mb-2">
        <Header />
      </div>
      {/* Body */}
      <main className="overflow-y-auto">
        <Results results={data} />
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const request = await fetch('https://insidershibu.herokuapp.com/scrapedata/getInsiderData?limit=30');

  const data = await request.json();
  return {
    props: {
      data,
    }
  }
}