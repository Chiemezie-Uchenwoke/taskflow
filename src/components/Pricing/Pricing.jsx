import SectionIntro from "../SectionIntro/SectionIntro";
import PricingCard from "./PricingCard";
import pricingData from "../../data/pricingData";

const Pricing = () => {
    return (
        <section className="bg-pri-blue/2 mt-18 py-16">
            <div className="container flex flex-col gap-10 lg:gap-12">
                <div>
                    <SectionIntro 
                        title="Simple, transparent pricing"
                        subtitle="Choose the plan that's right for your team"
                    />

                    <div className="flex gap-3 items-center justify-center mt-7">
                        <p className="text-dark-bg/60">Monthly</p>
                        <div className="relative flex items-center w-12 h-6 bg-gray-200 border border-black/5 rounded-2xl cursor-pointer px-0.5">
                            <button className="w-5 h-5 rounded-full shadow-2xl bg-white  cursor-pointer"></button>
                        </div>
                        <p className="font-medium">Yearly</p>
                        <span className="bg-sec-green text-white-shade text-xs py-1 px-3 rounded-2xl">Save 20%</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                    {
                        pricingData.map(p => {
                            return (
                                <PricingCard 
                                    key={p.id}
                                    {...p}
                                /> 
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Pricing;