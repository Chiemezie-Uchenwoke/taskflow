import { IoIosArrowDown } from "react-icons/io";

const FaqCard = ({question, answer, isOpen, onClick}) => {
    return (
        <div 
            className="w-full max-w-[45rem] border border-black/10 py-6 px-4 lg:px-6 bg-white-shade rounded-2xl cursor-pointer flex flex-col gap-2"
            onClick={onClick}
        >
            <div className="flex justify-between items-center w-full">
                <h3 className="font-semibold select-none">
                    {question}
                </h3>

                <span className={`text-xl select-none transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <IoIosArrowDown />
                </span>
            </div>

            {
                isOpen && 
                <div className="select-none text-dark-bg/70 text-sm lg:text-base">
                    {answer}
                </div>
            }
        </div>
    )
}

export default FaqCard;