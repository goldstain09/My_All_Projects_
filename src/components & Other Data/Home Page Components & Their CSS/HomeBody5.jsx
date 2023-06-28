import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

// NotePad

export default function HomeBody5() {
    return (
        <>
            <div className='container-fluid w-100 pl-0 Home-body-5_mc'>
                <div className='w-50'>
                    <h5>"Share, discover, and savor. From kitchen to community. Create, explore, and <span>enjoy the finest recipes with the app.</span>"</h5>
                    <p>I used <span>Redux Toolkit</span> & <span>Saga Middleware</span> in this Recipe App..!</p>
                    <p>Give it a chance, You'll love it!</p>
                    <Link to={'/recipe'} className=' btn btn-outline-danger'>Explore this!</Link>
                </div>
                <div className='w-50 pl-0 ml-0'>
                    <h1 >Try</h1>
                    <h2>Recipe App</h2>
                </div>
            </div>
        </>
    )
}
