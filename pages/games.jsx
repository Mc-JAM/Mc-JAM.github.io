import Page from "../components/Page";

import Content from "../components/Content";
import contentStyles from "../styles/component/Content.module.scss";

export default function Games() {
    return (
        <Page page="games" title="Games">
            <header>
                <div className="hero">
                    <h1>Our Games</h1>
                    <p>The games we've made together</p>
                </div>
            </header>
            <Content>
                <div className={contentStyles.section}>
                    <h2>Coming soon!</h2>
                    <p>We've not made anything yet - but tune in next week to see what we've got up to!</p>
                </div>
            </Content>
        </Page>
    )
}