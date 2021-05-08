import Head from 'next/head'
import IndividualCard from '../../../components/IndividualCard'

export default function Individual({ results }) {
    return (
        <div>
            <Head>
                <title>{results.result[0].insiderName}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {results.result.map((result) => (
                    <IndividualCard key={result._id} result={result} />))}
            </div >

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