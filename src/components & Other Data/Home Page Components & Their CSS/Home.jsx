import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import HomeBody1 from './HomeBody1';
import HomeBody2 from './HomeBody2';
import HomeBody3 from './HomeBody3';
import HomeBody4 from './HomeBody4';
import HomeBody5 from './HomeBody5';
import HomeForm from './HomeForm';




const Home = () => {
    return (
        <>
            <div className='w-100 home-page_main' >
                <h2>Hello, <span>Welcome to</span></h2>
                <h1>All-In___---|<span>&nbsp;One</span></h1>
                <p>My all React projects are here in this single page application,
                    some of my Web Design Projects are <Link to={'/web'} className='mx-1 btn btn-outline-light'>here</Link>,& also
                    <a className='btn mr-3 btn-outline-light' target='_new' href='https://github.com/goldstain09'>Explore</a> My <span>Github...</span>
                </p>
                <h5 className='text-danger'>NOTE* I'm a STUDENT... So, if you found anything in any of my project that I should learn or implement in my future projects,
                    then please give your important suggestions... to improve it! Thankyouu..</h5>


            </div>
            {/* ================================== */}
            <HomeBody1 />
            <HomeBody2 />
            <HomeBody3 />
            <HomeBody4 />
            <HomeBody5 />
            <div>
                <h6 className='h6 w-75  text-left m-2' style={{
                    color: ' #81d7ff', fontFamily: "'Raleway', sans-serif"
                }}> <span className='badge text-bg-danger text-dark bold'>Note*</span>  This is my mini project, in which I created this form and connect it with FireBase/Firestore,
                    And also did validation. One more amazing functionality is that if someone trying to give feedback again by same email it will show a Check-Box...
                    & without checking it you cannot be able to submit again with same email..! And After submitting the form, it will disabled! </h6>
            </div>
            <HomeForm />
        </>
    )
}

export default Home;