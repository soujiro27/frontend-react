import React, { Component } from 'react';
import PaginationItem  from './pagination-item'
class Pagination extends Component{

    state = {
        page:''
    }

    handlePage(number){

        this.setState({
            page:number
        })
        this.props.indexPage(number)
       
    }
  
    render(){

        let paginas = this.props.pages
        
        return(
            <nav aria-label="...">
                <ul className="pagination"  ref={(ref)=>(this.ul = ref)} >
                {
                    paginas.map((item)=>(
                        <PaginationItem number={item+1} selectPage={this.handlePage.bind(this)} key={item+1}/>
                    ))
                }
                </ul>
            </nav>
        )
    }

}

export default Pagination