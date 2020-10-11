import React, { Component } from 'react'
import Navbar from './Nav';
import Sidebar from './Sidebar';
import Cards from './SimpleCard'
import axios from 'axios'


export default class Frontpage extends Component {

    state={
        products:[]

    }
    componentDidMount(){
        axios.get(`https:localhost:5000/`)
        .then(res=>{
            const products = res.data;
            this.setState({products})
        })
    }
    render() {
        return (
            <div>

                <Navbar/>
                <div className="row mt-5">
                    <div className="col-md-1">
                <Sidebar/>
                </div>
                <div className="col-md-5">
                    <ul>
                        {this.state.products.map(product=>
                            <li>{product.buyer_name}</li>
                        )}
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}
