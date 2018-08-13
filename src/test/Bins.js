import React, {Component} from 'react'
import axios from 'axios'

export default class Bins extends Component{
    constructor(props){
        super(props)

        this.state ={
            bins: []
        }
    }
    
    componentDidMount(){
        axios.get('/api/shelves/' + this.props.id)
        .then(res => {
            // console.log('res', res)
            const newBins = []
            let bind = res.data
            for(let i=1; i<=5; i++){
                let match =bind.filter(bin => {
                    return bin.bin_number === i
                })

                if(match[0]){
                    newBins.push(match[0])
                }else{
                    newBins.push(null)
                }
            }
            this.setState({bins: newBins})
        })
    }

       
    render(){ 
    // console.log('props', this.props)
        // console.log('state', this.state.bins)
        
        let bin = this.state.bins.map((e,i) => {
            if(e === null){
                return <button className='nullBtn' onClick={()=>this.props.history.push(`/bins/${this.props.id}/addBin/${i}`)}>+ Add Inventory</button>
                // <Link to=''>{e.bin_number}</Link>
            }else{
                return <button className='binBtn' onClick={()=>this.props.history.push(`/bins/${e.shelf_id}/displayBin/${e.bin_number}`)}>Bin {e.bin_number}</button>
            }
        })
       return(
           <div className='binsBtn'>
                {bin}
           </div>
       )
   } 
}
