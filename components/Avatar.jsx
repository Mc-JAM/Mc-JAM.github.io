import style from '../styles/component/Avatar.module.scss';
import Image from 'next/image';
import { Badge, ICON } from './Badge';

export default function Avatar(props) {
    return (
        <div className={style.avatar}>
            <Image src={props.source} alt={props.name} width={256} height={256} />
            <h3>{props.name}</h3>
            <p>{props.title}</p>
            <ul>
                <li><a href={props.links.itchdotio}><Badge text="itch.io" icon={ICON.itchdotio} background="#e65555" color="White" /></a></li>
                <li><a href={props.links.github}><Badge text="Github" icon={ICON.github} background="#282f38" color="White" /></a></li>
            </ul>
        </div>
    )
}