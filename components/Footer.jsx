import style from '../styles/component/Footer.module.scss'

export default function Footer(props) {
    return (
        <div className={style.footer}>
            <p>Copyright &copy; { new Date().getFullYear() } McJAM</p>
        </div>
    )
}