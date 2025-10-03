const CtaJoin = () => {
    return (
        <div className="bg-pri-blue py-16">
            <div className="container flex flex-col items-center gap-5">
                <h2 className="text-white-shade text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                    Ready to streamline your workflow?
                </h2>

                <p className="text-blue-100 text-center lg:text-xl">
                    Join thousands of teams who trust TaskFlow to manage their projects efficiently.
                </p>

                <div className="flex flex-col gap-2 w-full sm:flex-row sm:justify-center">
                    <button className="capitalize bg-white-shade text-pri-blue py-2.5 lg:py-4 my-3 px-8 cursor-pointer border-2 border-white-shade hover:brightness-95 duration-200 rounded-lg self-stretch font-semibold lg:text-lg shadow-xl">
                        start free trial
                    </button>

                    <button className="capitalize text-white-shade py-2.5 lg:py-4 my-3 px-8 cursor-pointer border-2 border-white-shade hover:bg-white-shade hover:text-pri-blue duration-200 rounded-lg self-stretch font-semibold lg:text-lg">
                        Schedule Demo
                    </button>
                </div>

                <p className="text-blue-100 text-sm relative -top-1.5">
                    No credit card required • 14-day free trial • Cancel anytime
                </p>
            </div>
        </div>
    )
}

export default CtaJoin;