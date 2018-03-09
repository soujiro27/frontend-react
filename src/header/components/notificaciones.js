import React, { Component } from 'react';

import './notificaciones.css';


class Notificaciones extends Component{

    notifications_className(){

        let notifications_state;

        if(this.props.notificaciones >0 ){

            notifications_state = 'notifications_on';
        } else {

            notifications_state = 'notifications_of';
        }

        return notifications_state;
    }
    
    
    
    render(){

        return(
            <div className="col-lg-2 Notificaciones">
            <a href="#!">
                <i className="far fa-envelope"></i>
                <h4>Tienes
                    <strong className={this.notifications_className()}>{this.props.notificaciones}</strong>
                    Notificaciones
                </h4>
            </a>
        </div>   
        )
    }
}




/*function Notificaciones(props){

    return(
        <div class="col-lg-2 Notificaciones">
            <a href="#!">
                <i class="far fa-envelope"></i>
                <h4>Tienes
                
                </h4>
            </a>
        </div>   
    )

}
*/
export default Notificaciones;