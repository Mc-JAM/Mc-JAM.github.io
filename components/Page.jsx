import style from '../styles/component/Page.module.scss';
import Head from "next/head";
import { Fragment } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Page(props) {
    let title = (props.title ?? props.page) + " | McJAM";
    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/logo/logo_solo.svg" />
                <title>{ title }</title>
                <meta property="og:title" content={ props.title ?? props.page }/>
                <meta property="og:site_name" content="McJAM | mc-jam.github.io" />

                <meta name="description" content="A new small team of game developers" />
                
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <main className={style.page}>
                { <Navbar/> }
                { props.children }
            </main>
            <Footer/>
        </Fragment>
    );
}