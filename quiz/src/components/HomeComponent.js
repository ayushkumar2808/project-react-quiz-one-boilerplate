import React  from 'react'
import './component.css'
import { Link} from 'react-router-dom'

export default function Home() {


    return (
        <>
        <div id='home-div'>
            <h1 className='white-text'>Quiz App</h1>
           <Link to='/quiz' id='play-button' >Play </Link>
        </div>
        </>
    )
}