function HeaderItem({ Icon }) {
    return (
        <div className="flex flex-col items-center group cursor-pointer w-12 sm:w-20">
            <Icon className="h-6 mb-1 group-hover:animate-bounce" />
        </div>
    )
}

export default HeaderItem