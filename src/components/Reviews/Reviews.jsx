import SectionIntro from "../SectionIntro/SectionIntro";
import ReviewsCard from "./ReviewsCard";
import reviewsData from "../../data/reviewsData";

const ReviewsSection = () => {
    return (
        <section className="container mt-18 flex flex-col gap-10 lg:gap-12">
            <SectionIntro 
                title="Loved by teams worldwide"
                subtitle="See what our customers have to say about TaskFlow"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                {
                    reviewsData.map(r => {
                        return (
                            <ReviewsCard 
                                key={r.id}
                                {...r}
                            />
                        );
                    })
                }
            </div>
        </section>
    )
}

export default ReviewsSection;