import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Loads from './loads/loads';
import Home from './../pages/containers/Acciones/index';



const  header = document.getElementById('header');
let loads = new Loads(); 

function load(){
    axios.all([loads.load_header_data,loads.load_table_data])
    .then(axios.spread((acct, perms)=>{
        acct().then((response)=>{
            console.log(response)
        })
        perms().then((response)=>{
            console.log(response)
        })
    }))
}
/*
function load() {
    axios.get('Api/headerData')
    .then( (response) => {
            
            render(<Home homeHeaderData={response} />,header);
            
        })

}
*/  
load();




