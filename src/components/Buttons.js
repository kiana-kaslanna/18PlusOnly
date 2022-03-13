import { useState } from 'react';
import './Buttons.css';

export default function Buttons(props) {

    const onClick = props.onClick;
    const [isActive, setIsActive] = useState(false)

    const click = () => {
        setIsActive(pre => !pre);
        onClick();
    }
    return (
        <div
            className={`button ${isActive ? 'active' : ''}`}
            onClick={click}>
            {props.children}
        </div>
    );
}