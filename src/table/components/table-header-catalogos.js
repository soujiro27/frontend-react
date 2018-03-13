import React from 'react';
import './table-header-catalogos.css';

const TableHeaderCatalogo = (props) => {

    let link = `/SIA/juridico/` + props.module + '/New';

    
    return (<div className="table-header-catalogos">
        <h3 className="col-lg-3">
            <i className="fas fa-file-alt"></i>
            Lista de Registros: {props.pageNumber}
        </h3>
        <a  href={link} className="col-lg-2 offset-lg-7 btn btn-primary btn-sm">Nuevo Registro</a>
    </div>)
}

export default TableHeaderCatalogo