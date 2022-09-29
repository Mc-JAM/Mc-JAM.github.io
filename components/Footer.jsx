import style from '../styles/component/Footer.module.scss'

export default function Footer(props) {
    return (
        <div className={style.mainContainer}>
            <p>Copyright &copy; { new Date().getFullYear() } McJAM</p>
        </div>
    )
}