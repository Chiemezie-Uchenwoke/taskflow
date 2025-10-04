import { FaListCheck } from "react-icons/fa6";

const Logo = ({style}) => {
    return (
        <div className="flex items-center gap-3">
            <FaListCheck className="text-pri-blue text-2xl" />
            <p className={`font-bold text-xl ${style}`}>TaskFlow</p>
         </div>
    )
}

export default Logo;