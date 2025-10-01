const FeaturesCard = ({icon: Icon, title, description, iconStyle}) => {
    return (
        <div className="border border-black/5 py-8 px-4 lg:px-6 flex flex-col gap-4 rounded-2xl bg-pri-blue/1 hover:shadow-lg transition-shadow">
            <span className={`${iconStyle} w-12 h-12 flex justify-center items-center text-xl lg:text-2xl rounded-lg`}>
                <Icon />
            </span>

            <h3 className="capitalize font-bold sm:text-lg lg:text-xl">
                {title}
            </h3>

            <p className="text-dark-bg/60">
                {description}
            </p>
        </div>
    )
}

export default FeaturesCard;