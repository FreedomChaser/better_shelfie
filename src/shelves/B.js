import React from 'react'
import Bins from '../test/Bins'
import Nav from '../nav/nav'

export default class B extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <div className='shelf'>
                    <Nav/>
                    <h1 className='binsH1'>Shelf B</h1>
                </div>
                <div>
                <Bins id={'b'} history={this.props.history}/>

                </div>
            </div>
        )
    }
}
