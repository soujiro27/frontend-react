import React from 'react';
import './submenu.css';

function Menuelement(props) {

   

    return (
    <li>
        <a href={props.liga}>
            <i className={props.icono}></i>
            <p>{props.nombre.toUpperCase()}</p>
        </a>
    </li>)

}

export default Menuelement