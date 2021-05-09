import InsiderCard from '../components/InsiderCard'
import Link from 'next/link'
import Footer from '../components/Footer'

function Results({ results }) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {results.result.map((result) => (
                    <Link key={result._id} href="/insider/activity/[id]" as={`/insider/activity/${result.insiderName}`}>
                        <a>
                            <InsiderCard key={result._id} result={result} />
                        </a>
                    </Link>
                ))
                }
            </div >
            <div className="bg-black">
                <Footer />
            </div>
        </div>
    )
}

export default Results