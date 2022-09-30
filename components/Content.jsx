import style from '../styles/component/Content.module.scss'

export default function Footer(props) {
    return (
        <div className={style.content}>
            { props.children }
        </div>
    )
}