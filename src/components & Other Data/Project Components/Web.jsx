import React from 'react';
import './Css/Web.scss';

export default function Web() {
  return (
    <>
      <div className='container webprojects'>
        <div className="row d-flex ">
          <div className="col col-12 col-sm-12 col-md-4 my-5 col-lg-4 col-xl-4 col-xxl-4 text-center">
            <h3 className='text-light'>Project 1~</h3>
            <p className='card-text text-light text-center mt-5'>This is my first fully responsive website I created with bootstrap...</p>
            <a href="https://goldstain09.github.io/First-Site--fully-responsive-/" target='_new' className='mt-2 mt-md-4 mt-lg-5 mt-xl-5 mt-sm-3 btn btn-outline-danger'>Explore</a>   
          </div>
          <div className="col col-12 col-sm-12 col-md-4 my-5 col-lg-4 col-xl-4 col-xxl-4 text-center">
            <h3 className='text-light'>Project 2~</h3>
            <p className='card-text text-light text-center mt-5'>This is a Product Landing Page, I created with bootstrap, used some Javascipt... (OTP-Verification is dummy)</p>
            <a href="https://goldstain09.github.io/Project-with-some-Javascript/" target='_new' className='mt-2 mt-md-4 mt-lg-5 mt-xl-5 mt-sm-3 btn btn-outline-danger'>Explore</a>   
          </div>
          <div className="col col-12 col-sm-12 col-md-4 my-5 col-lg-4 col-xl-4 col-xxl-4 text-center">
            <h3 className='text-light'>Project 3~</h3>
            <p className='card-text text-light text-center mt-5'>This is also a Product Landing Page, but this website's whole designs & all animations are designed by me, & used Javascript too...</p>
            <a href="https://goldstain09.github.io/Trying-Product-Landing-Page/" target='_new' className='mt-2 mt-md-4 mt-lg-5 mt-xl-5 mt-sm-3 btn btn-outline-danger'>Explore</a>   
          </div>
        </div>

      </div>

      <div style={{
      position:'absolute', 
      right:'3rem', 
      bottom:'4vh', 
      background:'black', 
      display:'flex',
      gap:'1rem',
      color:'white',
      fontSize:'1.5rem'}}>
      <a style={{textDecoration:'none'}} href="https://github.com/goldstain09?tab=repositories" target='_new'><i className='bi bi-github'> Source Code</i></a>
    </div>
    </>
  )
}
