import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';


// Todo App

export default function HomeBody1() {
    return (
        <div className='container-fluid  w-100 Home-body-1_mc' >
            <div style={{background:'rgba(0,0,0,.7)'}}>
                <h5 className='mr-2'>
                    "Subtracting from your list 
                    of <font>priorities</font> is as <span>'important'</span> as
                    adding to it"
                </h5>
                <hr color='#81d7ff'/>

                <p>I create this to-do app with the help of both <font>context Api'</font>  &  <span>Redux Toolkit,..Saga!!</span></p>
                <Link to={'/todo'} className=' btn btn-outline-danger'>Explore Now!</Link>
              
            </div>
            <div>
                <h1>try</h1>
                <h2>To - do</h2> 
            </div>


        </div>
    )
}
