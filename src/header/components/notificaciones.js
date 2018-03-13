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
    
    

    notifications_icon(){

        let icon

        if(this.props.notificaciones >0 ){

            icon = <i className="far fa-envelope"></i>

        } else {

           icon = <i className="far fa-envelope-open"></i>
        }

        return icon

    }

    
    render(){

        return(
            <div className="col-lg-2 Notificaciones">
            <a href="/SIA/notificaciones">
                {this.notifications_icon()}
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