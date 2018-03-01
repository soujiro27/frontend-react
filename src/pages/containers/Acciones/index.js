import React, { Component } from 'react';
import HomeLayout from './../../components/Acciones/HomeLayout'
import Header from './../../../header/components/header'
class Home extends Component{

    render(){
        return(
            <HomeLayout>
                <Header homeHeaderData={this.props.homeHeaderData.data}/>
            </HomeLayout>
        )
    }
}

export default Home;