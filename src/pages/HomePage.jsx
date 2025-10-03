import HeaderLg from "../components/Header/HeaderLg";
import HeaderSm from "../components/Header/HeaderSm";
import Hero from "../components/Hero/Hero";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import Pricing from "../components/Pricing/Pricing";
import ReviewsSection from "../components/Reviews/Reviews";

const HomePage = () => {
    return (
        <>
            <HeaderLg />
            <HeaderSm />
            <Hero />
            <FeaturesSection />
            <Pricing />
            <ReviewsSection />
        </>
    )
}

export default HomePage;