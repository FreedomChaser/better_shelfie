import React, {Component} from 'react'
import Bins from '../test/Bins'

export default class D extends Component{
    render(){
        return(
            <div>
                <h1>Shelf D</h1>
                <div>
                <Bins id={'d'} history={this.props.history}/>
                </div>
            </div>
        )
    }
}
