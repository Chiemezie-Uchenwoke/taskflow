import { Link } from "react-router";
import navLinks from "../../data/navLinks";
import NavItem from "../NavItem/NavItem";
import Logo from "../Logo/Logo";

const HeaderLg = () => {
    return (
        <header className="h-16 w-full border-b border-black/10 sticky top-0 left-0 hidden lg:flex items-center bg-white-shade z-50">

            <div className="container flex justify-between items-center">
                <Logo 
                    style="text-dark-bg"
                />

                <nav className="flex gap-8">
                    {
                        navLinks.map((l) => {
                            return (
                                <NavItem 
                                    key={l.id}
                                    {...l}
                                />
                            )
                        })
                    }
                </nav>

                <div className="flex items-center gap-4">
                    <
                        Link to="#"
                        className="capitalize text-black/60 hover:text-black"
                    >
                        sign in
                    </Link>

                    <Link 
                        to="#"
                        className="bg-pri-blue text-white-shade py-2 px-5 rounded-lg capitalize hover:bg-blue-700 duration-200"
                    >
                        start free trial
                    </Link>
                </div>
            </div>

        </header>
    )
}

export default HeaderLg;