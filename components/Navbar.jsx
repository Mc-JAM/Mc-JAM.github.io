import React from "react";
import Link from "next/link";
import style from '../styles/component/Navbar.module.scss'

export default class Navbar extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={style.mainContainer}>
                <h1><Link href='/'><a>Mc-JAM</a></Link></h1>
                <ul className={style.mainLinks}>
                    <li><Link href='/about'><a>About Us</a></Link></li>
                    <li><Link href='/contacts'><a>Contacts</a></Link></li>
                </ul>
            </nav>
        )
    }
}