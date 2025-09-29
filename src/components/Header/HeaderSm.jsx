import { useState } from "react";
import { FaListCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import navLinks from "../../data/navLinks";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router";

const HeaderSm = () => {
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    return (
        <header className="h-16 w-full border-b border-black/10 sticky top-0 left-0 flex lg:hidden items-center bg-white-shade z-50">
            <div className="h-full w-full relative px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FaListCheck className="text-pri-blue text-xl" />
                    <p className="font-bold text-base">TaskFlow</p>
                </div>

                <div className="">
                    <button
                        className="p-1.5 rounded border border-black/25"
                        onClick={() => setIsMobileDropdownOpen(prev => !prev)}
                    >
                        {
                            isMobileDropdownOpen ? <IoMdClose className="text-lg" /> : <LuMenu className="text-lg" />
                        }
                    </button>

                    {
                        isMobileDropdownOpen &&
                        <ul className="absolute top-full left-0 h-[calc(100vh-4rem)] border-r border-black/20 w-full max-w-60 px-4 bg-white-shade shadow-xl flex flex-col justify-center items-center gap-4">
                            {
                                navLinks.map(l => {
                                    return (
                                        <li>
                                            <NavItem 
                                                key={l.id}
                                                {...l}
                                            />
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <a href="#" className="capitalize text-black/60 hover:text-black">Sign in</a>
                            </li>
                            
                            <Link
                                className="bg-pri-blue text-white-shade py-2 px-5 rounded-lg capitalize hover:bg-blue-700 duration-200 "
                            >
                                start free trial
                            </Link>
                        </ul>
                        }
                </div>
            </div>
        </header>
    )
}

export default HeaderSm;