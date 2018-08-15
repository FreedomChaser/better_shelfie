import React from 'react'
import {withRouter, Link} from 'react-router-dom'
class Nav extends React.Component{
    render(){
    // console.log('window', window.location.hash)
    // console.log('location', this.props)
        if(this.props.location.pathname !== '/') {
            return(       
                <Link to='/' >
                    <img src='logo.png' className='nav' alt='clicking this will take you to the home page'/>
                </Link>
            )
        }else{
    return null
        }
    }
}
export default withRouter(Nav)