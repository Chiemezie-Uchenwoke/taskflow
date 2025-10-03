import SectionIntro from "../SectionIntro/SectionIntro";
import featuresData from "../../data/featuresData";
import FeaturesCard from "./FeaturesCard";

const FeaturesSection = () => {
    return (
        <section className="mt-18" id="features">
            <div className="container flex flex-col gap-10 lg:gap-12">
                <SectionIntro 
                    title="Everything you need to stay organized"
                    subtitle="Powerful features designed to help your team collaborate better and deliver results faster."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-8">
                    {
                        featuresData.map(d => {
                            return (
                                <FeaturesCard 
                                    key={d.id}
                                    {...d}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;