import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Bins extends Component{
    constructor(){
        super()

        this.state ={
            bins: []
        }
    }

    componentDidMount(){
        axios.get(`/api/shelves/${this.props.match.params.id}`).then(res => {
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
       return(
           <div>
                <Link to=''>Bin </Link>
                <Link to=''>Bin </Link>
                <Link to=''>Bin </Link>
                <Link to=''>Bin </Link>
                <Link to=''>Bin </Link>
           </div>
       )
   } 
}
