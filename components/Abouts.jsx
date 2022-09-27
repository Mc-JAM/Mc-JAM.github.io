import styles from "../styles/component/Abouts.module.scss"
import Image from "next/image"

export default function Abouts(props) {
    return (
        <div className={styles.container}>
            <Image src={props.i} alt={props.a} width={90} height={90}/>
            <p>{props.desc}</p>
        </div>
    )
}