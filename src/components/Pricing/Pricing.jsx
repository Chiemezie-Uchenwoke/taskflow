import SectionIntro from "../SectionIntro/SectionIntro";
import PricingCard from "./PricingCard";
import pricingData from "../../data/pricingData";
import { useState } from "react";

const Pricing = () => {
     const [isYearly, setIsYearly] = useState(false);
    return (
        <section className="bg-pri-blue/2 mt-18 py-16">
            <div className="container flex flex-col gap-10 lg:gap-12">
                <div>
                    <SectionIntro 
                        title="Simple, transparent pricing"
                        subtitle="Choose the plan that's right for your team"
                    />

                    <div className="flex items-center justify-center gap-3 mt-10">
                        <span className={!isYearly ? "font-bold text-black" : "text-gray-500"}>
                            Monthly
                        </span>

                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isYearly}
                                onChange={() => setIsYearly(!isYearly)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-pri-blue after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                        </label>

                        <span className={isYearly ? "font-bold text-black" : "text-gray-500"}>
                            Yearly
                        </span>

                        {isYearly && (
                            <span className="ml-2 px-2 py-1 text-sm rounded-full bg-green-500 text-white">
                                Save 20%
                            </span>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                    {
                        pricingData.map(p => {
                            return (
                                <PricingCard 
                                    key={p.id}
                                    {...p}
                                    isYearly={isYearly}
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