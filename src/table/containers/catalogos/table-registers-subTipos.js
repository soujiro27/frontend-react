import React, { Component } from 'react';
import axios from 'axios';
import co from 'co';

class TableRegisters extends Component{

    state={
        datos:[]
    }


    renderList(page){
      
        fetch(`SubTiposDocumentos/Registers/${page}`).then((response)=>{
            return response.json()
        })
        .then((registers)=>{
            this.setState({
                datos:registers
            })
        })
    }

    componentWillMount(){
       
        this.renderList(this.props.pageNumber)
    }
    

    componentWillReceiveProps(nextProps){
        this.renderList(nextProps.pageNumber)
    }


    
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
        
    componentWillUpdate(){

    }


    render(){


        return(
            <table>
                <thead className="table-light">
                    <tr>
                        <th>Id</th>
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
                                <td>{item.idSubTipoDocumento}</td>
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
