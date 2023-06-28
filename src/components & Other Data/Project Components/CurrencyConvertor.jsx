import React from 'react';
import './Css/Currency.scss';

export default function CurrencyConvertor() {
  return (
    <>
    <div className='container CurrencyCont'>
     <div className='row'>
       <div className="col col-12">
         <h1 className="h1">
           Here's my Currency Convertor App... <br />
           In this you only have to Select any country currency and in which you want to convert it!
           & on Input you get the converted value.
         </h1>
       </div>
     </div>
     <div className="row linkss">
       <div className="col col-12 ">
         <h3 className='mt-5 '>Here's the link...</h3><h4 className=''><a target='_new' href="https://goldstain09.github.io/Currency-Convertor-App/">Explore</a></h4>
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
