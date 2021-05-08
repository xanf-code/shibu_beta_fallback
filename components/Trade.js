function Trade({ Icon, text, color, textColor }) {
    return (
        <div className="flex justify-end">
            <p className="font-semibold pl-1 pr-1">{text}</p>
            <Icon className="h-4 self-center pr-1" color={color} />
        </div>
    )
}

export default Trade