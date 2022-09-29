import styles from '../styles/pages/Home.module.scss'
import Us from '../components/Us'
import Page from '../components/Page'
import { Component } from 'react'

export default function Home() {
  return (
    <Page page="index" title="Home">
      <header>
        <div className={styles.hero}>
          <h1>The Team With A Dream</h1>
          <p>We are McJAM</p>
        </div>
      </header>

        <div className={styles.homeContainer}>
          <h1>Who are we?</h1>

          <div className={styles.usContainer}>
            <Us i='/img/justjjsimplified.png' a='JustJJ' shortDesc='The Mc of McJAM, heralding a record of 5 games, JustJJ!'/>
            <Us i='/img/jay.jpeg' a='Jayy' shortDesc='The J of McJAM, a man who loves 3d modelling, Jayy!'/>
            <Us i='/img/aaronsongaming.jpg' a='Aaronsongaming' shortDesc='The A of McJAM, coming in with 1000 subscribers on Youtube, Aaronsongaming!'/>
            <Us i='/img/speedberg.png' a='Speedberg' shortDesc='The M of McJAM, a master of the backend, Speedberg!'/>
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
    </Page>
  )
}
