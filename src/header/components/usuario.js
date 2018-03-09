import React from 'react';
import './usuario.css';

function Usuario(props){

    return (
        <div className="col-lg-3 Usuario">
            <i className="fas fa-user"></i>
            <p>{props.usuario}</p>
            <i className="fas fa-caret-down"></i>
            
            <div className="col-lg-3 Usuario-menu">
                <ul>
                    <li>
                        <a href="#!">
                            <i className="fas fa-user"></i>
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Salir</span>
                        </a>
                    </li>
                </ul>
            </div> 
        </div>
    )

}

export default Usuario;