import React, { Component } from 'react';
import './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../../../css-external/style-dashboard.css';

import HomeLayout from './../../components/HomeLayout';
import Header from './../../../header/components/header';
import Main from './../../../main/components/Main';
import Menu from './../../../menu/containers/menu';
import MainContainer from './../../../table/components/table-container';
import FormHeader from './../../../form/components/form-header-catalogos';
import FormContainer from './../../../form/containers/subTipos/create-form-container';

class Home extends Component{


    render(){
        
        return(
            <HomeLayout>
                <Header homeHeaderData={this.props.homeHeaderData.data}/>
                <Main >
                    <Menu menu={this.props.menuData.data} />
                    <MainContainer>
                       <FormHeader />
                       <FormContainer />
                    </MainContainer>
                </Main>
            </HomeLayout>
        )
    }
}

export default Home;