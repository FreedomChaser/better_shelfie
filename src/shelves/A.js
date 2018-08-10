import React from 'react'
import Bins from '../test/Bins'

export default class A extends React.Component{
    render(){
        return(
            <div>
                <h1>Shelf A</h1>
                <div>
                    <Bins id={'a'} history={this.props.history}/>
                </div>
            </div>
        )
    }
}
