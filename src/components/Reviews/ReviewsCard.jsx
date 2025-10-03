import { FaStar } from "react-icons/fa";

const ReviewsCard = ({clientName, role, imgUrl, imgAlt, review, rating}) => {
    return (
        <div className="flex flex-col gap-4 border border-black/10 py-8 px-4 lg:px-6 rounded-2xl bg-pri-blue/2">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden whitespace-nowrap shrink-0">
                    <img 
                        src={imgUrl} 
                        alt={imgAlt} 
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <h3 className="font-bold capitalize">
                        {clientName}
                    </h3>

                    <p className="text-dark-bg/60 text-sm">
                        {role}
                    </p>
                </div>
            </div>

            <p className="text-dark-bg/70 italic">
                "{review}"
            </p>

            <p className="flex items-center gap-0.5 text-gold">
                {Array.from({ length: rating }, (_, i) => (
                    <FaStar key={i} />
                ))}
            </p>
        </div>
    )
}

export default ReviewsCard;