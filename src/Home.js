import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component{
    render(){
        return(
            <div>
              <header className='title'>
                <img src='logo.png' className='homeImg' alt='company logo'/>
                <h1 className='homeH1'>Shelfie</h1>
            </header>
        <main className='homeBtn'>    
        <Link to='/shelf/a'>
          <button>
            <h2>
              Shelf A
            </h2>
          </button>
        </Link>
        <Link to='/shelf/b'>
          <button>
            <h2>
              Shelf B
            </h2>
          </button>
        </Link>
        <Link to='/shelf/c'>
          <button>
            <h2>
              Shelf C            
            </h2>
          </button>
        </Link>
        <Link to='/shelf/d'>
          <button>
            <h2>
              Shelf D
            </h2>
          </button>
        </Link>
        </main>
            </div>
        )
    }
}
    
    