import Link from 'next/link';
import HeaderItem from "../components/HeaderItem"
import { HomeIcon, DownloadIcon } from "@heroicons/react/outline"

function Header() {
    return (
        <header className="flex flex-row sm:flex-row m-5 justify-between
        items-center">
            <Link href="/">
                <a>
                    <h1 className="text-xl font-bold cursor-pointer">
                        Insider&nbsp;
                        <span className="text-purple-600">
                            Shibu🐕🚀🚀
                        </span>
                    </h1>
                </a>
            </Link>
            <div className="flex flex-row">
                <Link href="/">
                    <a>
                        <HeaderItem Icon={HomeIcon} />
                    </a>
                </Link>
                <Link href="/download">
                    <a>
                        <HeaderItem Icon={DownloadIcon} />
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header