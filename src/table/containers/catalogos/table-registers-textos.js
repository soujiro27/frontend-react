import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class TableRegisters extends Component{

    state={
        datos:[]
    }


    renderList(page){
      
        fetch(`DoctosTextos/Registers/${page}`).then((response)=>{
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
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th scope="col" >Id</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Texto</th> 
                        <th scope="col">Estatus</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.datos.map((item)=>(
                            <tr key={item.idDocumentoTexto}>
                                <td scope="row">{item.idDocumentoTexto}</td>
                                <td>{item.idTipoDocto}</td>
                                <td>{renderHTML(item.texto)}</td>
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
