import Image from 'next/image';
import Page from '../components/Page'

import Content from "../components/Content";
import contentStyles from "../styles/component/Content.module.scss";

import jamJarImage from "../public/logo/logo_solo.svg";
import gamepadImage from "../public/img/gamepad.svg";

//TODO - add black outline to gamepad
export default function Home() {
  return (
    <Page page="index" title="Home">
      <header>
        <div className="hero">
          <h1>Welcome to McJAM</h1>
          <p>We make games</p>
        </div>
      </header>
      <Content>
        <div className={contentStyles.inline}>
          <div className={`${contentStyles.section} ${contentStyles.small} ${contentStyles.left}`}>
            <h2>Our Story</h2>
            <p>In late summer of 2022, a group of friends decided to team up together to create awesome games for others to play - that group of friends being us!</p>
            <br/>
            <a href="/about" className='button accent'>Learn more</a>
          </div>
          <Image src={jamJarImage} width={128} height={128} />
        </div>
        <div className={contentStyles.inline}>
          <div className={`${contentStyles.section} ${contentStyles.small} ${contentStyles.left}`}>
            <h2>We ❤ Games</h2>
            <p>We are all passionate about playing, making, and sharing games. Our goal is to make games that we can all enjoy, inspiring others in the process.</p>
            <br/>
            <a href="/games" className='button accent'>See more</a>
          </div>
          <Image src={gamepadImage} width={128} height={128} />
        </div>
      </Content>
    </Page>
  )
}
