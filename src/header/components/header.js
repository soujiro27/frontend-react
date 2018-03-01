import React from 'react';
import Logo from './logo';
import Cuenta from './cuenta';
import Modulo from './modulo';
import Usuario from './usuario';

function Header(props){
    return(
        <header>
            <Logo />
            <Cuenta cuenta={props.homeHeaderData.cuentaPublica} /> 
            <Modulo modulo={props.homeHeaderData.modulo} />
            <Usuario usuario={props.homeHeaderData.usuario} />
        </header>

    )
} 

export default Header;