import React from 'react';
import './Css/Quizz.scss';

export default function QuizApp() {
  return (
    <>
     <div className='container QuizzCont'>
      <div className='row'>
        <div className="col col-12">
          <h1 className="h1">
            Here' the two links of my Quizze Apps... <br />
            Little difference in both of projects. (Made-up with Context-Api)
          </h1>
        </div>
      </div>
      <div className="row linkss">
        <div className="col col-12 ">
          <h3 className='mt-5 '>In this you got three levels Easy, Normal & Hard-- One by One...</h3><h4 className=''><a target='_new' href="https://goldstain09.github.io/Quizz-React-App__1/">Explore</a></h4>
         <br/> <h3 className='mt-5 '>In this one you have to select any one...</h3><h4 className=''><a target='_new' href="https://goldstain09.github.io/Quizz-React-App__2/">Explore</a></h4>
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
