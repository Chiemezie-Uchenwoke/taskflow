const SectionIntro = ({title, subtitle}) => {
    return (
        <div className="flex flex-col items-center gap-3">
            <h2 className="text-dark-bg capitalize font-bold text-xl sm:text-3xl lg:text-4xl tracking-wide text-center">
                {title}
            </h2>

            <p className="text-dark-bg/60 text-sm sm:text-base lg:text-xl text-center w-full max-w-[40rem]">
                {subtitle}
            </p>
        </div>
    )
}

export default SectionIntro;