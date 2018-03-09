import React from 'react';
import './cuenta.css'

function Cuenta(props){
    return(
        <div className="col-lg-2 Cuenta">
           <p>
               <span>
                   <i className="fas fa-list"></i>
                </span>
                    {props.cuenta}
            </p>
        </div>
    )
}

export default Cuenta;