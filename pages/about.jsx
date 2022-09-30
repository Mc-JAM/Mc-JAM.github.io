import Page from "../components/Page";
import Content from "../components/Content";

import contentStyles from "../styles/component/Content.module.scss"
import style from "../styles/pages/About.module.scss";
import Avatar from "../components/Avatar";

import jjAvatar from '../public/img/avatars/jj.png';
import jayAvatar from '../public/img/avatars/jay.jpeg';
import aaronAvatar from '../public/img/avatars/aaron.jpg';
import matthewAvatar from '../public/img/avatars/matthew.png';

export default function About() {
    return (
        <Page page="about" title="About">
            <header>
                <div>
                    <h1>About Us</h1>
                    <p>Our Story</p>
                </div>
            </header>
            <Content>
                <div className={`${contentStyles.section} ${contentStyles.small}`}>
                    <h2>About Us</h2>
                    <p>McJAM is a small group of game developers who share a burning passion in making games. Founded in 2022, we are realtively new to the scene - however, our desire to learn and create amazing content fuels us as we aim to make something which everyone can enjoy.</p>
                </div>

                <h2>Team Members</h2>
                <div className={style.members}>
                    <Avatar name="JJ" title="Programmer" source={jjAvatar} links={{
                        itchdotio: "https://thediamonds559.itch.io",
                        github:"https://github.com/TheDiamonds559"
                    }}/>
                    <Avatar name="Jay" title="3D Modeller" source={jayAvatar} links={{
                        itchdotio: "https://jayy518.itch.io/",
                        github:"https://github.com/Jayy518"
                    }}/>
                    <Avatar name="Aaron" title="Programmer" source={aaronAvatar} links={{
                        itchdotio: "https://aaronsongaming.itch.io/",
                        github:"https://github.com/AaronsonGaming"
                    }}/>
                    <Avatar name="Matthew" title="Programmer, 2D Artist" source={matthewAvatar} links={{
                        itchdotio: "https://speedberg.itch.io/",
                        github:"https://github.com/Speedberg"
                    }}/>
                </div>
            </Content>
        </Page>
    )
}