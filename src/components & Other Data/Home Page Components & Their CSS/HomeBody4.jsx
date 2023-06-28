import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';


// Weather App

export default function HomeBody4() {
  return (
    <>
      <div className='container-fluid w-100 pl-0 Home-body-4_mc'>
        <div className='w-50 pl-0 ml-0' style={{ background: 'rgba(0,0,0,.6)' }}>
          <h1 >Try_</h1>
          <h2>Weather App</h2>
        </div>
        <div className='w-50'>
          <p>I created this Weather App with <span>basic React functionalities...!</span></p>
          <Link to={'/weather'} className=' btn btn-outline-danger'>Explore this!</Link>
        </div>
      </div>
    </>
  )
}
