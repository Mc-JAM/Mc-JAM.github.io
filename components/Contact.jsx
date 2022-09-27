import styles from "../styles/component/Contact.module.scss"
import Image from "next/image"

export default function Contact(props) {
    return (
        <div className={styles.mainContainer}>
            <Image src={props.i} alt={props.a} width={80} height={80}/>
            <a target='_blank' rel="noreferrer" href={props.g}><div className={styles.gitCon}></div></a>
            <a target='_blank' rel="noreferrer" href={props.it}><div className={styles.itcCon}></div></a>
        </div>
    )
}