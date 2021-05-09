import Head from 'next/head'
import IndividualCard from '../../../../components/IndividualCard'
import Header from '../../../../components/Header'

export default function Individual({ results }) {
    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>{results.result[0].insiderName}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-black mb-2">
                <Header />
            </div>
            <main className="overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {results.result.map((result) => (
                        <IndividualCard key={result._id} result={result} />))}
                </div>
            </main>
        </div>
    )
}

const defaultEndPoint = 'https://insidershibu.herokuapp.com/scrapedata/getInsiderData';

export async function getServerSideProps(context) {
    const request = await fetch(`${defaultEndPoint}/${context.params.id}`)
        .then((res) => res.json());
    return {
        props: {
            results: request,
        }
    }
}