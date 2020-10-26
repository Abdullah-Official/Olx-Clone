import React from 'react'
import './CategDrop.css'
import CommonPopularHeader from './CommonPopularHeader'
import NavbarCat from './NavbarCat'

function PopularHouses() {
    return (
        <>
        <NavbarCat/>
        <div>
              <CommonPopularHeader
              search1 = 'house for sale'
              search2 = 'property'
              nav1 = 'Property for Sale'
              nav2 = 'Houses'
              nav3 = 'Houses in Azad Kashmir'
              mainHeading = 'Houses in Mirpur'
              
              />
            </div>   
        </>
    )
}

export default PopularHouses
