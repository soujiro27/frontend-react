import React from 'react';

function Usuario(props){

    return (
        <div className="col-lg-4">
            <p>{props.usuario}</p>
        </div>
    )

}

export default Usuario;