import Navbar from "../components/Navbar"
import Head from "next/head"
import Footer from "../components/Footer"
import styles from "../styles/pages/About.module.scss"
import Abouts from "../components/Abouts"

export default function About() {
    return(
        <div>
            <Head>
                <title>Mc-JAM: About</title>
            </Head>
            <main>
                <div className={styles.mainContainer}>
                    <Navbar />
                    <h1>What We Do</h1>
                    <p>We are a small group of 4 who share a burning passion in games. We fuel our work with this passion we harbour to make games we can enjoy.</p>
                    <h1>Our Roles</h1>
                    <Abouts i="/img/justjjsimplified.png" a="JJ" desc="JJ, Programmer" />
                    <Abouts i="/img/jay.jpeg" a="Jay" desc="Jay, Modeller/2d artist" />
                    <Abouts i="/img/Aaronsongaming.png" a="Aaron" desc="Aaron, Junior Programmer" />
                    <Abouts i="/img/speedberg.png" a="Matthew" desc="Matthew, Programmer/2d artist" />
                    <Footer />
                </div>
            </main>
        </div>
    )
}