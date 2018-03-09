import React from 'react';
import './modulo.css';

function Modulo (props){

    return(
        <div className="col-lg-3 Modulo center">
            <h2>
                <i className="fa fa-desktop" aria-hidden="true"></i> 
                {props.modulo}
            </h2>
        </div>
    )

}

export default Modulo;