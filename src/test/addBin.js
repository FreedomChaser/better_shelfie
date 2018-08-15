import React, {Component} from 'react'
import axios from 'axios'
import Nav from '../nav/nav'
import {Link} from 'react-router-dom'

export default class DisplayBin extends Component{
    constructor(){
        super()

        this.state={
           name: '',
           price: 0,
           imgUrl: '' 
        }
        this.addInventory = this.addInventory.bind( this )
    }

//figure out how to catch and send user error for too long an image url string
//write a method with an if else where if url is too long(using parse variable < 250) send an alert saying 'url too long'
//else set state for url
checkURL(val){
    let str = val.length
    if(str > 250){
        alert('URL exceeds max character length of 250')
    }else{
        this.setState({imgUrl: val})
    }
}
    //have an axios.post that pulls info from url params(through params) and state(through body) to pass everything to server
addInventory(){
    let shelfId = this.props.match.params.shelfId
    let binNum = Number(this.props.match.params.index) + 1
    if(!this.name || !this.price || !this.imgUrl){
        return alert('Please fill in all fields')
    }else{
        axios.post(`/api/bins/${shelfId}/addBin/${binNum}`, {
        product_name: this.state.name, 
        price: this.state.price, 
        img_url: this.state.imgUrl
    })
    //add the routing to send user back to shelf view 
    .then(() => {
        this.props.history.push(`/shelf/${shelfId}`)})

    }
}
    
    render(){
    // console.log('props', this.props)
        
        return(
            //this.props.match.params.shelfId OR index (+1)
            //fix it so empty vals can't be saved
            <div className='middle'>
                <header className='addHeader'>
                <Nav/>
                <Link to={`/shelf/${this.props.match.params.shelfId}`}>
                <h1 className='addH1'>Shelf {this.props.match.params.shelfId}</h1>
                </Link>
                <h2 className='addH2'>Add to Bin {Number(this.props.match.params.index) + 1}</h2>
                </header>
                <main className='addMain'>
                <p className='addP'>Name</p>
                <input className='inputAdd' onChange={e => this.setState({name: e.target.value})}></input>
                <p className='addP'>Price</p>
                <input className='inputAdd' onChange={e => this.setState({price: e.target.value})} placeholder='$0.00'></input>
                <p className='addP'>Image url</p>
                <input className='inputAdd' onChange={e => this.checkURL(e.target.value)} placeholder='character limit 250'></input>
                <button className='addBtn' onClick={this.addInventory}>+ Add Inventory</button>
                </main>
            </div>
        )
    }
}