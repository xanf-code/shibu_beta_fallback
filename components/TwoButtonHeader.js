function TwoButtonHeader({ Icon, title }) {
    return (
        <div className="cursor-pointer flex flex-row box-border
        mx-1 bg-gray-800 rounded-md p-2 hover:bg-blue-800 space-x-0.5">
            <Icon className="h-6" />
            <p className="self-center">{title}</p>
        </div>
    )
}

export default TwoButtonHeader

