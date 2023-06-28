import React from 'react';
import './Css/Recipe.scss';

export default function Recipe() {
  return (
    <>
    <div className='container RecipeCont'>
     <div className='row'>
       <div className="col col-12">
         <h1 className="h1">
           & At last but not least! Here's my Recipe App... <br />
           This one is little bigger project because, I use firebase & Redux-Toolkit (Saga) here... <br />
           & this one also special because of it's functionality like you can search any recipe by name,  You also define recipes by categories, & and main thing you also add your own recipe...  
         </h1>
       </div>
     </div>
     <div className="row linkss">
       <div className="col col-12 ">
         <h3 className='mt-5 '>Here's the link...</h3><h4 className=''><a target='_new' href="https://recipe-project-d8465.web.app/">Explore</a></h4><br />
         <h3>Must Check-out it once...</h3>
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
