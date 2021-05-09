import Link from 'next/link';
import HeaderItem from "../components/HeaderItem"
import { HomeIcon, DownloadIcon } from "@heroicons/react/outline"

function Header() {
    return (
        <header className="flex flex-row sm:flex-row m-5 justify-between
        items-center">
            <Link href="/">
                <h1 className="text-xl font-bold cursor-pointer">
                    Insider&nbsp;
                    <span className="text-purple-600">
                        Shibu🐕🚀🚀
                    </span>
                </h1>
            </Link>
            <div className="flex flex-row">
                <Link href="/">
                    <HeaderItem Icon={HomeIcon} />
                </Link>
                <Link href="/download">
                    <HeaderItem Icon={DownloadIcon} />
                </Link>
            </div>
        </header>
    )
}

export default Header