import Link from "next/link";
import Image from "next/image";
import style from '../styles/component/Navbar.module.scss'

import logo from '../public/logo/logo_full.svg';

export default function Navbar(props) {
    return (
        //TODO - navbar with icon in center above copyright
        <nav className={style.navbar}>
            <h1><Link href='/'><a><Image src={logo}/></a></Link></h1>
            <ul>
                <li><Link href='/games'><a>Games</a></Link></li>
                <li><Link href='/about'><a>About</a></Link></li>
            </ul>
        </nav>
    )
}