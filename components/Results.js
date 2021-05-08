import InsiderCard from '../components/InsiderCard'
import Link from 'next/link'
import Footer from '../components/Footer'

function Results({ results }) {
    return (
        <div>
            <div className="md:grid-cols-3 lg:inline-grid grid-cols-4 gap-x-4 lg:pl-1.5 lg:pr-1.5">
                {results.result.map((result) => (
                    <Link key={result._id} href="/insider/[id]" as={`/insider/${result.insiderName}`}>
                        <a>
                            <InsiderCard key={result._id} result={result} />
                        </a>
                    </Link>
                ))
                }
            </div >
            <div className="bg-gray-900">
                <Footer />
            </div>
        </div>
    )
}

export default Results