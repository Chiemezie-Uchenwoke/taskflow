import { IoMdCheckmark } from "react-icons/io";

const PricingCard = ({title, price, features, popular, cta, isYearly}) => {
    return (
        <div className={`${popular ? "border-2 border-pri-blue" : "border border-black/10"} relative bg-white-shade rounded-2xl flex flex-col gap-4 py-8 px-4 lg:px-6`}>
            <h4 className="font-bold capitalize text-lg lg:text-xl text-center tracking-wide">
                {title}
            </h4>

            {
                popular &&
                <span className="bg-pri-blue text-white-shade text-sm py-1 px-3 rounded-2xl absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                </span>
            }

            <p className="text-center">
                <span className="font-bold text-3xl lg:text-4xl">
                    {isYearly ? price.yearly : price.monthly}
                </span> {" "}

                / {isYearly ? "year" : "month"}
            </p>

            <ul className="flex flex-col gap-3">
                {
                    features.map((f, i) => {
                        return (
                            <li className="flex items-center gap-2 md:text-sm lg:text-base" key={i}>
                                <IoMdCheckmark className="text-sec-green" /> {f}
                            </li>
                        );
                    })
                }
            </ul>

            <button 
                className={`${popular ? "bg-pri-blue text-white-shade  hover:bg-blue-700" : "border-2 border-pri-blue text-pri-blue hover:bg-pri-blue hover:text-white-shade"} py-3 px-4 rounded-lg font-semibold cursor-pointer duration-200`}
            >
                {cta}
            </button>
        </div>
    )
}

export default PricingCard;