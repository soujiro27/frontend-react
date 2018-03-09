import React, { Component } from 'react';
import SubMenuElement from './../components/submenu'
import './menu-item.css'

class MenuItem extends Component{

    state={
        visible:false
    }


    create_array_sub_menu_item(){

        let item = []

        this.props.submenu.forEach(element => {
            
            if(this.props.modulo.toUpperCase() == element.panel ){
                
                item.push(element)
            }
        });

        return item
        
    }


    handleClickSubMenu(event){
        this.setState({
            visible:!this.state.visible
        })
    }


    link_inicio_exit(){
        if(this.props.modulo == 'inicio'){  
            return '/SIA'
        } else if (this.props.modulo == 'exit'){
            return '/SIA/cerrar'
        } else { 
            return '#!'
        }

    }

    render(){
        let link = this.link_inicio_exit()
        let subMenuItem = this.create_array_sub_menu_item()
        return(

            <li className="has_sub">
                <a 
                    href={link} 
                    onClick={this.handleClickSubMenu.bind(this)}
                    className={this.state.visible?'selected':'no-selected'} 
                >
                    
                    <div className="nav-item-icon">
                        <i className={this.props.icon}></i> 
                    </div>
                    
                    <p>{this.props.nombre}</p>
                    
                    <span  className={this.state.visible?'arrow-down':'arrow-right'}>
                        {
                            this.props.flecha &&
                            <i className="fas fa-angle-right"></i>
                        }
                    </span>
                </a>
               
                        <ul className={this.state.visible?'visible':'no-visible'}>
                            {
                                subMenuItem.length > 0 &&
                                subMenuItem.map((item) => {
                                    
                                    return <SubMenuElement {...item}  key={item.idModulo}/>
                                })
                            }
                        </ul>
               
          </li>

        )
    }

}

export default MenuItem;