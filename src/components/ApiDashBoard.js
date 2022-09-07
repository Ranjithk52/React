import React, { Component } from 'react'
import axios from 'axios';

export default class ApiDashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false

        }

    }

    componentDidMount() {

        axios.get("https://fakestoreapi.com/products")
            .then(resp => {
                this.setState({
                    items: resp.data,
                    DataisLoaded: true

                })
            })
    }
    render() {
        return (
            
            // <div >
            //     <h1> Fetch data from an api in react </h1>  {
            //         this.state.items.map((item) => {
            //             return (
            //                 <div className="row col-12">

            //                         <div className="col-4">

            //                             <div className="card card-center ">

            //                                 <center> <img src={item.image} alt={item.id} style={{ width: "150px", height: "150px" }}></img></center>

            //                                 <div className="card-body">

            //                                     <h5 className="card-title">{item.id}</h5>

            //                                     <p className="card-text">{item.title}</p>
            //                                     <p className='card-text'>{item.price}</p>


            //                                 </div>

            //                             </div>
            //                             <button className='btn btn-primary'>BUY</button>
            //                         </div>


            //                      </div>
                            
            //                


            //             )
            //         }
            //         )
            //     }
            // </div>


            <div className='container-fluid'>
            <div className="row" >
                <div className="card-group">
                    {this.state.items.map((item)=>{
                        return (
                            <div className='col-3 mb-2' >
                                <div className="card" style={{ height: "25rem", width: "24rem" }}>
                                    <div class="card-header">
                                    <button className='btn btn-primary'>BUY</button>
                                        <p className="card-text"><b>Category :{item.category}</b></p>
                                    </div>
                                    <img src={item.image} className="card-img-top" alt="Network Issue" id="imagecard" />
                                    <div className="card-body">
                                        <p className="card-title"> <b>Title :</b>{item.title}</p>
                                        {/* <p className="card-text"><b> Description :</b>{res.description}</p> */}
                                    </div>
                                    <div class="card-footer text-muted d-flex justify-content-between">
                                        <p><b>Rate :{item.rate}</b></p>
                                        <p className="card-text"><b>Count :{item.count}</b></p>
                                        <p><b>Price :{item.price}</b></p>
                                        
                                    </div>
                                  
                                </div>
                                
                            </div>
                           
                        )
                    })}
                </div>



           </div>
        </div>
           
        )
    }
}
