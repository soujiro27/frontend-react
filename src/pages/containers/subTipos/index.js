import React, { Component } from 'react';
import './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../../../css-external/style-dashboard.css';

import HomeLayout from './../../components/Acciones/HomeLayout'
import Header from './../../../header/components/header'
import Main from './../../../main/components/Main'
import Menu from './../../../menu/containers/menu';
import Table from './../../../table/components/table-container'
import TableHeader  from './../../../table/components/table-header-catalogos'
import TableRegisters  from './../../../table/containers/catalogos/table-registers-subTipos';
import PagesContainer from './../../../table/containers/pagination';

class Home extends Component{

    state = {
        page:1
    }

    handlePage(number){
       
        this.setState({
            page:number
       })
    }


    render(){
        
        return(
            <HomeLayout>
                <Header homeHeaderData={this.props.homeHeaderData.data}/>
                <Main >
                    <Menu menu={this.props.menuData.data} />
                    <Table>
                        <TableHeader />
                        <TableRegisters pageNumber={this.state.page} />
                        <PagesContainer pages={this.props.pages.data} indexPage={this.handlePage.bind(this)} />
                    </Table>

                </Main>
            </HomeLayout>
        )
    }
}

export default Home;