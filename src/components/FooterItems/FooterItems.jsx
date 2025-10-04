import FooterHeading from "../FooterHeading/FooterHeading";
import { Link } from "react-router";

const FooterItems = ({heading, linkText}) => {
    return (
        <div className="flex flex-col gap-4">
            <FooterHeading text={`${heading}`} />

            <ul className="flex flex-col gap-2">
                {
                    linkText.map((t) => {
                        return (
                            <li className="" key={t.text}>
                                {
                                    t.isComponent ? 
                                    <Link to={`${t.path}`} className="text-white-shade/50 capitalize hover:text-white-shade/90 duration-200"> {t.text} </Link> 
                                    :
                                    <a href={`${t.path}`} className="text-white-shade/50 capitalize hover:text-white-shade/90 duration-200"> {t.text} </a>
                                }
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default FooterItems;