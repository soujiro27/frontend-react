import React, { Component } from 'react';
import PaginationItem  from './../components/pagination-item';
class Pagination extends Component{

    render(){
        let paginas = this.props.pages
        
        return(
            <nav aria-label="...">
                <ul className="pagination">
                {
                    paginas.map((item)=>(
                        <PaginationItem number={item+1} />
                    ))
                }
                </ul>
            </nav>
        )
    }

}

export default Pagination