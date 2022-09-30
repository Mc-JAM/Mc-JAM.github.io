import style from '../styles/component/Badge.module.scss';

import { Itchdotio, Github } from '@icons-pack/react-simple-icons';

export const ICON =
{
    itchdotio: 0,
    github: 1,
};

export function Badge(props) {
    return (
        <em className={style.badge} style={{background: props.background, color: props.color}}>
            {GetIcon(props.icon)}
            <span> {props.text} </span>
        </em>
    )
}

function GetIcon(type) {
    switch (type) {
        case ICON.itchdotio:
            return <Itchdotio/>
            break;
        case ICON.github:
            return <Github/>
            break;
    }
}
