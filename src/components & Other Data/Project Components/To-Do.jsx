import React from 'react'
import './Css/Todo.scss';

export default function Todo() {
  return (
    <>
    <div className='container TodoCont'>
      <div className='row'>
        <div className="col col-12">
          <h1 className="h1">
            Here' the three links of my todoList Apps...
          </h1>
        </div>
      </div>
      <div className="row linkss">
        <div className="col col-12 ">
          <h3 className='mt-5 '>This was made with context-Api... (This is only on github, not Deployed...)</h3><h4 className=''><a target='_new' href="https://github.com/goldstain09/Todo-App-Context_API-">Explore</a></h4>
         <br/> <h3 className='mt-5 '>& This one made with React-Redux_ Toolkit (Saga)...</h3><h4 className=''><a target='_new' href="https://goldstain09.github.io/To-do-List-App-CRUD/">Explore</a></h4>
         <br/> <h3 className='mt-5 '>This one also made with React-Redux_ but a little bit difference...</h3><h4 className=''><a target='_new' href="https://goldstain09.github.io/Todo-App-with-Little-Difference-/">Explore</a></h4>
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
