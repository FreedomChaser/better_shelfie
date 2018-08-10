import React from 'react'
import Bins from '../test/Bins'

export default class C extends React.Component{
    render(){
        return(
            <div>
                <h1>Shelf C</h1>
                <div>
                <Bins id={'c'}/>
                </div>
            </div>
        )
    }
}
