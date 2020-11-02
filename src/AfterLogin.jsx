import React from 'react'
import CardCarousel from './CardCarousel'
import FreshRecommend from './FreshRecommend'
import JumboImg from './JumboImg'
import Navbar from './Navbar'
import NavbarAfter from './NavbarAfter'
import NavbarCat from './NavbarCat'
import OlxBanner from './OlxBanner'
import './FreshRecommend.css'
import './CardCarousel.css'
import Footer from './Footer'
import FooterBottom from './FooterBottom'

function AfterLogin() {
    return (
        <>
           
            <NavbarCat/>
      <JumboImg/> 
      <CardCarousel className="Carousel"/>
      <FreshRecommend />
      <OlxBanner/>
      <Footer/>
      <FooterBottom/>
            
        </>
    )
}

export default AfterLogin
