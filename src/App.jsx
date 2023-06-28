import React from 'react';
import './components & Other Data/Home Page Components & Their CSS/Home.css'
import Home from './components & Other Data/Home Page Components & Their CSS/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components & Other Data/Home Page Components & Their CSS/Navbar';
import Todo from './components & Other Data/Project Components/To-Do';
import CurrencyConvertor from './components & Other Data/Project Components/CurrencyConvertor';
import QuizApp from './components & Other Data/Project Components/QuizApp';
import WeatherApp from './components & Other Data/Project Components/WeatherApp';
import Recipe from './components & Other Data/Project Components/Recipe';
import Web from './components & Other Data/Project Components/Web';

function App() {
  return (
    <div className="container-fluid Main-page">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/currency' element={<CurrencyConvertor/>} />
        <Route path='/quiz' element={<QuizApp />} />
        <Route path='/weather' element={<WeatherApp />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/web' element={<Web />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
