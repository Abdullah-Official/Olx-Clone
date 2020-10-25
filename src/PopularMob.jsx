import React from 'react'
import NavbarCat from './NavbarCat'
import PopJumbortron from './PopJumbortron'
import PopularAdds from './PopularAdds'
import './PopularCommon.css'
import SideNavigation from './SideNavigation'

function PopularMob() {
    return (
        <>
        <NavbarCat/>
          <div className="pl-5 popular__main">
            <span className='pop_searches'>Popular Searches: </span>
            <span className='pop_cat'> Iphone <span> - </span> Samsung</span>
            </div>
            <div><PopJumbortron/></div>
            <div className="nav">
              <ul className="nav__ul">
                <li>Home </li>
                <li>/</li>
                <li>Mobiles</li>
                <li>/</li>
                <li>Mobile Phones</li>
                <li>/</li>
                <li>Mobile Phones in Azad Kashmir</li>
              </ul>
            </div>

            <div className="main_Category pl-4">
              <h1>Mobile Phones in Mirpur</h1>
            </div> <br/>

            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                <div className="sideBar">
              <SideNavigation/>
            </div>
            
                </div>
                <div className="col-md-9">
                  <div className="top_add">
                    <p>485 ads in &nbsp;<b>Mirpur</b></p>
                  </div>
                  <hr/>
              <PopularAdds/>
            </div> 
              </div> <br/> <br/>
            </div>
        </>
    )
}

export default PopularMob
