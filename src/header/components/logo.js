import React from 'react';
import logo from './../../../images/Logotipo.png';
import './logo.css';

function Logo(props){
    return(
        <div className="col-lg-2 Logo">
            <a href="#!" id="CuentaPublica" >
                <img src={logo} />
            </a>
        </div>
    )
}

export default Logo;