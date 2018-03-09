import React, { Component } from 'react';
import axios from 'axios';
import co from 'co';

class TableRegisters extends Component{

    state={
        page:1,
        datos:[]
    }

    componentWillMount(){
        let page = this.state.page
        fetch(`SubTiposDocumentos/Registers/${this.state.page}`).then((response)=>{
            return response.json()
        })
        .then((registers)=>{
            this.setState({
                datos:registers
            })
        })
        
    }
    
    render(){
        return(
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Tipo</th>
                        <th>Nombre</th> 
                        <th>Auditoria</th>
                        <th>Estatus</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.datos.map((item)=>(
                            <tr key={item.idSubTipoDocumento}>
                                <td>{item.idTipoDocto}</td>
                                <td>{item.nombre}</td>
                                <td>{item.auditoria}</td>
                                <td>{item.estatus}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        )
    }
}

export default TableRegisters

/*
{
    this.props.data.map((item) =>(
        
        <tr>
            <td>{item.idTipoDocto}</td>
            <td>{item.nombre}</td>
            <td>{item.auditoria}</td>
            <td>{item.estatus}</td>
            </tr>
    ))
}
*/