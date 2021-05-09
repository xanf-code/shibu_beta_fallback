import moment from 'moment'
import TickerBox from './TickerBox'
import { CurrencyDollarIcon, ChevronDownIcon, ChevronUpIcon, BriefcaseIcon, TrendingUpIcon, TrendingDownIcon } from "@heroicons/react/outline"
import Trade from './Trade'

function InsiderCard({ result }) {
    return (
        <div className="box-border h-32 px-2 py-2 bg-black rounded-md
        cursor-pointer mr-1.5 ml-1.5 mb-1.5 hover:animate-pulse">
            <div className="flex justify-between">
                <div className="flex justify-start">
                    <TickerBox text={result.ticker} />
                    <h1 className="truncate text-purple-800 max-w-md 
                    font-medium font-sans pl-1">
                        {result.companyName}
                    </h1>
                </div>
                <h1 className="text-gray-600 font-semibold font-sans truncate text-sm">
                    {moment.utc(result.date).local().startOf('seconds').fromNow()}
                </h1>
            </div>
            <div className="flex justify-between">
                <div>
                    <h1 className="truncate max-w-md font-bold font-sans pt-1 pl-1">
                        {result.insiderName}
                    </h1>
                    <p className="truncate font-sans text-purple-600 font-semibold pl-1 pb-1.5">
                        {result.insiderTitle}
                    </p>
                </div>
                <div className="pt-1">
                    <div className="flex">
                        <BriefcaseIcon className="h-4 self-center pr-1" color={result.tradeQuantity.includes("+")
                            ? "green" : "red"} />
                        <Trade text={result.tradeQuantity} Icon={result.tradeQuantity.includes("+")
                            ? ChevronUpIcon : ChevronDownIcon}
                            color={result.tradeQuantity.includes("+")
                                ? "green" : "red"} />
                    </div>
                    <div className="flex justify-end">
                        {result.tradeQuantity.includes("+") ? <TrendingUpIcon className="h-4 self-center pr-1" color="green" />
                            : <TrendingDownIcon className="h-4 self-center pr-1" color="red" />}
                        <Trade text={result.stockPercent} Icon={result.tradeQuantity.includes("+")
                            ? ChevronUpIcon : ChevronDownIcon}
                            color={result.tradeQuantity.includes("+")
                                ? "green" : "red"} />
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex">
                    <TickerBox text={result.tradeType} />
                    <h1 className="truncate text-white max-w-md 
                    font-medium font-sans pl-1.5">
                        {result.tradePrice}
                    </h1>
                </div>
                <div className="flex">
                    <CurrencyDollarIcon className="h-6 pr-0.5 hover:animate-spin"
                        color={result.value.includes('+')
                            ? "green" : "red"} />
                    <TickerBox text={result.value} />
                </div>
            </div>
        </div>
    )
}

export default InsiderCard