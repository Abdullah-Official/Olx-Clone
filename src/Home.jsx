import React from 'react'
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
import PopularMob from './PopularMob'
import {Router,Switch} from 'react-router-dom'


function Home() {
    return (
        <>
           <NavbarCat/>
      <JumboImg/> 
      <CardCarousel className="Carousel"/>
      <FreshRecommend />
      <OlxBanner/>
      
        </>
    )
}

export default Home
