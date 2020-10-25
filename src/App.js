import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Navbar';
import NavbarCat from './NavbarCat';
import JumboImg from './JumboImg';
import CardCarousel from './CardCarousel';
import FreshRecommend from './FreshRecommend';
import OlxBanner from './OlxBanner';
import Footer from './Footer';
import FooterBottom from './FooterBottom';
import PopularMob from './PopularMob';
import {Redirect, Route, Router,Switch} from 'react-router-dom';
import Home from './Home'
import PopularCars from './PopularCars'
import PopularHouses from './PopularHouses'
import PopularTvAudio from './PopularTvAudio'
import PopularTablets from './PopularTablets'
import PopularLand from './PopularLand'
import PopularMotorcycles from './PopularMotorcycles'
import './CategDrop.css'


function App() {
  return (
    
      
      <>
      <div className="App">
      <Navbar/> 
      
      <Switch>
        <Route exact activeClassnMenu path='/' component={Home}/>
        <Route exact  path='/mobile' component={PopularMob}/>
        <Route exact  path='/cars' component={PopularCars}/>
        <Route exact  path='/motorcycles' component={PopularMotorcycles}/>
        <Route exact  path='/houses' component={PopularHouses}/>
        <Route exact  path='/tv-video-audio' component={PopularTvAudio}/>
        <Route exact  path='/tablets' component={PopularTablets}/>
        <Route exact  path='/land-plots' component={PopularLand}/>
        <Redirect component={Home}/>
      </Switch>
      <Footer/>
      <FooterBottom/>  
      </div>


     </>
  );
}

export default App;
