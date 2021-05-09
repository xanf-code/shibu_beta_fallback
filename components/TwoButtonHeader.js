function TwoButtonHeader({ Icon, title, selected }) {

    return (
        <div className={`flex  items-center space-x-1 pl-1 pr-1 pb-1
        cursor-pointer ${selected ? "text-gray-white" : "text-gray-500"}`} onClick={
                console.log("selected")
            }>
            <Icon className="h-6" />
            <p className="self-center">{title}</p>
        </div >
    )
}

export default TwoButtonHeader

