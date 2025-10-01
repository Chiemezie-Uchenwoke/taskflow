import { Link } from "react-router";
import { IoIosCheckmark } from "react-icons/io";
import dashboardImage from "../../assets/business_dashboard.jpg";
import { FaCircle } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="w-full min-h-[calc(100vh-4rem)] ">
            <div className="container flex flex-col md:flex-row gap-8 py-12 lg:py-16">
                <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
                    <h1 className="capitalize font-extrabold text-3xl min-[450px]:text-4xl md:text-3xl lg:text-6xl">
                        Streamline Your <span className="text-pri-blue">Project</span> Management
                    </h1>

                    <p className="text-black/60 lg:text-xl">
                        TaskFlow helps teams organize, track, and deliver projects faster with intuitive workflows and powerful collaboration tools.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link 
                            className="py-2 lg:py-3 px-6 bg-pri-blue text-white-shade rounded-lg capitalize font-medium hover:bg-blue-700 duration-200 text-center lg:text-lg shadow-lg"
                            to="#"
                        >
                            start free trial
                        </Link>

                        <a 
                            href="#"
                            className="border-2 border-dark-bg/70 py-2 lg:py-3 px-6 text-dark-bg capitalize font-medium text-center rounded-lg lg:text-lg hover:border-pri-blue hover:text-pri-blue duration-200"
                        >watch demo</a>
                    </div>

                    <p className="flex gap-2 sm:gap-4 text-xs lg:text-sm">
                        <span className="flex items-center">
                            <IoIosCheckmark className="text-sec-green text-2xl" />
                            14-day free trial
                        </span>

                        <span className="flex items-center">
                            <IoIosCheckmark className="text-sec-green text-2xl" />
                            No credit card required
                        </span>
                    </p>
                </div>

                <div className="w-full md:w-1/2 relative">
                    <img 
                        src={dashboardImage} 
                        alt="Image of a user panel dashboard" 
                        className="rounded-lg shadow-xl"
                    />

                    <p className="hidden md:flex items-center gap-2 bg-white-shade p-3 shadow-xl absolute -left-4 -bottom-2 rounded-lg border border-black/10">
                        <FaCircle className="text-sec-green text-sm" />
                        12 tasks completed today
                    </p>
                </div> 
            </div>
        </section>
    )
}

export default Hero;