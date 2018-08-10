import React from 'react'
import Bins from '../test/Bins'

export default class B extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Shelf B</h1>
                <div>
                <Bins id={'b'}/>

                </div>
            </div>
        )
    }
}
