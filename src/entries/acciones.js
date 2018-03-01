import React from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import Home from './../pages/containers/Acciones/index';



const  header = document.getElementById('header');


function load() {
    axios.get('Api/headerData')
    .then( (response) => {
            
            render(<Home homeHeaderData={response} />,header);
            
        })

}

load();




