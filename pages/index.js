import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import Us from '../components/Us'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mc-JAM: Home</title>
        <meta name="description" content="A new small team of game developers" />
        <link rel="icon" href="/img/McJam.jpg" />
      </Head>

      <main className={styles.mainContainer}>
        <Navbar />
        <div className={styles.otherContainer}>

          <div className={styles.sloganContainer}>
            <h1>The Team With A Dream</h1>
            <p>We are Mc-JAM</p>
          </div>

          <div className={styles.homeContainer}>
            <h1>Who are we?</h1>

            <div className={styles.usContainer}>
              <Us i='/img/justjjsimplified.png' a='JustJJ' shortDesc='The Mc of Mc-JAM, heralding a record of 5 games, JustJJ!'/>
              <Us i='/img/jay.jpeg' a='Jayy' shortDesc='The J of Mc-JAM, a man who loves 3d modelling, Jayy!'/>
              <Us i='/img/Aaronsongaming.png' a='Aaronsongaming' shortDesc='The A of Mc-JAM, coming in with 1000 subscribers on Youtube, Aaronsongaming!'/>
              <Us i='/img/speedberg.png' a='Speedberg' shortDesc='The M of Mc-JAM, a master of the backend, Speedberg!'/>
            </div>

            <h1>Our plans</h1>
            <p>We plan to make 3 games over the course of 3 game jams. We will finish off with our grand finale, Game Off 2022 by Github.</p>
            <h1>Jams</h1>
            <div className={styles.jamContainer}>
              <Us i='/img/coffeeJam.jpg' a='coffeeJam' shortDesc='Starting first is CoffeeJam 2022 on October 1.' />
              <Us i='/img/mashupJam.png' a='MashupJam' shortDesc='Starting next is MashupJam 2022 on October 14.' />
              <Us i='/img/gameOff.png' a='GameOff' shortDesc='Finally is Game Off 2022 on November 1.' />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}
