import React from 'react'
import Bins from '../test/Bins'
import Nav from '../nav/nav'
export default class C extends React.Component{
    render(){
        return(
            <div>
                <div className='shelf'>
                    <Nav/>
                    <h1 className='binsH1'>Shelf C</h1>
                </div>
                <div>
                <Bins id={'c'} history={this.props.history}/>
                </div>
            </div>
        )
    }
}
