import Logo from "../Logo/Logo";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import footerData from "../../data/footerData";
import FooterItems from "../FooterItems/FooterItems";

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
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white-shade/60 cursor-pointer hover:text-pri-blue duration-200"> <FaTwitter /> </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white-shade/60 cursor-pointer hover:text-pri-blue duration-200"> <FaLinkedin /> </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white-shade/60 cursor-pointer hover:text-pri-blue duration-200"> <FaFacebook /> </a>
                        </div>
                    </div>

                    {
                        footerData.map(d => {
                            return (
                                <FooterItems 
                                    key={d.id}
                                    {...d}
                                />
                            );
                        })
                    }
                    
                </div>

                <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-3  w-full mt-4 py-8 border-t border-white-shade/20">
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