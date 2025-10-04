import HeaderLg from "../components/Header/HeaderLg";
import HeaderSm from "../components/Header/HeaderSm";
import Hero from "../components/Hero/Hero";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import Pricing from "../components/Pricing/Pricing";
import ReviewsSection from "../components/Reviews/Reviews";
import Faq from "../components/Faq/Faq";
import CtaJoin from "../components/CtaJoin/CtaJoin";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
    return (
        <>
            <HeaderLg />
            <HeaderSm />
            <Hero />
            <FeaturesSection />
            <Pricing />
            <ReviewsSection />
            <Faq />
            <CtaJoin />
            <Footer />
        </>
    )
}

export default HomePage;