import React from 'react';
import logo from './../../../images/logo-top.png';

function Logo(props){
    return(
        <div className="col-lg-2">
            <img src={logo} />
        </div>
    )
}

export default Logo;