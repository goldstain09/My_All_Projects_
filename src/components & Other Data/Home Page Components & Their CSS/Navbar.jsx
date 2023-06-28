import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Images/logo.png';
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="container-fluid fixed-top " >
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">

                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img src={logo} className='logo_img'/> &nbsp;&nbsp;
                    <span className="fs-4 Logo" style={{
                        background:'rgba(0,0,0,.7)',borderRadius:'10px'
                    }} >Goldstain</span>
                </a>

                <ul className="nav nav-pills d-flex align-content-center mr-3 gap-2 Mnvbar">
                    <li className="nav-item"><NavLink to={'/'} className="nav-link">Home</NavLink></li>
                    <li className="nav-item"><NavLink to={'/todo'} className="nav-link">To-Do</NavLink></li>
                    <li className="nav-item"><NavLink to={'/currency'} className="nav-link">Currency Convertor</NavLink></li>
                    <li className="nav-item"><NavLink to={'/quiz'} className="nav-link">Quizzes</NavLink></li>
                    <li className="nav-item"><NavLink to={'/weather'} className="nav-link">Weather App</NavLink></li>
                    <li className="nav-item"><NavLink to={'/recipe'} className="nav-link">Recipe App</NavLink></li>
                    <li className="nav-item"><NavLink to={'/web'} className="nav-link">Web Design Projects</NavLink></li>
                </ul>


                {/*                          OFF CANVAS                         */}

                <div className='Mnvbar-Canvas'>
                    <button 
                    className="btn bi bi-columns-gap text-light nav_Icon" 
                    type="button" 
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasExample" 
                    aria-controls="offcanvasExample"
                    >
                    </button>

                    <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                                <img src={logo} style={{
                                    width: '30px',
                                    height: '30px'
                                }} /> &nbsp;&nbsp;
                                <span className="fs-4 Logo" >Goldstain</span>
                            </a>
                            <button type="button" className="btn-close text-reset text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                <ul className="nav nav-pills d-block align-content-center mr-3 gap-2">
                                    <li className="nav-item"><NavLink to={'/'} className="nav-link text-dark">Home</NavLink></li>
                                    <li className="nav-item"><NavLink to={'/todo'} className="nav-link text-dark">To-Do</NavLink></li>
                                    <li className="nav-item"><NavLink to={'/currency'} className="nav-link text-dark">Currency Convertor</NavLink></li>
                                    <li className="nav-item"><NavLink to={'/quiz'} className="nav-link text-dark">Quizzes</NavLink></li>
                                    <li className="nav-item"><NavLink to={'/weather'} className="nav-link text-dark">Weather App</NavLink></li>
                                    <li className="nav-item"><NavLink to={'/recipe'} className="nav-link text-dark">Recipe App</NavLink></li>
                                    <li className="nav-item"><NavLink to={'/web'} className="nav-link text-dark">Web Design Projects</NavLink></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </header>




        </div>

    )
}
