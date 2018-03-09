import React from 'react';
import Logo from './logo';
import Cuenta from './cuenta';
import Modulo from './modulo';
import Usuario from './usuario';
import Notificaciones from './notificaciones'
import './Header.css'

function Header(props){
    return(
        <header>
            <nav className="navbar navbar-light bg-light fixed-top row">
                <Logo />
                <Cuenta cuenta={props.homeHeaderData.cuentaPublica} /> 
                <Modulo modulo={props.homeHeaderData.modulo} />
                <Notificaciones notificaciones={props.homeHeaderData.notificaciones} />
                <Usuario usuario={props.homeHeaderData.usuario} />
            </nav>
        </header>

    )
} 

export default Header;