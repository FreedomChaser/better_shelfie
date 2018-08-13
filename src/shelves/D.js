import React, {Component} from 'react'
import Bins from '../test/Bins'
import Nav from '../nav/nav'

export default class D extends Component{
    render(){
        return(
            <div>
                <div className='shelf'>
                    <Nav/>
                    <h1 className='binsH1'>Shelf D</h1>
                </div>
                <div>
                <Bins id={'d'} history={this.props.history}/>
                </div>
            </div>
        )
    }
}
