import React from 'react';


const PaginationItem = (props) => {
    
    //let link = `/SIA/juridico/SubTiposDocumentos/Registers/${props.number}`
    let link = '#!'
    return(
    <li className="page-item">
        <a className="page-link" href={link} >{props.number}</a>
    </li>
    )
}

export default PaginationItem