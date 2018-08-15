import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Nav from '../nav/nav'

export default class DisplayBin extends Component{
    constructor(){
        super()

        this.state={
            bin_id: 0,
            shelf_id: '',
            bin_number: 0,
            product_name:'',
            price: '',
            img_url: '',
            edit: false
        }
        this.clickToggle = this.clickToggle.bind( this )
    }
    //add a componentDidMount to add specific bin data to state
    componentDidMount(){
        axios.get(`/api/bins/${this.props.match.params.shelfId}/displayBin/${this.props.match.params.binNumber}`)
        .then(res => this.setState({
            bin_id: res.data[0].bin_id, 
            shelf_id: res.data[0].shelf_id, 
            bin_number: res.data[0].bin_number, 
            product_name: res.data[0].product_name, 
            price: res.data[0].price,
            img_url: res.data[0].img_url
        }))
    } 
    
    clickToggle(){
        this.setState({edit: !this.state.edit})
    }
    
    deleteBinContents(id, shelf){
        axios.delete(`/api/deleteBin/${id}`)
        // this command isn't rerouting like it should but delete back to db works
        .then(() => this.props.history.push(`/shelf/${shelf}`))
    }

    handleName(name){
        this.setState({product_name: name})
    }
    handlePrice(price){
        this.setState({price: price})
    }
    handleUrl(url){
        this.setState({img_url: url})
    }

    //debug crash seems like data isn't returning correctly?
    submitEdit(id){
        let{bin_id, shelf_id, bin_number, product_name, price, img_url} = this.state
        axios.put(`/api/bin/${id}`, {bin_id, shelf_id, bin_number, product_name, price, img_url})
        this.clickToggle()
    }

    checkURL(val){
        let str = val.length
        if(str > 250){
            alert('URL exceeds max character length of 250')
        }else{
            this.setState({imgUrl: val})
        }
    }
    
    render(){
        let {
            bin_id,
            shelf_id,
            bin_number,
            product_name,
            price,
            img_url
        } = this.state
        
        // console.log('dispRes', this.state.bin)
        // console.log('dspProps', this.props)
       
        //conditionally render save and edit
        if(this.state.edit === false){ 
        return(
            <div className='middle'>
                <header className='addHeader'>
                    <Nav/>
                    <Link to={`/shelf/${shelf_id}`}>
                        <h1 className='addH1'>Shelf {shelf_id}</h1>
                    </Link>
                    <h2 className='addH2'>Bin {bin_number}</h2>
                </header>
                <main className='dispMain'>
                    <div className='dispImg'>
                        {/* is there a way to make image sizing dynamic? */}
                        <img src={img_url} alt={`${product_name}`} img width='150px'/>
                    </div>
                    <div className='dispDetails'>
                        <p className='dispNames'>Name</p>
                        <p className='dispInput'>{product_name}</p>
                        <p className='dispNames'>Price</p>
                        <p className='dispInput'>${price}</p>
                        <div className='dispBtns'>
                            <button className='binDispBtn' onClick={this.clickToggle}>Edit</button>
                            <button className='binDispBtn' onClick={() => this.deleteBinContents(bin_id, shelf_id)}>Delete</button>
                        </div>
                    </div>
                </main>
            </div>
            )}else{
                return(
                <div className='middle'>
                    <header className='addHeader'>
                        <Nav/>
                        <Link to={`/shelf/${shelf_id}`}>
                            <h1 className='addH1'>Shelf {shelf_id}</h1>
                        </Link>
                        <h2 className='addH2'>Bin {bin_number}</h2>
                    </header>
                    <main className='dispMainSave'>
                        <p className='addP'>Name</p>
                        <input className='inputAdd' onChange={e => this.handleName(e.target.value)} placeholder={`${product_name}`}/>
                        <p className='addP'>Price</p>
                        <input className='inputAdd' onChange={e => this.handlePrice(e.target.value)} placeholder={`${price}`}/>
                        <p className='addP'>Image url</p>
                        <input className='inputAdd' onChange={e => this.checkURL(e.target.value)} placeholder='character limit 250'></input>
                        <div className='dispBtns'>
                            {this.state.edit === true ? <button className='dispSaveBtn' onClick={() => this.submitEdit(bin_id)}> Save </button>: null}
                            <button className='binDispBtn' onClick={() => this.deleteBinContents(bin_id, shelf_id)}>Delete</button>
                        </div>
                    </main>
                </div>
                )
            
            }
           
    }
}