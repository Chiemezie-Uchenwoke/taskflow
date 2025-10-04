

const FooterItem = () => {
    return (
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
    )
}

export default FooterItem;