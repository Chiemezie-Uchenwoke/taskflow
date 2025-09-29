const NavItem = ({linkName}) => {
    return (
        <a href={`#${linkName}`} className="capitalize text-black/60 hover:text-black">
            {linkName}
        </a>
    )
}

export default NavItem;