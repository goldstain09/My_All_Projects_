import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';


// Quiz App

export default function HomeBody3() {
  return (
    <>
      <div className='container-fluid w-100  Home-body-3_mc'>
        <div className='w-50 ' style={{background: 'rgba(0,0,0,.6)'}}>
          <h5>
            “Cheating on a quiz show? That’s sort of like <font>plagiarizing</font> a comic strip.”<br />
          </h5>
          <h4>
            ~Paul Scofield
          </h4>

          <hr color='#81d7ff' />

          <p>I use <font>Context Api</font> in this Quizz app..!</p>
          <Link to={'/quiz'} className=' btn btn-outline-danger'>Explore Now!</Link>

        </div>
        <div className='w-50' style={{background: 'rgba(0,0,0,.8)'}}>
          <h1 >Try_</h1>
          <h2>quizze|s</h2>
        </div>


      </div>
    </>
  )
}
