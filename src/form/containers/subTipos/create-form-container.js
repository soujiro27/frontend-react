import React, { Component } from 'react';


class FormContainer extends Component {

    state = {
        documentos:[]
    }

    componentWillMount(){

        fetch('../Api/Documentos')
        .then((response) => response.json())
        .then((datos)=>{
            this.setState({
                documentos:datos
            })
        })


    }


    render(){
        return(
            <div className="form-container">
                <form >
                    <select>
                        {this.state.documentos.map((item) => (
                            <option value={item.idTipoDocto}>{item.nombre}</option>
                        ))}
                    </select>
                    <input type="text" />
                </form>
            </div>
        )
    }

}


export default FormContainer