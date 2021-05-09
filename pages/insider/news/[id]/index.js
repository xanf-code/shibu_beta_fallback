//https://seekingalpha.com/api/v3/symbols/WSFS/news?page[size]=10
import Head from 'next/head'

import Header from '../../../../components/Header'

export default function Individual({ results }) {
    console.log(results);
    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>News</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-black mb-2">
                <Header />
            </div>
            <main className="overflow-y-auto">
            </main>
        </div>
    )
}


export async function getServerSideProps(context) {
    const request = await fetch(`https://seekingalpha.com/api/v3/symbols/${context.params.id}/news?page[size]=5`)
        .then((res) => res.json());
    return {
        props: {
            results: request,
        }
    }
}