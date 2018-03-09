import React, { Component } from 'react';
import MenuData from './../../api/menu.json';
import MenuItem from './menu-item';
import './menu.css';


class Menu extends Component {

    create_array_modulos(){

        let array = ['inicio']
        this.props.menu.datos.map((item)=>{
            array.push(item.panel.toLowerCase())
        })
        array.push('exit')

        let panel = array.unique()

        return panel
    }



    create_array_panel(){

        let modulos = this.create_array_modulos()
        let panel = []

        modulos.forEach(element => {
            
            MenuData.menu.forEach(item => {

                if(element == item.modulo) {
                    
                    panel.push(item)
                }

            })

        })

        return panel

    }

    render(){


        let panel = this.create_array_panel()

        return (
            <div className="sidebar">
                <ul id="nav" className="nav flex-column">
                {
                    panel.map((item) => {
                        return <MenuItem {...item} key={item.id} submenu={ this.props.menu.datos} />
                    })
                }
                </ul>
            </div>
        )
    }
}

export default  Menu;

