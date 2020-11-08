import React, { useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
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
import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectUser} from './features/userSlice'
import AfterLogin from './AfterLogin';
import BeforeLogin from './BeforeLogin';
import { auth } from './firebase';
import AfterApp from './AfterApp';
import ScrollToTop from "react-scroll-to-top";


function App() {
  const user = useSelector(selectUser)
const dispatch = useDispatch()
    useEffect(() => {
       auth.onAuthStateChanged((authUser) =>{
            console.log("User is", authUser)
           if (authUser){
               // User Logged In
               dispatch(login({
                uid : authUser.uid,
                photo : authUser.photoURL,
                email:authUser.email,
                name : authUser.displayName
               }))
           } else{
               // user logged out
               dispatch(logout())
           }
       })
    }, [dispatch])

  return (
    

      
      <>
      <div className="App">
      <ScrollToTop label="Scroll" smooth color="#6f00ff" />
      {user ? 
    <>
     <AfterApp/> 
    </>  : (
        <>
        
         
         <BeforeLogin/>
</>   )
    }
    
      </div>


     </>
  );
}

export default App;
