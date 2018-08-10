import React, {Component} from 'react'

export default class DisplayBin extends Component{
    constructor(){
        super()

        this.state={
            bin: []
        }
    }
    //add a componentDidMount to add specific bin data to state
    //how do I pull both shelfid and bin name off params
    // componentDidMount(){
    //     axios.get()
    // }    
    render(){
        //map through state and display info
        return(
            <div>bins</div>
        )
    }
}