import Image from 'next/image';
import Page from '../components/Page'

import Content from "../components/Content";
import contentStyles from "../styles/component/Content.module.scss";

import jamJarImage from "../public/logo/logo_solo.svg";

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
        <div className={`${contentStyles.section} ${contentStyles.small}`}>
          <h2>Our Story</h2>
          <p>In late summer of 2022, a group of friends decided to team up together to create awesome games for others to play - that group of friends being us!</p>
          <br/>
          <a href="/about" className='button accent'>Learn more</a>
        </div>
        <Image src={jamJarImage} width={128} height={128} />
      </Content>
    </Page>
  )
}
