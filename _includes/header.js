import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const handleClick = e => {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    return <header>
        <div className="topnav" id="myTopnav">
            <Link href='/'><a className="active">NextJS Movies</a></Link>
            <Link href='/posts'><a>Films</a></Link>
            <Link href='/contacts'><a>Contacts</a></Link>
            <Link href='/legalmentions'><a>Mentions Légales</a></Link>
            <Link href=''>
                <a className="icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </Link>
         </div>
    </header>
}


