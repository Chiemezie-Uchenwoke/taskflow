import SectionIntro from "../SectionIntro/SectionIntro";
import faqData from "../../data/faqData";
import FaqCard from "./FaqCard";
import { useState } from "react";

const Faq = () => {
    const [openFaqId, setOpenFaqId] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaqId(prevId => (prevId === id ? null : id));
    };

    return (
        <section className="mt-18 bg-pri-blue/2 py-16" id="faq">
            <div className="container flex flex-col items-center gap-10 lg:gap-12">
                <SectionIntro 
                    title="Frequently Asked Questions"
                    subtitle="Everything you need to know about TaskFlow"
                />

                <div className="flex flex-col gap-4 w-full items-center">
                    {
                        faqData.map(f => {
                            return (
                                <FaqCard 
                                    key={f.id}
                                    {...f}
                                    isOpen={openFaqId === f.id}
                                    onClick={() => toggleFaq(f.id)}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Faq;