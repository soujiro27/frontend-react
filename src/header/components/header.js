import React from 'react';
import Logo from './logo';
import Cuenta from './cuenta';
import Modulo from './modulo';
import Usuario from './usuario';
import './Header.css'

function Header(props){
    return(
        <header className="row">
            <Logo />
            <Cuenta cuenta={props.homeHeaderData.cuentaPublica} /> 
            <Modulo modulo={props.homeHeaderData.modulo} />
            <Usuario usuario={props.homeHeaderData.usuario} />
        </header>

    )
} 

export default Header;