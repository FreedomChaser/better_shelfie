import React from 'react'
import Bins from '../test/Bins'
import Nav from '../nav/nav'

export default class Shelf extends React.Component{
    render(){
        const id = this.props.match.params.id
        return(
            <div>
                <div className='shelf'>
                    <Nav/>
                    <h1 className='binsH1'>Shelf {id}</h1>
                </div>
                <div>
                    <Bins id={id} history={this.props.history}/>
                </div>
            </div>
        )
    }
}
