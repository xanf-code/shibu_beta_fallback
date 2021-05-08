import Link from 'next/link';
import { HomeIcon, DownloadIcon, ChatIcon, LightningBoltIcon } from "@heroicons/react/outline"

function Footer() {
    return (
        <footer className="flex flex-row justify-between  h-16 items-center pl-2 pr-2">
            <div className="font-sans">
                @Follow on Twitter
            </div>
            <div>
                {/*  */}
                <div className="">
                    Star on Github
                </div>
            </div>
        </footer>
    )
}

export default Footer
