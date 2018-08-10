import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Bins extends Component{
    constructor(props){
        super(props)

        this.state ={
            bins: []
        }
    }
    //add res logic
    //get bin properly displaying on all 4 shelves 
    //link bin to b,c, d
    // get nav working to add bin or disp bin
    //build out add and disp
    componentDidMount(){
        axios.get('/api/shelves/' + this.props.id)
        .then(res => {
            this.setState({bins: res.data})
        })
    }

       
    //        for(i=0; i<6; i++){
    //            //do a get request
    //            //if get returns null dipsplay add bid with a link (through routes.hstory.push) to create bin comp
    //            //if get returns data display bin title and  link to bin display comp
    //             if(axios.get(`/api/shelves/${this.props.match.params.id}/binId`===null){
    //                 <Link to=`/api/shelves/`>+ Add Inventory</Link>
    //             })
    //        }
    //    }
    render(){ 
    // console.log(this.props)
        console.log(this.state.bins)
        // for(let i = 0; i<6; i++){
        //     // let newBins = this.state.map.bins(e => {
        //     //     if()
        //     // })
        //     let newBins = []
        //     if(this.state.bins){
        //         newBins.push(i)
        //     }else{
        //         newBins.push(null)
        //     }
        //     //look in bins array
        //     //if a bin exists display button on click and bin name
        //     //if bin doesn't exist add a button that says add inventory
        // }
        // let nullBin = Array(5).fill(null).map((e, i) => {
        //     if(bins.includes(i+1)){
        //         return i+1
        //     }else{
        //         return null
        //     }
        // })
        let bin = this.state.bins.map(e => {
            if(e.product_name && e.price){
                return <button onClick={()=>this.props.history.push(`/bins/${e.shelf_id}/displayBin/${e.bin_number}`)}>Bin {e.bin_number}</button>
                // <Link to=''>{e.bin_number}</Link>
            }else{
                return <button onClick={()=>this.props.history.push(`/bins/${e.shelf_id}/addBin/${e.bin_number}`)}>+ Add Inventory</button>
            }
        })
       return(
           <div>
                {bin}
           </div>
       )
   } 
}
