import React from 'react';
import './table-container.css'

function TableContainer (props){

    return(
        <div className="table-container">
            {props.children}
        </div>
    )
}

export default TableContainer