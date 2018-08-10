import React, {Component} from 'react'

export default class DisplayBin extends Component{
    constructor(){
        super()

        this.state={
           name: '',
           price: 0,
           imgUrl: '' 
        }
    }
    //have an axios.post that pulls info from url params(through params) and state(through body) to pass everything to server 
    render(){
        return(
            //this is where I'll add all the input boxes and such
            <div>add bin</div>
        )
    }
}