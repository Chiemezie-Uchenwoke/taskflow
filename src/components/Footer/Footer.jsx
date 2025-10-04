import Logo from "../Logo/Logo";
import { company, product, support } from "../../data/footerNavItem";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import FooterHeading from "../FooterHeading/FooterHeading";
import FooterNavItem from "../FooterNavItem/FooterNavItem";

const Footer = () => {
    return (
        <footer className="bg-dark-lite pt-18 w-full">
            <div className="container flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                        <Logo style="text-white-shade" />

                        <p className="text-white-shade/60 ">
                            Streamline your project management with powerful, intuitive tools designed for modern teams.
                        </p>

                        <div className="flex items-center gap-4">
                            <a className="text-white-shade/60 cursor-pointer hover:text-pri-blue duration-200"> <FaTwitter /> </a>
                            <a className="text-white-shade/60 cursor-pointer hover:text-pri-blue duration-200"> <FaLinkedin /> </a>
                            <a className="text-white-shade/60 cursor-pointer hover:text-pri-blue duration-200"> <FaFacebook /> </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <FooterHeading text="product" />

                        <ul className="flex flex-col gap-2">
                            {
                                product.map(p => {
                                    return (
                                        <FooterNavItem 
                                            key={p.id}
                                            {...p}
                                        />
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <FooterHeading text="company" />

                        <ul className="flex flex-col gap-2">
                            {
                                company.map(c => {
                                    return (
                                        <FooterNavItem 
                                            key={c.id}
                                            {...c}
                                        />
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <FooterHeading text="support" />

                        <ul className="flex flex-col gap-2">
                            {
                                support.map(s => {
                                    return (
                                        <FooterNavItem 
                                            key={s.id}
                                            {...s}
                                        />
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-3  w-full py-8 border-t border-white-shade/20">
                    <p className="text-white-shade/60 text-sm">© 2024 TaskFlow. All rights reserved.</p>

                    <p className="flex gap-4 text-sm">
                        <a href="#" className="text-white-shade/60 hover:text-white-shade/90 duration-200">Privacy Policy</a>
                        <a href="#" className="text-white-shade/60 hover:text-white-shade/90 duration-200">Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;