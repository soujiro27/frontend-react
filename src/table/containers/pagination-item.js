import React, { Component } from 'react';

class PaginationItem extends Component{


    handleClickPagination(){
        let number = this.li.value
        this.props.selectPage(number)
    }

    render(){
        return(
                <li className="page-item" 
                    onClick={this.handleClickPagination.bind(this)} 
                    value={this.props.number}
                    ref={(ref)=>(this.li = ref)}
                    >
                        <a className="page-link" href="#!">
                            {this.props.number}
                        </a>
                </li>
        )
    }
}


export default PaginationItem