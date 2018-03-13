import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import co from 'co'
import Home from './../../../pages/containers/subTipos/create';

const app = document.getElementById('app');


Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
  });
  


function load(){
    let Promesas = co(function *(){
        let header = yield axios.get('/SIA/juridico/Api/headerData');
        let menu = yield axios.get(`/SIA/lstModulosByUsuarioCampana/${header.data.idCuentaActual}`)
        
        render(
                <Home 
                    homeHeaderData={header} 
                    menuData={menu} 
                />
                ,app
            )
    })
}

load()