import React, {Component} from 'react'
import axios from 'axios'

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
        .then(() => this.props.history.push(`/${shelf}`))
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
        .then(res => 
        {console.log(res)
            
            this.setState({
            bin_id: res.data[0].bin_id, 
            shelf_id: res.data[0].shelf_id, 
            bin_number: res.data[0].bin_number, 
            product_name: res.data[0].product_name, 
            price: res.data[0].price,
            img_url: res.data[0].img_url
        })})
        this.clickToggle()
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
            <div>
                <h1 className='binH1'>Shelf {shelf_id}</h1>
                <h2 className='binh2'>Bin {bin_number}</h2>
                <img src={img_url} alt={`${product_name}`} img width='150px'/>
                <p>Name</p>
                <p className='bold'>{product_name}</p>
                <p>Price</p>
                <p className='bold'>{price}</p>
                <button onClick={this.clickToggle}>Edit</button>
                <button onClick={() => this.deleteBinContents(bin_id, shelf_id)}>Delete</button>
            </div>
            )}else{
                return(
                <div>
                    <h1 className='binH1'>Shelf {shelf_id}</h1>
                    <h2 className='binh2'>Bin {bin_number}</h2>
                    <p>Name</p>
                    <input onChange={e => this.handleName(e.target.value)} placeholder={`${product_name}`}/>
                    <p>Price</p>
                    <input onChange={e => this.handlePrice(e.target.value)} placeholder={`${price}`}/>
                    <p>Image url</p>
                    <input onChange={e => this.handleUrl(e.target.value)} placeholder={`${img_url}`}/>
                    {this.state.edit === true? <button onClick={() => this.submitEdit(bin_id)}> Save </button>: null}
                </div>
                )
            
            }
           
    }
}