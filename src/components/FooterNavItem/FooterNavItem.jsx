import { Link } from "react-router";

const FooterNavItem = ({text, isComponent, path}) => {
    return (
        <li className="">
            {
                isComponent ? 
                <Link to={`${path}`} className="text-white-shade/50 capitalize hover:text-white-shade/90 duration-200"> {text} </Link> 
                :
                <a href={`${path}`} className="text-white-shade/50 capitalize hover:text-white-shade/90 duration-200"> {text} </a>
            }
        </li>
    )
}

export default FooterNavItem;