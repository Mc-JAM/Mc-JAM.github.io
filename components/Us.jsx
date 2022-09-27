import React from "react";
import styles from "../styles/component/Us.module.scss"

export default class Us extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hover: ""
        };
    }

    showDesc = () => {
        this.setState({
            hover: this.props.shortDesc
        });
    }

    hideDesc = () => {
        this.setState({
            hover: ""
        });
    }

    render() {
        return (
            <div onMouseEnter={this.showDesc} onMouseLeave={this.hideDesc} className={styles.mainContainer}>
                <img src={this.props.i} alt={this.props.a} />
                <p className={styles.desc}>{this.state.hover}</p>
            </div>
        )
    }
}