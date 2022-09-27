import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "../styles/pages/Contacts.module.scss"
import Contact from "../components/Contact"

export default function Contacts() {
    return (
        <div>
            <Head>
                <title>Mc-JAM: Contacts</title>
            </Head>
            <main>
                <div className={styles.mainContainer}>
                    <Navbar />
                    <div className={styles.contactsContainer}>
                        <h1>JustJJ</h1>
                        <Contact i="/img/justjjsimplified.png" a="JJ" g='https://github.com/TheDiamonds559' it='https://thediamonds559.itch.io'/>
                        <h1>Jayy</h1>
                        <Contact i="/img/jay.jpeg" a="Jayy" g='https://github.com/Jayy518'  it='https://jayy518.itch.io/'/>
                        <h1>Aaronsongaming</h1>
                        <Contact i="/img/aaronsongaming.png" a="Aaronsongaming" g='https://github.com/AaronsonGaming' it='https://speedberg.itch.io/'/>
                        <h1>Speedberg</h1>
                        <Contact i="/img/speedberg.png" a="Speedberg" g='https://github.com/Speedberg' it='https://speedberg.itch.io/'/>
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    )
}