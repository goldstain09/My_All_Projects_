import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';


// Currency Convertor

export default function HomeBody2() {
  return (
   <>
           <div className='container-fluid w-100 Home-body-2_mc'>
            <div className='w-50' style={{background:'rgba(0,0,0,.5)'}}>
                <h1>Try...</h1>
                <h2>Currency</h2>
                <h3>Convertor</h3> 
            </div>
            <div className='w-50'>
                <h5>i use  <span>'Redux Toolkit'</span> & <span >"Saga Middleware"</span > in this Project. And <font>fetch</font> currency data from an API...</h5>
                <Link to={'/currency'} className='btn btn-outline-danger'>Explore Now!</Link>
             
            </div>
        </div>
   </>
  )
}
