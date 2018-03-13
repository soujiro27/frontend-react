import React, { Component } from 'react';

class TableRegisters extends Component{

    render(){
        
        return(
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Nombre</th>
                        <th>Estatus</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map((item) =>(
                            
                            <tr><td>{item.nombre}</td><td>{item.estatus}</td></tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}

export default TableRegisters