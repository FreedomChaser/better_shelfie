import React from 'react'
import {Route, Switch} from 'react-router-dom'
import A from '../shelves/A'
import B from '../shelves/B'
import C from '../shelves/C'
import D from '../shelves/D'
import Home from '../Home'
// import Bins from '../test/Bins'
import displayBin from '../test/displayBin'
import addBin from '../test/addBin'
//import four shelves and add routes
export default function Nav(){
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/a' component={A}/>
                <Route path='/b' component={B}/>
                <Route path='/c' component={C}/>
                <Route path='/d' component={D}/>
                {/* <Route path='/shevles/:shelfId' component={Bins}/> */}
                <Route path='/bins/:shelfId/displayBin/:binNumber' component={displayBin}/>
                <Route path='/bins/:shelfId/addBin/:binNumber' component={addBin}/>
            </Switch>
        </div>
    )
}
