import React, { Component } from 'react';
import HomeLayout from './../../components/Acciones/HomeLayout'
import Header from './../../../header/components/header'
import Main from './../../../main/components/Main'
import HeaderMain from './../../../main/components/HeaderMain'
import TableMain from './../../../main/containers/TableMain'
import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';

class Home extends Component{

    render(){
        return(
            <HomeLayout>
                <Header homeHeaderData={this.props.homeHeaderData.data}/>
                <Main>
                    <HeaderMain />
                    <TableMain />
                </Main>
            </HomeLayout>
        )
    }
}

export default Home;